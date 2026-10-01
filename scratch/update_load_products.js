const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

const regex = /function loadProducts\(\) \{[\s\S]*?\n\}/;

const newFunc = `function loadProducts() {
  const saved = localStorage.getItem('evangelina_products');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const defaultIds = new Set(DEFAULT_PRODUCTS.map(p => p.id));
        const filtered = parsed.filter(p => defaultIds.has(p.id));
        if (filtered.length === DEFAULT_PRODUCTS.length) {
          return filtered;
        }
      }
    } catch (e) {
      console.error('Error cargando productos de localStorage', e);
    }
  }
  localStorage.setItem('evangelina_products', JSON.stringify(DEFAULT_PRODUCTS));
  return [...DEFAULT_PRODUCTS];
}`;

appJs = appJs.replace(regex, newFunc);
fs.writeFileSync('app.js', appJs, 'utf8');
console.log('Successfully updated loadProducts function');
