/**
 * EVANGELINA ATELIER — GitHub REST API Persistence Layer
 * 
 * SECURITY GUARANTEE:
 * - Credentials (PAT) are stored STRICTLY in `sessionStorage`.
 * - Tokens are NEVER written to source code, commits, cookies, or public files.
 * - When the browser tab closes, the token is automatically wiped from memory.
 * - All write operations verify the file SHA first to ensure clean, atomic commits.
 */

const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_STORAGE_KEY = 'evangelina_github_session';

class GitHubSyncService {
  constructor() {
    this.session = this.loadSession();
    this.isSyncing = false;
    this.listeners = [];
  }

  /**
   * Load active session from sessionStorage only
   */
  loadSession() {
    try {
      const stored = sessionStorage.getItem(GITHUB_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading GitHub session from sessionStorage', e);
    }
    return null;
  }

  /**
   * Save session to sessionStorage
   */
  saveSession(sessionData) {
    this.session = {
      token: sessionData.token ? sessionData.token.trim() : '',
      owner: sessionData.owner ? sessionData.owner.trim() : '',
      repo: sessionData.repo ? sessionData.repo.trim() : '',
      branch: sessionData.branch ? sessionData.branch.trim() : 'main',
      username: sessionData.username || ''
    };
    try {
      sessionStorage.setItem(GITHUB_STORAGE_KEY, JSON.stringify(this.session));
      this.notifyListeners();
    } catch (e) {
      console.error('Error saving session', e);
    }
    return this.session;
  }

  /**
   * Clear session (Logout)
   */
  clearSession() {
    this.session = null;
    try {
      sessionStorage.removeItem(GITHUB_STORAGE_KEY);
      this.notifyListeners();
    } catch (e) {
      console.error('Error clearing session', e);
    }
  }

  /**
   * Check if a valid GitHub session is active
   */
  isConnected() {
    return !!(this.session && this.session.token && this.session.owner && this.session.repo);
  }

  /**
   * Register state change listener
   */
  subscribe(fn) {
    this.listeners.push(fn);
  }

  notifyListeners() {
    const status = {
      connected: this.isConnected(),
      session: this.session ? {
        owner: this.session.owner,
        repo: this.session.repo,
        branch: this.session.branch,
        username: this.session.username
      } : null,
      isSyncing: this.isSyncing
    };
    this.listeners.forEach(fn => {
      try { fn(status); } catch (e) { console.error(e); }
    });
  }

  /**
   * Common GitHub API headers
   */
  getHeaders(token = null) {
    const t = token || (this.session ? this.session.token : '');
    return {
      'Authorization': `token ${t}`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28'
    };
  }

  /**
   * Validate a PAT against the /user endpoint
   */
  async validateToken(token, owner, repo) {
    if (!token) throw new Error('Ingresa un Personal Access Token de GitHub.');

    // 1. Verify user authentication
    const userRes = await fetch(`${GITHUB_API_BASE}/user`, {
      headers: this.getHeaders(token)
    });

    if (!userRes.ok) {
      throw new Error('Token de GitHub inválido o expirado. Verifica los permisos (repo scope).');
    }

    const userData = await userRes.json();
    const username = userData.login;

    // 2. If owner and repo provided, verify repository access
    if (owner && repo) {
      const repoRes = await fetch(`${GITHUB_API_BASE}/repos/${owner}/${repo}`, {
        headers: this.getHeaders(token)
      });

      if (!repoRes.ok) {
        throw new Error(`No se pudo acceder al repositorio "${owner}/${repo}". Verifica el nombre o los permisos del token.`);
      }
    }

    return { valid: true, username };
  }

  /**
   * Reads a file from GitHub repository
   * Returns { content: string, sha: string }
   */
  async readFile(filePath) {
    if (!this.isConnected()) {
      throw new Error('GitHub no está conectado en esta sesión.');
    }

    const url = `${GITHUB_API_BASE}/repos/${this.session.owner}/${this.session.repo}/contents/${filePath}?ref=${this.session.branch}`;
    const res = await fetch(url, {
      headers: this.getHeaders()
    });

    if (!res.ok) {
      if (res.status === 404) {
        return null; // File does not exist yet
      }
      const err = await res.json().catch(() => ({}));
      throw new Error(`Error al leer ${filePath}: ${err.message || res.statusText}`);
    }

    const data = await res.json();
    // Decode base64 UTF-8 content
    const rawBase64 = data.content.replace(/\s/g, '');
    const decoded = decodeURIComponent(escape(atob(rawBase64)));

    return {
      content: decoded,
      sha: data.sha
    };
  }

  /**
   * Writes / commits a file to the GitHub repository
   */
  async writeFile(filePath, contentString, commitMessage = 'chore: update data from Atelier Backoffice') {
    if (!this.isConnected()) {
      throw new Error('GitHub no está conectado.');
    }

    this.isSyncing = true;
    this.notifyListeners();

    try {
      // 1. Read existing SHA to allow updating existing file
      let sha = undefined;
      try {
        const existing = await this.readFile(filePath);
        if (existing) {
          sha = existing.sha;
        }
      } catch (e) {
        // file might be new
      }

      // 2. Encode content to UTF-8 Base64
      const encodedContent = btoa(unescape(encodeURIComponent(contentString)));

      const url = `${GITHUB_API_BASE}/repos/${this.session.owner}/${this.session.repo}/contents/${filePath}`;
      const payload = {
        message: commitMessage,
        content: encodedContent,
        branch: this.session.branch,
        ...(sha ? { sha } : {})
      };

      const res = await fetch(url, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(`Error al guardar ${filePath} en GitHub (${res.status}): ${err.message || res.statusText}`);
      }

      const resData = await res.json();
      return resData;
    } finally {
      this.isSyncing = false;
      this.notifyListeners();
    }
  }

  /**
   * Upload an image/video file to GitHub repository
   * @param {string} targetPath e.g. "assets/uploads/vestido-lino.jpg"
   * @param {string} base64Data raw base64 string
   * @param {string} commitMessage
   */
  async uploadMedia(targetPath, base64Data, commitMessage) {
    if (!this.isConnected()) {
      throw new Error('GitHub no está conectado.');
    }

    this.isSyncing = true;
    this.notifyListeners();

    try {
      let sha = undefined;
      try {
        const existing = await this.readFile(targetPath);
        if (existing) sha = existing.sha;
      } catch (e) {}

      const cleanBase64 = base64Data.includes(',') ? base64Data.split(',')[1] : base64Data;

      const url = `${GITHUB_API_BASE}/repos/${this.session.owner}/${this.session.repo}/contents/${targetPath}`;
      const payload = {
        message: commitMessage || `chore(media): upload ${targetPath.split('/').pop()}`,
        content: cleanBase64,
        branch: this.session.branch,
        ...(sha ? { sha } : {})
      };

      const res = await fetch(url, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(`Error al subir imagen (${res.status}): ${err.message || res.statusText}`);
      }

      const resData = await res.json();
      return {
        path: targetPath,
        downloadUrl: resData.content?.download_url || targetPath,
        sha: resData.content?.sha
      };
    } finally {
      this.isSyncing = false;
      this.notifyListeners();
    }
  }

  /**
   * Delete a file from GitHub repository
   */
  async deleteFile(filePath, sha, commitMessage) {
    if (!this.isConnected()) throw new Error('GitHub no está conectado.');

    this.isSyncing = true;
    this.notifyListeners();

    try {
      const url = `${GITHUB_API_BASE}/repos/${this.session.owner}/${this.session.repo}/contents/${filePath}`;
      const payload = {
        message: commitMessage || `chore: delete ${filePath.split('/').pop()}`,
        sha,
        branch: this.session.branch
      };

      const res = await fetch(url, {
        method: 'DELETE',
        headers: this.getHeaders(),
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(`Error al eliminar archivo: ${err.message || res.statusText}`);
      }

      return await res.json();
    } finally {
      this.isSyncing = false;
      this.notifyListeners();
    }
  }
}

// Singleton global instance
window.GitHubSync = new GitHubSyncService();
