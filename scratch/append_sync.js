const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

const syncCode = `

// Real-time synchronization when Admin Panel modifies products or CMS configuration
window.addEventListener('storage', function(e) {
  if (e.key === 'evangelina_products') {
    PRODUCTS = loadProducts();
    if (typeof renderProducts === 'function') renderProducts();
  }
  if (e.key === 'evangelina_admin_config' || e.key === 'evangelina_config') {
    adminConfig = JSON.parse(localStorage.getItem('evangelina_admin_config')) || defaultAdminConfig;
    if (typeof applyAdminConfig === 'function') applyAdminConfig();
  }
});

window.addEventListener('evangelina:products-updated', function(e) {
  if (e.detail && Array.isArray(e.detail)) {
    PRODUCTS = e.detail;
    if (typeof renderProducts === 'function') renderProducts();
  }
});
`;

if (!appJs.includes('evangelina:products-updated')) {
  appJs += syncCode;
  fs.writeFileSync('app.js', appJs, 'utf8');
  console.log('Appended real-time sync listeners to app.js');
}
