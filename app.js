/**
 * EVANGELINA ATELIER — Boutique Online Application
 * Logic for Catalog, Interactive Filters, Shopping Cart Drawer,
 * Quick View Modals, Search, and Toast Notifications.
 */

// ==========================================
// 1. PRODUCT CATALOG & DEFAULT DATA
// ==========================================
const DEFAULT_PRODUCTS = [
  {
    id: 'pantalon-palazzo-animalier',
    name: 'Pantalón Palazzo Animalier Safari',
    category: 'Pantalones',
    price: 58000,
    originalPrice: 66000,
    image: 'assets/product-palazzo-animalier.jpg',
    badge: 'Nuevo',
    isNew: true,
    isFeatured: true,
    stock: 8,
    active: true,
    views: 0,
    salesCount: 0,
    colors: [
      { name: 'Leopardo & Cacao', hex: '#4A3528' }
    ],
    sizes: ['L', 'XL'],
    description: 'Pantalón palazzo de silueta holgada confeccionado en sarga suave con estampa animal print y textura gráfica safari. Tiro alto con botón al tono, presillas para cinto y calce ultra relajado.',
    composition: '100% Algodón puro esmerilado con caída natural.',
    details: [
      'Tiro alto clásico con botón y cierre frontal',
      'Corte amplio palazzo de espíritu bohemio chic',
      'Estampa animalier safari en tonos cacao, negro y arena',
      'Confección artesanal de autor'
    ]
  },
  {
    id: 'pantalon-palazzo-moca',
    name: 'Pantalón Palazzo Moca Toscana',
    category: 'Pantalones',
    price: 56000,
    originalPrice: 64000,
    image: 'assets/product-palazzo-moca.jpg',
    badge: 'Nuevo',
    isNew: true,
    isFeatured: true,
    stock: 10,
    active: true,
    views: 0,
    salesCount: 0,
    colors: [
      { name: 'Moca Tostado', hex: '#8C675B' }
    ],
    sizes: ['M', 'L'],
    description: 'Pantalón palazzo de tiro alto confeccionado en gabardina liviana de algodón suave esmerilado. Cintura elástica fruncida supercómoda y pierna amplia con caída impecable. Tono moca versátil que combina con todo el guardarropa de estación.',
    composition: '98% Algodón puro esmerilado, 2% Elastano.',
    details: [
      'Cintura elastizada tiro alto con frunce artesanal',
      'Pierna amplia palazzo de caída fluida',
      'Bolsillos laterales profundos y funcionales',
      'Confección artesanal de autor'
    ]
  },
  {
    id: 'pantalon-sol-naciente',
    name: 'Pantalón Palazzo Sol Naciente',
    category: 'Pantalones',
    price: 54000,
    originalPrice: 62000,
    image: 'assets/product-sunset-stripes.jpg',
    badge: 'Favorito Atelier',
    isNew: true,
    stock: 12,
    active: true,
    views: 0,
    salesCount: 0,
    colors: [
      { name: 'Teja & Mostaza', hex: '#D95D39' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Pantalón palazzo de tiro alto confeccionado en sarga de algodón y lino peinado. Estampa artesanal a rayas verticales en tonos teja, terracota, mostaza y crudo. Caída relajada y silueta fluida de espíritu mediterráneo.',
    composition: '70% Algodón orgánico peinado, 30% Lino europeo.',
    details: [
      'Tiro alto con elástico invisible y cierre lateral',
      'Bolsillos laterales sutiles',
      'Tejido transpirable de fibra noble',
      'Confección artesanal de autor'
    ]
  },
  {
    id: 'pantalon-riviera-verde',
    name: 'Pantalón Rayas Riviera Verde',
    category: 'Pantalones',
    price: 54000,
    originalPrice: null,
    image: 'assets/product-green-stripes.jpg',
    badge: 'Nuevo',
    isNew: true,
    stock: 6,
    active: true,
    views: 0,
    salesCount: 0,
    colors: [
      { name: 'Verde Botánico & Salvia', hex: '#4A6B53' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Pantalón amplio con tiro medio-alto, estampa a franjas verticales en gamas de verde bosque, salvia y marfil. Calce holgado de impronta europea que estiliza y aporta frescura natural.',
    composition: '100% Algodón puro con acabado suave al tacto.',
    details: [
      'Corte palazzo clásico holgado',
      'Pretina con presillas para cinto',
      'Tejido fresco y liviano ideal para días templados',
      'Lavado con proceso eco-amigable'
    ]
  },
  {
    id: 'conjunto-polka-indigo',
    name: 'Conjunto Ecléctico Lunares Índigo',
    category: 'Conjuntos',
    price: 68000,
    originalPrice: 75000,
    image: 'assets/product-polka-dot.jpg',
    badge: 'Dos Piezas',
    isNew: true,
    stock: 3,
    active: true,
    views: 0,
    salesCount: 0,
    colors: [
      { name: 'Azul Marino & Lunares', hex: '#1D2A44' }
    ],
    sizes: ['S', 'M', 'L'],
    description: 'Conjunto coordinado de top sin mangas con hombreras estructuradas y pantalón palazzo de tiro alto con cintura elástica sumamente confortable. Confeccionado en poplin sedoso con motivo clásico de topos marítimos.',
    composition: '100% Viscosa vegetal de textura sedosa y tacto fresco.',
    details: [
      'Incluye top estructurado y pantalón amplio',
      'Cintura elastizada con bolsillos amplios',
      'No encoge ni pierde suavidad',
      'Versatilidad para usar junto o por separado'
    ]
  },
  {
    id: 'conjunto-seersucker-azul',
    name: 'Conjunto Seersucker Rayas Azules',
    category: 'Conjuntos',
    price: 68000,
    originalPrice: 76000,
    image: 'assets/product-conjunto-seersucker-azul.jpg',
    badge: 'Nuevo',
    isNew: true,
    stock: 7,
    active: true,
    views: 0,
    salesCount: 0,
    colors: [
      { name: 'Azul Francés & Blanco', hex: '#4A6FA5' }
    ],
    sizes: ['S', 'M', 'L'],
    description: 'Conjunto de dos piezas confeccionado en algodón seersucker liviano a micro rayas azules y blancas. Top con volados sutiles en mangas y lazo, junto a pantalón palazzo holgado con cintura elastizada.',
    composition: '100% Algodón textura seersucker europeo.',
    details: [
      'Top con terminación de volados en hombros',
      'Pantalón palazzo tiro alto con elástico suave',
      'Tejido fresco y texturado ideal para media estación y verano',
      'Confección artesanal de autor'
    ]
  },
  {
    id: 'conjunto-blanco-puro',
    name: 'Conjunto Flare Monocromo Blanco Puro',
    category: 'Conjuntos',
    price: 72000,
    originalPrice: 82000,
    image: 'assets/product-conjunto-blanco-puro.jpg',
    badge: 'Exclusivo',
    isNew: true,
    stock: 6,
    active: true,
    views: 0,
    salesCount: 0,
    colors: [
      { name: 'Blanco Puro', hex: '#FFFFFF' }
    ],
    sizes: ['S', 'M', 'L'],
    description: 'Elegante conjunto monocromático de dos piezas en bengala de algodón elastizado blanco puro. Top crop sin mangas con cuello redondo y pantalón oxford flare tiro alto con pinzas que estilizan la silueta.',
    composition: '97% Algodón peinado de alto gramaje, 3% Spandex.',
    details: [
      'Top crop estructurado forrado',
      'Pantalón corte flare / oxford con caída pesada',
      'Tiro ultra alto moldeador',
      'Confección artesanal de autor'
    ]
  },
  {
    id: 'conjunto-rayas-celeste',
    name: 'Conjunto Riviera Rayas Cielo',
    category: 'Conjuntos',
    price: 69000,
    originalPrice: 78000,
    image: 'assets/product-conjunto-rayas-celeste.jpg',
    badge: 'Favorito Atelier',
    isNew: true,
    stock: 8,
    active: true,
    views: 0,
    salesCount: 0,
    colors: [
      { name: 'Celeste Cielo & Marfil', hex: '#93B5CF' }
    ],
    sizes: ['S', 'M', 'L'],
    description: 'Conjunto de dos piezas con estampa a rayas verticales en tonos celeste cielo y tiza. Top sin mangas con detalle de lazos laterales regulables y pantalón palazzo de cintura elastizada con calce holgado mediterráneo.',
    composition: '70% Algodón puro, 30% Lino natural.',
    details: [
      'Top corto con lazos regulables laterales',
      'Pantalón palazzo de silueta fluida',
      'Lino y algodón fresco y transpirable',
      'Confección artesanal de autor'
    ]
  },
  {
    id: 'pantalon-carmin-bordo',
    name: 'Pantalón Rayas Carmín Bordó',
    category: 'Pantalones',
    price: 52000,
    originalPrice: null,
    image: 'assets/product-red-stripes.jpg',
    badge: 'Edición Limitada',
    isNew: false,
    stock: 8,
    active: true,
    views: 0,
    salesCount: 0,
    colors: [
      { name: 'Rojo Carmín & Marfil', hex: '#C23B38' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Pantalón de silueta ancha a rayas bicolores estilo toldo de la Riviera italiana. Tiro alto estructurado con corte limpio que alarga visualmente la figura.',
    composition: '80% Algodón orgánico, 20% Lino rústico.',
    details: [
      'Tiro alto con botón forrado artesanal',
      'Caída recta y amplia',
      'Bolsillo trasero ojal',
      'Hecho con tintes naturales de bajo impacto'
    ]
  },
  {
    id: 'remera-sardine',
    name: 'Remera Estampada "Sardine al Pomodoro"',
    category: 'Remeras',
    price: 28000,
    originalPrice: null,
    image: 'assets/remera-sardine.jpg',
    modelImage: 'assets/remera-sardine-model.jpg',
    badge: 'Nuevo',
    isNew: true,
    stock: 15,
    active: true,
    views: 0,
    salesCount: 0,
    colors: [
      { name: 'Blanco Óptico', hex: '#FFFFFF' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Remera clásica de cuello redondo en jersey de algodón 100% peinado de tacto ultrasuave. Serigrafía artesanal exclusiva "Sardine al Pomodoro" en azul cobalto y rojo tomate sobre fondo de ondas marítimas.',
    composition: '100% Algodón puro peinado 24/1.',
    details: [
      'Calce clásico unisex relajado',
      'Estampa serigráfica al agua de alta durabilidad',
      'Cuello en ribb con costura reforzada',
      'Prenda combinable con nuestro Pantalón Rayas Carmín'
    ]
  },
  {
    id: 'remera-picada',
    name: 'Remera Estampada "Picada & Soda"',
    category: 'Remeras',
    price: 28000,
    originalPrice: null,
    image: 'assets/remera-picada.jpg',
    modelImage: 'assets/remera-picada-model.jpg',
    badge: 'Nuevo',
    isNew: true,
    stock: 14,
    active: true,
    views: 0,
    salesCount: 0,
    colors: [
      { name: 'Blanco Óptico', hex: '#FFFFFF' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Remera de algodón blanco suave con estampa de bodegón pop vintage: sifón de soda tradicional "El Burrito", banderín festivo y rodaja de cítrico sobre azulejos verde salvia.',
    composition: '100% Algodón puro peinado 24/1.',
    details: [
      'Cuello redondo con refuerzo de hombro a hombro',
      'Estampa al agua respirable que no acartona la tela',
      'Calce cómodo para usar suelta o adentro del pantalón',
      'Diseñada para acompañar el Pantalón Riviera Verde'
    ]
  },
  {
    id: 'remera-sifon-sol',
    name: 'Remera Estampada "Sifón Sol Tradición"',
    category: 'Remeras',
    price: 28000,
    originalPrice: null,
    image: 'assets/remera-sifon-sol.jpg',
    modelImage: 'assets/remera-sunset-model.jpg',
    badge: 'Nuevo',
    isNew: true,
    stock: 2,
    active: true,
    views: 0,
    salesCount: 0,
    colors: [
      { name: 'Blanco Óptico', hex: '#FFFFFF' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Remera de algodón premium con diseño que homenajea los clásicos de siempre: sol sonriente radiante y sifón de soda enmarcado sobre un mantel cuadrillé rojo y crema.',
    composition: '100% Algodón puro peinado 24/1.',
    details: [
      'Silueta fresca y relajada de espíritu bohemio',
      'Tintas ecológicas libres de metales pesados',
      'Acabado prelavado que previene encogimiento',
      'Ideal en conjunto con el Pantalón Sol Naciente'
    ]
  },
  {
    id: 'remera-tomatelo-soda',
    name: 'Remera Estampada "Tomátelo con Soda"',
    category: 'Remeras',
    price: 28000,
    originalPrice: null,
    image: 'assets/remera-tomatelo-soda.jpg',
    badge: 'Nuevo',
    isNew: true,
    stock: 10,
    active: true,
    views: 0,
    salesCount: 0,
    colors: [
      { name: 'Blanco Óptico', hex: '#FFFFFF' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Remera blanca con motivo gráfico circular de rayos solares en rosa pastel y celeste con sifón rojo y la emblemática frase "Tomátelo con Soda". Una pieza alegre y llena de frescura.',
    composition: '100% Algodón puro peinado 24/1.',
    details: [
      'Moldería estándar de calce holgado y fresco',
      'Algodón peinado premium que respira con tu piel',
      'Colores vibrantes sobre base blanca pura',
      'Edición limitada de taller'
    ]
  },
  {
    id: 'chaleco-tweed-crema',
    name: 'Chaleco Tweed & Lino Arena',
    category: 'Chalecos',
    price: 48000,
    originalPrice: null,
    image: 'assets/chaleco-tweed-crema.jpg',
    badge: 'Nuevo',
    isNew: true,
    stock: 7,
    active: true,
    views: 0,
    salesCount: 0,
    colors: [
      { name: 'Arena & Marfil', hex: '#E6DCCE' }
    ],
    sizes: ['S', 'M', 'L'],
    description: 'Chaleco sastrero corto confeccionado en hilado texturado mezcla de tweed, lino y bouclé en tonos arena y marfil. Escote en V, botones símil madera natural y falsos bolsillos ribeteados.',
    composition: '50% Lino noble, 30% Algodón rústico, 20% Fibras bouclé.',
    details: [
      'Corte crop con terminación artesanal desflecada',
      'Botones de acabado madera natural',
      'Escote en V que estiliza la línea del cuello',
      'Prenda versátil para usar en capas o como top'
    ]
  },
  {
    id: 'chaleco-denim-indigo',
    name: 'Chaleco Denim Sarga Índigo',
    category: 'Chalecos',
    price: 45000,
    originalPrice: null,
    image: 'assets/chaleco-denim-indigo.jpg',
    badge: 'Exclusivo',
    isNew: true,
    stock: 5,
    active: true,
    views: 0,
    salesCount: 0,
    colors: [
      { name: 'Azul Índigo Profundo', hex: '#1C2538' }
    ],
    sizes: ['S', 'M', 'L'],
    description: 'Chaleco estructurado sin mangas en denim sarga de algodón índigo profundo. Escote caja con detalle de ojalillos metálicos bronce en hilera frontal y costuras sastreras.',
    composition: '100% Algodón denim peinado de gramaje medio.',
    details: [
      'Detalle de ojalillos metálicos en bronce envejecido',
      'Espalda limpia con cierre invisible lateral',
      'Largo a la cintura ideal para pantalones de tiro alto',
      'Calce firme y favorecedor'
    ]
  },
  {
    id: 'chaleco-gamuza-rosa',
    name: 'Chaleco Gamuza Boho Rosa Viejo',
    category: 'Chalecos',
    price: 52000,
    originalPrice: null,
    image: 'assets/chaleco-gamuza-rosa.jpg',
    badge: 'Favorito Atelier',
    isNew: true,
    stock: 4,
    active: true,
    views: 0,
    salesCount: 0,
    colors: [
      { name: 'Rosa Viejo / Terracota Suave', hex: '#C98B8B' }
    ],
    sizes: ['S', 'M', 'L'],
    description: 'Chaleco bohemio confeccionado en suave gamuza de antílope sintético en tono rosa empolvado. Cuello bote y ajuste lateral y en hombros con cordones de cuero natural cruzados.',
    composition: '100% Gamuza ecológica ultrasuave con cordones de cuero natural.',
    details: [
      'Detalle de cordones laterales y en hombros regulables',
      'Ruedo suavemente curvado',
      'Tacto aterciopelado sumamente agradable',
      'Perfecto para layering sobre camisas blancas y palazzos'
    ]
  }
];

const DEFAULT_ORDERS = [];

function loadProducts() {
  const saved = localStorage.getItem('evangelina_products');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const existingMap = new Map(parsed.map((p, idx) => [p.id, p]));
        let hasChanges = false;

        DEFAULT_PRODUCTS.forEach(dp => {
          if (!existingMap.has(dp.id)) {
            parsed.unshift(dp);
            hasChanges = true;
          } else {
            const found = existingMap.get(dp.id);
            if (dp.id === 'pantalon-palazzo-moca' || dp.id === 'pantalon-palazzo-animalier') {
              if (JSON.stringify(found.sizes) !== JSON.stringify(dp.sizes)) {
                found.sizes = dp.sizes;
                hasChanges = true;
              }
              if (found.image !== dp.image) {
                found.image = dp.image;
                hasChanges = true;
              }
            }
          }
        });
        if (hasChanges) {
          localStorage.setItem('evangelina_products', JSON.stringify(parsed));
        }
        return parsed;
      }
    } catch (e) {
      console.error('Error cargando productos de localStorage', e);
    }
  }
  localStorage.setItem('evangelina_products', JSON.stringify(DEFAULT_PRODUCTS));
  return [...DEFAULT_PRODUCTS];
}

function saveProducts() {
  localStorage.setItem('evangelina_products', JSON.stringify(PRODUCTS));
}

function loadOrders() {
  const saved = localStorage.getItem('evangelina_orders');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    } catch (e) {
      console.error('Error cargando pedidos de localStorage', e);
    }
  }
  localStorage.setItem('evangelina_orders', JSON.stringify(DEFAULT_ORDERS));
  return [...DEFAULT_ORDERS];
}

function saveOrders() {
  localStorage.setItem('evangelina_orders', JSON.stringify(ORDERS));
}

let PRODUCTS = loadProducts();
let ORDERS = loadOrders();


// ==========================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================
let rawCart = JSON.parse(localStorage.getItem('evangelina_cart')) || [];
// Purge any outdated items that don't match the active real products
let cart = rawCart.filter(item => PRODUCTS.some(p => p.id === item.productId));
let activeCategory = 'all';
let activeSort = 'featured';

const defaultAdminConfig = {
  bannerEnabled: false,
  bannerText: 'Envíos sin cargo en compras superiores a $120.000 • Prendas en fibras nobles & lino orgánico',
  bannerBg: '#F3ECE4',
  bannerColor: '#70655B',
  freeShippingThreshold: 120000
};

let adminConfig = JSON.parse(localStorage.getItem('evangelina_admin_config')) || defaultAdminConfig;
let FREE_SHIPPING_THRESHOLD = Number(adminConfig.freeShippingThreshold) || 120000;

function applyAdminConfig() {
  const bar = document.getElementById('announcement-bar');
  const content = document.getElementById('announcement-content');
  if (!bar) return;

  if (adminConfig.bannerEnabled && adminConfig.bannerText && adminConfig.bannerText.trim().length > 0) {
    bar.style.display = 'block';
    bar.style.backgroundColor = adminConfig.bannerBg || '#F3ECE4';
    bar.style.color = adminConfig.bannerColor || '#70655B';

    const parts = adminConfig.bannerText.split('•').map(s => s.trim()).filter(Boolean);
    if (parts.length > 1) {
      content.innerHTML = parts.map((p, i) => `
        <span>${p}</span>${i < parts.length - 1 ? '<span class="bullet-sep">•</span>' : ''}
      `).join('');
    } else {
      content.innerHTML = `<span>${adminConfig.bannerText}</span>`;
    }
  } else {
    bar.style.display = 'none';
  }

  if (adminConfig.freeShippingThreshold) {
    FREE_SHIPPING_THRESHOLD = Number(adminConfig.freeShippingThreshold);
  }
}

function saveCart() {
  localStorage.setItem('evangelina_cart', JSON.stringify(cart));
  updateCartBadge();
  renderCartDrawer();
}

function formatPrice(val) {
  return `$${val.toLocaleString('es-AR')}`;
}

// ==========================================
// 3. CATALOG RENDERING & FILTERING
// ==========================================
const productsGrid = document.getElementById('products-grid');
const productCountLabel = document.getElementById('product-count-label');
const resetFiltersBtn = document.getElementById('reset-filters-btn');
const categoryPillsContainer = document.getElementById('category-pills');
const sortSelect = document.getElementById('sort-select');

function renderProducts() {
  let filtered = PRODUCTS.filter(p => p.active !== false);

  // Category Filter
  if (activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
  }

  // Sorting
  if (activeSort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Update count indicator
  if (productCountLabel) {
    const catName = activeCategory === 'all' ? 'la colección' : activeCategory;
    productCountLabel.textContent = `Mostrando ${filtered.length} ${filtered.length === 1 ? 'prenda' : 'prendas'} en ${catName}`;
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.style.display = activeCategory === 'all' ? 'none' : 'inline-block';
  }

  if (!productsGrid) return;

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-secondary);">
        <p style="font-family: var(--font-editorial); font-size: 1.5rem; margin-bottom: 0.5rem;">No se encontraron prendas en esta sección</p>
        <button onclick="filterByCategory('all')" class="btn btn-secondary" style="margin-top: 1rem;">Ver toda la colección</button>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(product => {
    const isOutOfStock = Number(product.stock) <= 0;
    const isLowStock = !isOutOfStock && Number(product.stock) <= 3;

    const oldPriceHtml = product.originalPrice 
      ? `<span class="product-old-price">${formatPrice(product.originalPrice)}</span>` 
      : '';
    
    let badgeHtml = '';
    if (isOutOfStock) {
      badgeHtml = `<span class="product-badge badge-out-of-stock">Agotado</span>`;
    } else if (isLowStock) {
      badgeHtml = `<span class="product-badge" style="background:#D95D39; color:#fff;">¡Últimas ${product.stock} un.!</span>`;
    } else if (product.badge) {
      badgeHtml = `<span class="product-badge ${product.badge.includes('Atelier') ? 'badge-artisan' : 'badge-new'}">${product.badge}</span>`;
    }

    const swatchesHtml = (product.colors || []).map((c, i) => `
      <span class="color-swatch ${i === 0 ? 'active' : ''}" 
            style="background-color: ${c.hex};" 
            title="${c.name}"
            onclick="event.stopPropagation();">
      </span>
    `).join('');

    const sizesSummary = (product.sizes || []).join(' · ');

    const addToCartButtonHtml = isOutOfStock
      ? `<button class="btn-add-cart" disabled style="opacity: 0.55; cursor: not-allowed; background-color: var(--border-medium); color: var(--text-muted);">
           Sin Stock
         </button>`
      : `<button class="btn-add-cart" onclick="quickAddToCart('${product.id}')">
           <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
             <line x1="12" y1="5" x2="12" y2="19"></line>
             <line x1="5" y1="12" x2="19" y2="12"></line>
           </svg>
           Añadir a la bolsa
         </button>`;

    return `
      <article class="product-card ${isOutOfStock ? 'out-of-stock' : ''}" data-id="${product.id}">
        <div class="product-badge-wrap">
          ${badgeHtml}
        </div>
        <div class="product-thumb-wrap" onclick="openQuickView('${product.id}')">
          <img src="${product.image}" alt="${product.name}" class="product-thumb-img" loading="lazy" />
          <button class="product-quick-view-btn" onclick="event.stopPropagation(); openQuickView('${product.id}')">
            Vista Rápida
          </button>
        </div>
        <div class="product-details">
          <span class="product-category-meta">${product.category}</span>
          <h3 class="product-title">
            <a href="javascript:void(0)" onclick="openQuickView('${product.id}')">${product.name}</a>
          </h3>
          <div class="product-price-line">
            <span class="product-price">${formatPrice(product.price)}</span>
            ${oldPriceHtml}
          </div>
          <div class="product-options-row">
            <div class="color-swatches">${swatchesHtml}</div>
            <span class="product-sizes">${sizesSummary}</span>
          </div>
          ${addToCartButtonHtml}
        </div>
      </article>
    `;
  }).join('');
}

function filterByCategory(category) {
  activeCategory = category;
  
  // Update UI pills
  document.querySelectorAll('.filter-pill').forEach(pill => {
    const isTarget = pill.dataset.filter.toLowerCase() === category.toLowerCase();
    if (isTarget) {
      pill.classList.add('active');
      // Scroll the active pill into view within the horizontal bar on mobile
      try {
        pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } catch (err) {}
    } else {
      pill.classList.remove('active');
    }
  });

  renderProducts();

  // Smooth scroll to collection section with header offset so user immediately sees the category items
  const collectionEl = document.getElementById('coleccion');
  if (collectionEl) {
    const headerHeight = document.getElementById('site-header')?.offsetHeight || 70;
    const targetY = collectionEl.getBoundingClientRect().top + window.pageYOffset - headerHeight + 5;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  }

  if (typeof showToast === 'function') {
    showToast(`✨ Mostrando piezas de ${category}`);
  }
}

function scrollToCollection(e) {
  if (e) {
    try { e.preventDefault(); } catch (err) {}
    try { e.stopPropagation(); } catch (err) {}
  }

  // Ensure all products in stock are shown if a filter was active
  if (typeof activeCategory !== 'undefined' && activeCategory !== 'all') {
    activeCategory = 'all';
    document.querySelectorAll('.filter-pill').forEach(pill => {
      if (pill.dataset.filter === 'all') {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
    if (typeof renderProducts === 'function') {
      renderProducts();
    }
  }

  const collectionEl = document.getElementById('coleccion') || document.querySelector('.collection-section');
  if (collectionEl) {
    const header = document.getElementById('site-header');
    const headerHeight = header ? header.getBoundingClientRect().height : 70;
    const targetY = collectionEl.getBoundingClientRect().top + window.pageYOffset - headerHeight + 5;
    window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', '#coleccion');
    }
  }
}
window.scrollToCollection = scrollToCollection;

// ==========================================
// 4. SHOPPING CART LOGIC
// ==========================================
const cartTrigger = document.getElementById('cart-trigger');
const cartDrawer = document.getElementById('cart-drawer');
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const cartCloseBtn = document.getElementById('cart-close-btn');
const cartBadge = document.getElementById('cart-count');
const cartDrawerCount = document.getElementById('cart-drawer-count');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartShippingVal = document.getElementById('cart-shipping-val');
const freeShippingText = document.getElementById('free-shipping-text');
const shippingProgress = document.getElementById('shipping-progress');
const clearCartBtn = document.getElementById('clear-cart-btn');
const checkoutBtn = document.getElementById('checkout-btn');

function openCart() {
  cartDrawer.classList.add('open');
  cartDrawerOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartDrawerOverlay.classList.remove('open');
  document.body.style.overflow = '';
  toggleCartCheckoutForm(false);
}

function updateCartBadge() {
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (cartBadge) {
    cartBadge.textContent = totalCount;
    cartBadge.style.transform = totalCount > 0 ? 'scale(1.15)' : 'scale(1)';
    setTimeout(() => {
      cartBadge.style.transform = 'scale(1)';
    }, 200);
  }
  if (cartDrawerCount) {
    cartDrawerCount.textContent = `(${totalCount} ${totalCount === 1 ? 'prenda' : 'prendas'})`;
  }
}

function renderCartDrawer() {
  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-state">
        <div class="cart-empty-icon">👜</div>
        <h4>Tu bolsa está vacía</h4>
        <p>Aún no has agregado prendas a tu selección.</p>
        <button class="btn btn-primary" onclick="closeCart(); location.href='#coleccion'">Explorar Colección</button>
      </div>
    `;

    if (cartSubtotal) cartSubtotal.textContent = '$0';
    if (cartShippingVal) cartShippingVal.textContent = 'Calculado en el checkout';
    if (freeShippingText) freeShippingText.textContent = `¡Agrega ${formatPrice(FREE_SHIPPING_THRESHOLD)} para envío gratis!`;
    if (shippingProgress) shippingProgress.style.width = '0%';
    return;
  }

  let subtotal = 0;

  cartItemsContainer.innerHTML = cart.map((item, index) => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    if (!product) return '';

    const itemTotal = product.price * item.quantity;
    subtotal += itemTotal;

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}" class="cart-item-thumb" />
        <div class="cart-item-info">
          <h4 class="cart-item-title">${product.name}</h4>
          <div class="cart-item-specs">
            Talle: <strong>${item.selectedSize}</strong> · Color: <strong>${item.selectedColor}</strong>
          </div>
          <div class="cart-item-price">${formatPrice(product.price)}</div>
          <div class="cart-item-bottom">
            <div class="quantity-control">
              <button class="qty-btn" onclick="updateItemQuantity(${index}, -1)" aria-label="Restar">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateItemQuantity(${index}, 1)" aria-label="Sumar">+</button>
            </div>
            <button class="cart-remove-item" onclick="removeCartItem(${index})">Eliminar</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (cartSubtotal) {
    cartSubtotal.textContent = formatPrice(subtotal);
  }

  // Free shipping progress logic
  if (subtotal >= FREE_SHIPPING_THRESHOLD) {
    if (freeShippingText) freeShippingText.innerHTML = `🎉 <strong>¡Felicitaciones!</strong> Tienes <strong>Envío Gratis</strong> en tu orden`;
    if (shippingProgress) shippingProgress.style.width = '100%';
    if (cartShippingVal) cartShippingVal.innerHTML = `<span style="color: var(--success-color); font-weight: 600;">GRATIS</span>`;
  } else {
    const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
    const percent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100));
    if (freeShippingText) freeShippingText.innerHTML = `Te faltan <strong>${formatPrice(remaining)}</strong> para disfrutar de <strong>Envío Gratis</strong>`;
    if (shippingProgress) shippingProgress.style.width = `${percent}%`;
    if (cartShippingVal) cartShippingVal.textContent = 'Calculado en el checkout';
  }
}

function addToCart(productId, selectedSize, selectedColor, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (Number(product.stock) <= 0) {
    showToast(`Lo sentimos, <strong>${product.name}</strong> está agotado.`);
    return;
  }

  const existingIndex = cart.findIndex(
    item => item.productId === productId && 
            item.selectedSize === selectedSize && 
            item.selectedColor === selectedColor
  );

  const currentQty = existingIndex > -1 ? cart[existingIndex].quantity : 0;
  if (currentQty + quantity > Number(product.stock)) {
    showToast(`Solo quedan <strong>${product.stock} unidades</strong> disponibles de esta prenda.`);
    return;
  }

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      productId,
      selectedSize,
      selectedColor,
      quantity
    });
  }

  saveCart();
  showToast(`Añadido a tu bolsa: <strong>${product.name}</strong> (${selectedSize})`);
  openCart();
}

function quickAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (Number(product.stock) <= 0) {
    showToast(`Lo sentimos, <strong>${product.name}</strong> está actualmente agotado.`);
    return;
  }

  const defaultSize = product.sizes ? product.sizes[0] : 'U';
  const defaultColor = product.colors && product.colors.length > 0 ? product.colors[0].name : 'Único';
  addToCart(productId, defaultSize, defaultColor, 1);
}

function updateItemQuantity(index, delta) {
  if (!cart[index]) return;
  const product = PRODUCTS.find(p => p.id === cart[index].productId);
  
  if (delta > 0 && product && cart[index].quantity + delta > Number(product.stock)) {
    showToast(`No puedes agregar más de <strong>${product.stock} unidades</strong> (límite de stock).`);
    return;
  }

  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
}

function removeCartItem(index) {
  if (!cart[index]) return;
  const removed = PRODUCTS.find(p => p.id === cart[index].productId);
  cart.splice(index, 1);
  saveCart();
  if (removed) {
    showToast(`Eliminada: ${removed.name}`);
  }
}

// Checkout Form in Cart Drawer
function toggleCartCheckoutForm(show) {
  const formBox = document.getElementById('cart-checkout-form-container');
  const actionsBox = document.getElementById('cart-summary-actions');
  if (formBox) formBox.style.display = show ? 'block' : 'none';
  if (actionsBox) actionsBox.style.display = show ? 'none' : 'block';
}

function submitCartCheckout() {
  if (cart.length === 0) {
    alert('Tu bolsa está vacía.');
    return;
  }

  const nameInput = document.getElementById('checkout-name');
  const phoneInput = document.getElementById('checkout-phone');
  const addressInput = document.getElementById('checkout-address');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const address = addressInput ? addressInput.value.trim() : '';

  if (!name || !phone) {
    alert('Por favor completa tu Nombre y Teléfono/WhatsApp para continuar.');
    return;
  }

  let orderTotal = 0;
  const orderItems = [];

  for (const item of cart) {
    const prod = PRODUCTS.find(p => p.id === item.productId);
    if (prod) {
      orderTotal += prod.price * item.quantity;
      orderItems.push({
        productId: prod.id,
        name: prod.name,
        price: prod.price,
        quantity: item.quantity,
        selectedSize: item.selectedSize,
        selectedColor: item.selectedColor
      });

      // Decrement stock in catalog
      prod.stock = Math.max(0, (Number(prod.stock) || 0) - item.quantity);
      prod.salesCount = (Number(prod.salesCount) || 0) + item.quantity;
    }
  }

  const orderId = `EV-${Math.floor(1000 + Math.random() * 9000)}`;
  const newOrder = {
    id: orderId,
    date: new Date().toISOString(),
    customer: {
      name,
      phone,
      address: address || 'Acordar con Atelier'
    },
    items: orderItems,
    total: orderTotal,
    status: 'Pendiente'
  };

  ORDERS.unshift(newOrder);
  saveOrders();
  saveProducts();

  // Synchronize with Backoffice Store & GitHub
  if (window.BackofficeStoreInstance) {
    window.BackofficeStoreInstance.orders = ORDERS;
    window.BackofficeStoreInstance.products = PRODUCTS;
    window.BackofficeStoreInstance.saveOrders(true);
    window.BackofficeStoreInstance.saveProducts(true);
    window.BackofficeStoreInstance.logActivity(
      `Nuevo pedido #${orderId}`,
      `${name} adquirió ${orderItems.length} prendas por $${orderTotal.toLocaleString('es-AR')}`,
      '🛍️'
    );
    window.BackofficeStoreInstance.updateBadges();
  }

  // Reset cart
  cart = [];
  saveCart();
  toggleCartCheckoutForm(false);
  closeCart();

  // Re-render public catalog to reflect updated stock immediately
  renderProducts();

  // If Admin panel is open, refresh views
  if (document.getElementById('admin-modal-overlay')?.classList.contains('open')) {
    refreshAdminViews();
  }

  // Build WhatsApp message
  const itemsText = orderItems.map(i => `• ${i.quantity}x ${i.name} (Talle ${i.selectedSize}) - $${(i.price * i.quantity).toLocaleString('es-AR')}`).join('\n');
  const waMsg = `✨ *Nuevo Pedido en Evangelina Atelier* ✨\n\n*Orden:* #${orderId}\n*Cliente:* ${name}\n*Tel:* ${phone}\n*Dirección:* ${address || 'A convenir'}\n\n*Prendas:*\n${itemsText}\n\n*Total:* $${orderTotal.toLocaleString('es-AR')}\n\n¡Hola! Acabo de registrar mi pedido en la tienda web. Aguardo confirmación para coordinar el pago.`;
  const waNum = (adminConfig && adminConfig.whatsappNumber ? adminConfig.whatsappNumber : '5491148209900').replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${waNum}?text=${encodeURIComponent(waMsg)}`;
  window.open(waUrl, '_blank');

  showToast(`🎉 ¡Pedido <strong>#${orderId}</strong> registrado con éxito! Abrimos WhatsApp.`);
}

function clearCart() {
  if (confirm('¿Deseas vaciar tu bolsa de compras?')) {
    cart = [];
    saveCart();
    showToast('Bolsa de compras vaciada');
  }
}

// ==========================================
// 5. QUICK VIEW MODAL
// ==========================================
const quickViewOverlay = document.getElementById('quick-view-overlay');
const quickViewContent = document.getElementById('quick-view-content');
const quickViewClose = document.getElementById('quick-view-close');

function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || !quickViewContent) return;

  // Track product view for metrics
  product.views = (Number(product.views) || 0) + 1;
  saveProducts();

  const isOutOfStock = Number(product.stock) <= 0;
  const isLowStock = !isOutOfStock && Number(product.stock) <= 3;

  let activeColor = product.colors && product.colors.length > 0 ? product.colors[0].name : 'Único';
  let activeSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'U';
  let qty = 1;

  const swatchesHtml = (product.colors || []).map((c, i) => `
    <button type="button" class="color-swatch ${i === 0 ? 'active' : ''}" 
            style="background-color: ${c.hex}; width: 22px; height: 22px;" 
            title="${c.name}" 
            data-color="${c.name}"
            onclick="selectModalColor(this, '${c.name}')">
    </button>
  `).join('');

  const sizesHtml = (product.sizes || []).map((s, i) => `
    <button type="button" class="size-pill ${i === 0 ? 'active' : ''}" 
            data-size="${s}" 
            onclick="selectModalSize(this, '${s}')">
      ${s}
    </button>
  `).join('');

  const featuresHtml = (product.details || []).map(d => `<li>${d}</li>`).join('');

  const galleryThumbnails = product.modelImage ? `
    <div style="display: flex; gap: 0.5rem; margin-top: 0.75rem; justify-content: center;">
      <button type="button" class="btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.72rem; border-radius: 2px;" onclick="document.getElementById('modal-product-img').src='${product.image}'">Detalle Estampa</button>
      <button type="button" class="btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.72rem; border-radius: 2px;" onclick="document.getElementById('modal-product-img').src='${product.modelImage}'">Ver en Modelo</button>
    </div>
  ` : '';

  let stockStatusHtml = '';
  if (isOutOfStock) {
    stockStatusHtml = `<span class="badge-status out" style="margin-left: 0.5rem;">Prenda Agotada</span>`;
  } else if (isLowStock) {
    stockStatusHtml = `<span class="badge-status low" style="margin-left: 0.5rem;">¡Últimas ${product.stock} disponibles!</span>`;
  } else {
    stockStatusHtml = `<span style="font-size: 0.72rem; color: var(--text-muted); margin-left: 0.5rem;">(${product.stock} disponibles)</span>`;
  }

  quickViewContent.innerHTML = `
    <div class="quick-view-gallery" style="display: flex; flex-direction: column; justify-content: center; padding: 1rem; background-color: #FAF8F5;">
      <div class="zoom-viewer-wrap" id="qv-zoom-wrap" onclick="openLightboxFromQuickView()" title="Haz clic para ver en pantalla completa y explorar de cerca">
        <img src="${product.image}" alt="${product.name}" id="modal-product-img" class="zoomable-product-img" />
        <div class="zoom-hint-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <span>Pasa el cursor o toca para ver de cerca</span>
        </div>
        <button type="button" class="zoom-expand-btn" onclick="event.stopPropagation(); openLightboxFromQuickView()" title="Pantalla completa y super zoom">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 3 21 3 21 9"></polyline>
            <polyline points="9 21 3 21 3 15"></polyline>
            <line x1="21" y1="3" x2="14" y2="10"></line>
            <line x1="3" y1="21" x2="10" y2="14"></line>
          </svg>
        </button>
      </div>
      ${galleryThumbnails}
    </div>
    <div class="quick-view-body">
      <div style="display: flex; align-items: center;">
        <span class="quick-view-category">${product.category}</span>
        ${stockStatusHtml}
      </div>
      <h2 class="quick-view-title">${product.name}</h2>
      <div class="quick-view-price-line">
        <span class="quick-view-price">${formatPrice(product.price)}</span>
        ${product.originalPrice ? `<span class="product-old-price">${formatPrice(product.originalPrice)}</span>` : ''}
      </div>
      <p class="quick-view-desc">${product.description}</p>
      
      <!-- Color Picker -->
      <div style="margin-bottom: 1.25rem;">
        <span class="quick-view-picker-label">Color: <strong id="modal-color-name" style="font-weight: 500;">${activeColor}</strong></span>
        <div class="color-swatches" style="gap: 0.6rem; margin-top: 0.4rem;">
          ${swatchesHtml}
        </div>
      </div>

      <!-- Size Picker -->
      <div style="margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <span class="quick-view-picker-label">Talle: <strong id="modal-size-name" style="font-weight: 500;">${activeSize}</strong></span>
          <a href="#como-medirse" onclick="closeQuickView();" style="font-size: 0.75rem; color: var(--bronze-primary); text-decoration: underline; cursor: pointer;">
            📐 ¿Cómo medirte?
          </a>
        </div>
        <div class="size-pill-group" style="margin-top: 0.4rem;">
          ${sizesHtml}
        </div>
      </div>

      <!-- Action Button -->
      <div style="display: flex; gap: 0.75rem;">
        ${isOutOfStock 
          ? `<button class="btn btn-primary btn-block" disabled style="opacity: 0.55; cursor: not-allowed; background-color: var(--border-medium); color: var(--text-muted);">
               Prenda Agotada
             </button>`
          : `<button class="btn btn-primary btn-block" id="modal-add-cart-btn">
               Añadir a la Bolsa
             </button>`
        }
      </div>

      <!-- Features & Care -->
      <ul class="quick-view-features">
        <li><strong>Composición:</strong> ${product.composition || 'Fibras naturales seleccionadas'}</li>
        ${featuresHtml}
      </ul>
    </div>
  `;

  // Attach button event
  const addBtn = document.getElementById('modal-add-cart-btn');
  if (addBtn && !isOutOfStock) {
    addBtn.onclick = () => {
      const chosenColor = document.getElementById('modal-color-name').textContent;
      const chosenSize = document.getElementById('modal-size-name').textContent;
      addToCart(product.id, chosenSize, chosenColor, qty);
      closeQuickView();
    };
  }

  // Attach loupe hover zoom to Quick View image
  const zoomWrap = document.getElementById('qv-zoom-wrap');
  const modalImg = document.getElementById('modal-product-img');
  if (zoomWrap && modalImg) {
    zoomWrap.addEventListener('mousemove', (e) => {
      const rect = zoomWrap.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      modalImg.style.transformOrigin = `${Math.max(0, Math.min(100, x))}% ${Math.max(0, Math.min(100, y))}%`;
      modalImg.style.transform = 'scale(2.2)';
    });

    zoomWrap.addEventListener('mouseleave', () => {
      modalImg.style.transformOrigin = 'center center';
      modalImg.style.transform = 'scale(1)';
    });
  }

  quickViewOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openLightboxFromQuickView() {
  const modalImg = document.getElementById('modal-product-img');
  const titleEl = document.querySelector('#quick-view-content .quick-view-title');
  const title = titleEl ? titleEl.textContent : 'Detalle de Prenda';
  if (modalImg && modalImg.src) {
    openLightbox(modalImg.src, title);
  }
}

function selectModalColor(btn, colorName) {
  document.querySelectorAll('#quick-view-content .color-swatch').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
  const nameLabel = document.getElementById('modal-color-name');
  if (nameLabel) nameLabel.textContent = colorName;
}

function selectModalSize(btn, sizeName) {
  document.querySelectorAll('#quick-view-content .size-pill').forEach(s => s.classList.remove('active'));
  btn.classList.add('active');
  const nameLabel = document.getElementById('modal-size-name');
  if (nameLabel) nameLabel.textContent = sizeName;
}

function closeQuickView() {
  quickViewOverlay.classList.remove('open');
  if (!lightboxModal || !lightboxModal.classList.contains('open')) {
    document.body.style.overflow = '';
  }
}

// ==========================================
// 5.1 LIGHTBOX INTERACTIVE ZOOM & PAN SYSTEM
// ==========================================
let lbScale = 1;
let lbPanX = 0;
let lbPanY = 0;
let lbIsDragging = false;
let lbStartX = 0;
let lbStartY = 0;

const lightboxModal = document.getElementById('image-lightbox-modal');
const lightboxStage = document.getElementById('lightbox-stage');
const lightboxImgWrap = document.getElementById('lightbox-img-wrap');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxZoomIn = document.getElementById('lightbox-zoom-in');
const lightboxZoomOut = document.getElementById('lightbox-zoom-out');
const lightboxZoomReset = document.getElementById('lightbox-zoom-reset');
const lightboxClose = document.getElementById('lightbox-close');

function updateLightboxTransform() {
  if (!lightboxImgWrap) return;
  if (lbScale <= 1.05) {
    lbScale = 1;
    lbPanX = 0;
    lbPanY = 0;
  }
  lightboxImgWrap.style.transform = `translate(${lbPanX}px, ${lbPanY}px) scale(${lbScale})`;
  
  if (lightboxZoomReset) {
    const label = lightboxZoomReset.querySelector('.btn-label') || lightboxZoomReset;
    label.textContent = `${Math.round(lbScale * 100)}%`;
  }
}

function openLightbox(imgSrc, title) {
  if (!lightboxModal || !lightboxImg) return;
  lightboxImg.src = imgSrc;
  if (lightboxTitle) lightboxTitle.textContent = title || 'Detalle de Prenda';
  
  lbScale = 1;
  lbPanX = 0;
  lbPanY = 0;
  updateLightboxTransform();
  
  lightboxModal.classList.add('open');
  lightboxModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  if (!lightboxModal) return;
  lightboxModal.classList.remove('open');
  lightboxModal.setAttribute('aria-hidden', 'true');
  
  if (!quickViewOverlay || !quickViewOverlay.classList.contains('open')) {
    document.body.style.overflow = '';
  }
  lbScale = 1;
  lbPanX = 0;
  lbPanY = 0;
  updateLightboxTransform();
}

function setLightboxZoom(delta, originX, originY) {
  const prevScale = lbScale;
  let nextScale = Math.min(4.5, Math.max(1, lbScale + delta));
  
  if (nextScale === prevScale) return;
  
  if (originX !== undefined && originY !== undefined && lightboxStage) {
    const rect = lightboxStage.getBoundingClientRect();
    const focalX = originX - (rect.left + rect.width / 2);
    const focalY = originY - (rect.top + rect.height / 2);
    const ratio = nextScale / prevScale;
    lbPanX = focalX - (focalX - lbPanX) * ratio;
    lbPanY = focalY - (focalY - lbPanY) * ratio;
  }
  
  lbScale = nextScale;
  if (lbScale <= 1.02) {
    lbScale = 1;
    lbPanX = 0;
    lbPanY = 0;
  }
  updateLightboxTransform();
}

// Lightbox Toolbar Controls
if (lightboxZoomIn) {
  lightboxZoomIn.onclick = () => setLightboxZoom(0.5);
}
if (lightboxZoomOut) {
  lightboxZoomOut.onclick = () => setLightboxZoom(-0.5);
}
if (lightboxZoomReset) {
  lightboxZoomReset.onclick = () => {
    lbScale = 1;
    lbPanX = 0;
    lbPanY = 0;
    updateLightboxTransform();
  };
}
if (lightboxClose) {
  lightboxClose.onclick = closeLightbox;
}

// Close on background click
if (lightboxStage) {
  lightboxStage.addEventListener('click', (e) => {
    if (e.target === lightboxStage) {
      closeLightbox();
    }
  });

  // Double click toggles zoom (1x <-> 2.5x)
  lightboxStage.addEventListener('dblclick', (e) => {
    e.preventDefault();
    if (lbScale > 1.2) {
      lbScale = 1;
      lbPanX = 0;
      lbPanY = 0;
      updateLightboxTransform();
    } else {
      setLightboxZoom(1.5, e.clientX, e.clientY);
    }
  });

  // Mouse wheel zoom
  lightboxStage.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.35 : -0.35;
    setLightboxZoom(delta, e.clientX, e.clientY);
  }, { passive: false });

  // Mouse Drag / Pan
  lightboxStage.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    if (lbScale > 1) {
      lbIsDragging = true;
      lbStartX = e.clientX - lbPanX;
      lbStartY = e.clientY - lbPanY;
      lightboxStage.classList.add('dragging');
    }
  });

  window.addEventListener('mousemove', (e) => {
    if (!lbIsDragging) return;
    lbPanX = e.clientX - lbStartX;
    lbPanY = e.clientY - lbStartY;
    updateLightboxTransform();
  });

  window.addEventListener('mouseup', () => {
    if (lbIsDragging) {
      lbIsDragging = false;
      if (lightboxStage) lightboxStage.classList.remove('dragging');
    }
  });

  // Touch Support: Drag & Multi-Touch Pinch Zoom
  let touchStartX = 0;
  let touchStartY = 0;
  let isTouchDragging = false;
  let touchStartDist = 0;
  let touchInitialScale = 1;

  function getTouchDistance(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  lightboxStage.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      if (lbScale > 1) {
        isTouchDragging = true;
        touchStartX = e.touches[0].clientX - lbPanX;
        touchStartY = e.touches[0].clientY - lbPanY;
      }
    } else if (e.touches.length === 2) {
      isTouchDragging = false;
      touchStartDist = getTouchDistance(e.touches);
      touchInitialScale = lbScale;
    }
  }, { passive: true });

  lightboxStage.addEventListener('touchmove', (e) => {
    if (e.touches.length === 1 && isTouchDragging && lbScale > 1) {
      e.preventDefault();
      lbPanX = e.touches[0].clientX - touchStartX;
      lbPanY = e.touches[0].clientY - touchStartY;
      updateLightboxTransform();
    } else if (e.touches.length === 2 && touchStartDist > 0) {
      e.preventDefault();
      const currentDist = getTouchDistance(e.touches);
      const factor = currentDist / touchStartDist;
      lbScale = Math.min(4.5, Math.max(1, touchInitialScale * factor));
      updateLightboxTransform();
    }
  }, { passive: false });

  lightboxStage.addEventListener('touchend', (e) => {
    if (e.touches.length < 2) {
      touchStartDist = 0;
    }
    if (e.touches.length === 0) {
      isTouchDragging = false;
      if (lbScale <= 1.05) {
        lbScale = 1;
        lbPanX = 0;
        lbPanY = 0;
        updateLightboxTransform();
      }
    }
  }, { passive: true });
}

// Escape key closes Lightbox
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('open')) {
    closeLightbox();
  }
});

// ==========================================
// 6. LIVE SEARCH
// ==========================================
const searchTrigger = document.getElementById('search-trigger');
const searchOverlay = document.getElementById('search-overlay');
const searchClose = document.getElementById('search-close');
const liveSearchInput = document.getElementById('live-search-input');
const searchResultsContainer = document.getElementById('search-results');

function toggleSearch() {
  const isOpen = searchOverlay.classList.contains('open');
  if (isOpen) {
    searchOverlay.classList.remove('open');
  } else {
    searchOverlay.classList.add('open');
    liveSearchInput.value = '';
    searchResultsContainer.innerHTML = '';
    setTimeout(() => liveSearchInput.focus(), 100);
  }
}

function performSearch(query) {
  query = query.trim().toLowerCase();
  if (query.length < 2) {
    searchResultsContainer.innerHTML = '';
    return;
  }

  const results = PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.category.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    searchResultsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 1.5rem; text-align: center; color: var(--text-muted); font-size: 0.875rem;">
        No encontramos prendas para "<strong>${query}</strong>". Intenta con vestidos, pantalones o lino.
      </div>
    `;
    return;
  }

  searchResultsContainer.innerHTML = results.map(p => `
    <div class="search-result-item" onclick="toggleSearch(); openQuickView('${p.id}')">
      <img src="${p.image}" alt="${p.name}" class="search-result-thumb" />
      <div class="search-result-info">
        <h4>${p.name}</h4>
        <span>${formatPrice(p.price)}</span>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 7. USER & INFORMATIONAL MODALS
// ==========================================
const userTrigger = document.getElementById('user-trigger');
const userModalOverlay = document.getElementById('user-modal-overlay');
const userModalClose = document.getElementById('user-modal-close');

function openUserModal() {
  userModalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeUserModal() {
  userModalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Info Modal for Size Guide, Shipping & Care
const infoModalOverlay = document.getElementById('info-modal-overlay');
const infoModalClose = document.getElementById('info-modal-close');
const infoModalBody = document.getElementById('info-modal-body');

function openInfoModal(type) {
  if (!infoModalBody) return;

  if (type === 'size-guide') {
    infoModalBody.innerHTML = `
      <h3 class="info-modal-title">Cómo Medirte & Guía de Talles</h3>
      <div class="info-modal-content">
        <p style="margin-bottom: 1rem;">Nuestras prendas tienen una moldería relajada y fluida, inspirada en siluetas holgadas europeas. Seguí estos 3 pasos con tu cinta métrica:</p>
        <ul style="font-size: 0.84rem; line-height: 1.6; margin-bottom: 1.25rem; padding-left: 1.25rem;">
          <li><strong>Busto:</strong> Medí la parte más saliente del pecho en línea horizontal y sin apretar.</li>
          <li><strong>Cintura:</strong> Medí la parte más angosta del torso (2-3 cm sobre el ombligo).</li>
          <li><strong>Cadera:</strong> Medí el contorno en la parte más prominente de los glúteos con pies juntos.</li>
        </ul>
        <table class="info-table">
          <thead>
            <tr>
              <th>Talle</th>
              <th>Busto (cm)</th>
              <th>Cintura (cm)</th>
              <th>Cadera (cm)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>XS</strong></td><td>82 - 86</td><td>62 - 66</td><td>88 - 92</td></tr>
            <tr><td><strong>S</strong></td><td>86 - 90</td><td>66 - 72</td><td>92 - 98</td></tr>
            <tr><td><strong>M</strong></td><td>90 - 96</td><td>72 - 78</td><td>98 - 104</td></tr>
            <tr><td><strong>L</strong></td><td>96 - 104</td><td>78 - 86</td><td>104 - 112</td></tr>
          </tbody>
        </table>
        <p style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 0.75rem;">
          * Si estás entre dos talles: el menor te brindará un calce más estructurado; el mayor otorgará mayor holgura bohemia.
        </p>
        <div style="margin-top: 1.25rem;">
          <a href="#como-medirse" class="btn btn-primary" onclick="closeInfoModal();" style="width: 100%; text-align: center;">
            Ir a la Calculadora Interactiva de Talles
          </a>
        </div>
      </div>
    `;
  } else if (type === 'shipping') {
    infoModalBody.innerHTML = `
      <h3 class="info-modal-title">Envíos & Políticas de Cambio</h3>
      <div class="info-modal-content">
        <h4 style="font-size: 1rem; color: var(--text-main); margin-bottom: 0.5rem;">Envíos Cuidados</h4>
        <p style="margin-bottom: 1rem;">
          Despachamos todas las órdenes dentro de las 24-48 hs hábiles desde nuestro Atelier.
          Los pedidos superiores a <strong>${formatPrice(FREE_SHIPPING_THRESHOLD)}</strong> gozan de <strong>Envío Sin Cargo</strong> a todo el país mediante correo prioritario.
        </p>
        <h4 style="font-size: 1rem; color: var(--text-main); margin-bottom: 0.5rem;">Cambios Sin Fricción</h4>
        <p>
          Cuentas con 30 días corridos a partir de la recepción para solicitar el cambio de cualquier prenda sin uso y con sus etiquetas originales.
        </p>
      </div>
    `;
  } else if (type === 'care') {
    infoModalBody.innerHTML = `
      <h3 class="info-modal-title">Cuidado de Fibras Nobles & Lino</h3>
      <div class="info-modal-content">
        <p style="margin-bottom: 1rem;">
          El lino y el algodón orgánico son fibras vivas que embellecen con el tiempo y el uso. Para prolongar su suavidad y textura natural:
        </p>
        <ul style="list-style: inside disc; line-height: 1.8; margin-bottom: 1.5rem;">
          <li>Lavar a mano o en lavarropas con programa para prendas delicadas y agua fría (máximo 30°C).</li>
          <li>Utilizar jabón neutro o biodegradable; evitar blanqueadores agresivos.</li>
          <li>Secar a la sombra sobre superficie plana para preservar la caída de la tela.</li>
          <li>Planchar del revés mientras la prenda aún esté ligeramente húmeda, o disfrutar de su arruga natural elegante.</li>
        </ul>
      </div>
    `;
  }

  infoModalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeInfoModal() {
  infoModalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================
// 8. TOAST NOTIFICATIONS
// ==========================================
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-leave');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3200);
}

// ==========================================
// 9. EVENT LISTENERS INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Initial renders
  renderProducts();
  updateCartBadge();
  renderCartDrawer();

  // Category Pills filter
  if (categoryPillsContainer) {
    categoryPillsContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-pill');
      if (!btn) return;
      const filter = btn.dataset.filter;
      filterByCategory(filter);
    });
  }

  // Sort select
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      renderProducts();
    });
  }

  // Reset filter button
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      filterByCategory('all');
    });
  }

  // Hero Ver Coleccion buttons
  const heroPrimaryBtn = document.getElementById('hero-primary-btn');
  if (heroPrimaryBtn) {
    heroPrimaryBtn.addEventListener('click', scrollToCollection);
  }
  const heroMobileHitbox = document.querySelector('.hero-mobile-hitbox');
  if (heroMobileHitbox) {
    heroMobileHitbox.addEventListener('click', scrollToCollection);
  }

  // Cart open / close
  if (cartTrigger) cartTrigger.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartDrawerOverlay) cartDrawerOverlay.addEventListener('click', closeCart);
  if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        alert('Tu bolsa está vacía. Selecciona alguna prenda antes de proceder al pago.');
        return;
      }
      alert('¡Gracias por elegir Evangelina Atelier! Redirigiendo a pasarela segura de pago...');
    });
  }

  // Quick view close
  if (quickViewClose) quickViewClose.addEventListener('click', closeQuickView);
  if (quickViewOverlay) {
    quickViewOverlay.addEventListener('click', (e) => {
      if (e.target === quickViewOverlay) closeQuickView();
    });
  }

  // Search trigger & close
  if (searchTrigger) searchTrigger.addEventListener('click', toggleSearch);
  if (searchClose) searchClose.addEventListener('click', toggleSearch);
  if (liveSearchInput) {
    liveSearchInput.addEventListener('input', (e) => {
      performSearch(e.target.value);
    });
  }

  // User modal open / close
  if (userTrigger) userTrigger.addEventListener('click', openUserModal);
  if (userModalClose) userModalClose.addEventListener('click', closeUserModal);
  if (userModalOverlay) {
    userModalOverlay.addEventListener('click', (e) => {
      if (e.target === userModalOverlay) closeUserModal();
    });
  }

  // Info modal triggers
  const triggerSizeGuide = document.getElementById('trigger-size-guide');
  const triggerShipping = document.getElementById('trigger-shipping-info');
  const triggerCare = document.getElementById('trigger-care-guide');

  if (triggerSizeGuide) {
    triggerSizeGuide.addEventListener('click', (e) => {
      e.preventDefault();
      openInfoModal('size-guide');
    });
  }

  if (triggerShipping) {
    triggerShipping.addEventListener('click', (e) => {
      e.preventDefault();
      openInfoModal('shipping');
    });
  }

  if (triggerCare) {
    triggerCare.addEventListener('click', (e) => {
      e.preventDefault();
      openInfoModal('care');
    });
  }

  if (infoModalClose) infoModalClose.addEventListener('click', closeInfoModal);
  if (infoModalOverlay) {
    infoModalOverlay.addEventListener('click', (e) => {
      if (e.target === infoModalOverlay) closeInfoModal();
    });
  }

  // Mobile menu drawer
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const closeMobileMenu = document.getElementById('close-mobile-menu');

  function openMobileMenu() {
    mobileDrawer.classList.add('open');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenuFunc() {
    mobileDrawer.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (closeMobileMenu) closeMobileMenu.addEventListener('click', closeMobileMenuFunc);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenuFunc);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenuFunc);
  });

// ==========================================
// 8. COMPLETE ADMIN SUITE (DELEGATED TO BACKOFFICE.JS)
// ==========================================
// The comprehensive backoffice suite is managed by window.Backoffice (backoffice.js)
// Real-time synchronization between Backoffice, localStorage, GitHub API, and Public Storefront.

  // Newsletter subscription
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterFeedback = document.getElementById('newsletter-feedback');
  const newsletterEmail = document.getElementById('newsletter-email');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value;
      if (newsletterFeedback) {
        newsletterFeedback.innerHTML = `✨ ¡Gracias por unirte! Hemos enviado tu código de <strong>10% OFF</strong> a <em>${email}</em>.`;
      }
      newsletterEmail.value = '';
      showToast('¡Te has suscrito exitosamente al Atelier!');
    });
  }

  // Admin Modal trigger is managed in backoffice.js

  // ==========================================
  // 10. SIZE GUIDE & MEASUREMENTS CONTROLLER
  // ==========================================
  const SIZE_TABLES = {
    pantalones: {
      title: 'Pantalones Palazzo',
      headers: ['Talle', 'Equivalencia AR/EU', 'Cintura (cm)', 'Cadera (cm)', 'Largo Total', 'Tiro'],
      rows: [
        ['XS', '34 - 36', '62 - 66', '88 - 92', '104 cm', '33 cm'],
        ['S', '36 - 38', '66 - 72', '92 - 98', '105 cm', '34 cm'],
        ['M', '40 - 42', '72 - 78', '98 - 104', '106 cm', '35 cm'],
        ['L', '44', '78 - 86', '104 - 112', '107 cm', '36 cm']
      ],
      note: 'Nuestros palazzos cuentan con pretina anatómica y elástico sutil posterior que concede hasta 5 cm de elasticidad y confort natural sin perder la estructura sastrera.'
    },
    chalecos: {
      title: 'Chalecos',
      headers: ['Talle', 'Busto (cm)', 'Cintura (cm)', 'Largo Prenda', 'Hombros'],
      rows: [
        ['S', '84 - 88', '66 - 72', '47 cm', '36 cm'],
        ['M', '89 - 94', '72 - 78', '49 cm', '38 cm'],
        ['L', '95 - 102', '78 - 86', '51 cm', '40 cm']
      ],
      note: 'El chaleco de gamuza rosa cuenta con cordones de cuero laterales regulables para adaptar el calce a tu silueta o usarlo abierto sobre camisas.'
    },
    remeras: {
      title: 'Remeras Estampadas',
      headers: ['Talle', 'Ancho Sisa a Sisa', 'Contorno Pecho', 'Largo Total', 'Hombro a Hombro'],
      rows: [
        ['S', '48 cm', '96 cm', '63 cm', '41 cm'],
        ['M', '51 cm', '102 cm', '65 cm', '43 cm'],
        ['L', '54 cm', '108 cm', '67 cm', '45 cm'],
        ['XL', '57 cm', '114 cm', '69 cm', '47 cm']
      ],
      note: 'Corte recto relajado unisex de tacto suave. Para lucir la estética oversize relajada del atelier, te sugerimos optar por un talle superior.'
    },
    conjuntos: {
      title: 'Conjuntos 2 Piezas',
      headers: ['Talle', 'Top Busto (cm)', 'Top Largo', 'Palazzo Cintura (cm)', 'Palazzo Cadera (cm)'],
      rows: [
        ['S', '86 - 90', '48 cm', '66 - 72', '92 - 96'],
        ['M', '91 - 96', '50 cm', '72 - 78', '97 - 103'],
        ['L', '97 - 103', '52 cm', '78 - 85', '104 - 110']
      ],
      note: 'El conjunto incluye ambas piezas coordinadas en poplin sedoso. El top incorpora hombreras sutiles desmontables que estilizan la postura.'
    }
  };

  function renderSizeTable(categoryKey) {
    const container = document.getElementById('table-container');
    if (!container) return;
    const data = SIZE_TABLES[categoryKey] || SIZE_TABLES.pantalones;
    
    let html = `
      <h4 style="font-family: var(--font-editorial); font-size: 1.25rem; margin-bottom: 0.85rem; color: var(--text-main);">${data.title}</h4>
      <table class="size-guide-table">
        <thead>
          <tr>${data.headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${data.rows.map(row => `
            <tr>${row.map((cell, idx) => idx === 0 ? `<td><strong>${cell}</strong></td>` : `<td>${cell}</td>`).join('')}</tr>
          `).join('')}
        </tbody>
      </table>
      <div class="table-garment-note">
        <strong>✨ Detalle de Confección:</strong> ${data.note}
      </div>
    `;
    container.innerHTML = html;
  }

  function switchTableCategory(catKey) {
    document.querySelectorAll('.table-cat-pill').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`btn-cat-${catKey}`);
    if (activeBtn) activeBtn.classList.add('active');
    renderSizeTable(catKey);
  }

  function switchMeasureTab(tabKey) {
    const tabCalc = document.getElementById('measure-tab-calc');
    const tabTables = document.getElementById('measure-tab-tables');
    const btnCalc = document.getElementById('tab-btn-calc');
    const btnTables = document.getElementById('tab-btn-tables');

    if (tabKey === 'calc') {
      if (tabCalc) tabCalc.classList.add('active');
      if (tabTables) tabTables.classList.remove('active');
      if (btnCalc) btnCalc.classList.add('active');
      if (btnTables) btnTables.classList.remove('active');
    } else {
      if (tabCalc) tabCalc.classList.remove('active');
      if (tabTables) tabTables.classList.add('active');
      if (btnCalc) btnCalc.classList.remove('active');
      if (btnTables) btnTables.classList.add('active');
      renderSizeTable('pantalones');
    }
  }

  function calculateMySize() {
    const bustoInput = document.getElementById('calc-busto');
    const cinturaInput = document.getElementById('calc-cintura');
    const caderaInput = document.getElementById('calc-cadera');
    const categorySelect = document.getElementById('calc-category');
    const fitSelect = document.getElementById('calc-fit-preference');
    const resultBox = document.getElementById('calc-result-box');

    const busto = parseFloat(bustoInput ? bustoInput.value : 0) || 0;
    const cintura = parseFloat(cinturaInput ? cinturaInput.value : 0) || 0;
    const cadera = parseFloat(caderaInput ? caderaInput.value : 0) || 0;
    const category = categorySelect ? categorySelect.value : 'todos';
    const fit = fitSelect ? fitSelect.value : 'relax';

    if (!busto && !cintura && !cadera) {
      alert('Por favor ingresá al menos una de tus medidas (busto, cintura o cadera) para calcular tu talle sugerido.');
      return;
    }

    let size = 'S';
    let fitNote = '';
    let advice = '';

    // Determine size based on dominant measurements & selected category
    if (category === 'pantalones') {
      const c = cintura || (cadera ? cadera - 25 : 68);
      const h = cadera || (cintura ? cintura + 25 : 94);
      if (c <= 66 && h <= 92) size = 'XS';
      else if (c <= 72 && h <= 98) size = 'S';
      else if (c <= 78 && h <= 104) size = 'M';
      else size = 'L';

      if (fit === 'relax' && (c > 70 || h > 96) && size === 'S') size = 'M';
      fitNote = `Para Pantalones Palazzo con cintura de ${cintura || '-'} cm y cadera de ${cadera || '-'} cm.`;
      advice = 'Nuestros palazzos son de tiro alto. El talle sugerido te brindará la caída holgada y estilizada perfecta en la botamanga.';
    } else if (category === 'chalecos') {
      const b = busto || (cintura ? cintura + 20 : 88);
      if (b <= 88) size = 'S';
      else if (b <= 95) size = 'M';
      else size = 'L';

      if (fit === 'relax' && b > 87 && size === 'S') size = 'M';
      fitNote = `Para Chalecos con busto de ${busto || '-'} cm.`;
      advice = 'Calce sastrero a la cintura. Si lo vas a usar sobre camisas de manga amplia, este talle te brindará la holgura justa en sisas.';
    } else if (category === 'remeras') {
      const b = busto || 90;
      if (b <= 92) size = fit === 'relax' ? 'M' : 'S';
      else if (b <= 98) size = fit === 'relax' ? 'L' : 'M';
      else if (b <= 106) size = 'L';
      else size = 'XL';

      fitNote = `Para Remeras Estampadas con contorno de pecho de ${busto || '-'} cm.`;
      advice = 'Confeccionadas en puro algodón peinado. La moldería relajada te dará frescura y comodidad durante todo el día.';
    } else {
      // Toda la colección / Conjuntos
      let score = 0;
      let count = 0;
      if (busto) {
        count++;
        if (busto <= 86) score += 1;
        else if (busto <= 92) score += 2;
        else if (busto <= 98) score += 3;
        else score += 4;
      }
      if (cintura) {
        count++;
        if (cintura <= 66) score += 1;
        else if (cintura <= 72) score += 2;
        else if (cintura <= 79) score += 3;
        else score += 4;
      }
      if (cadera) {
        count++;
        if (cadera <= 92) score += 1;
        else if (cadera <= 98) score += 2;
        else if (cadera <= 105) score += 3;
        else score += 4;
      }

      const avg = count > 0 ? score / count : 2;
      if (avg <= 1.3) size = 'XS';
      else if (avg <= 2.3) size = 'S';
      else if (avg <= 3.3) size = 'M';
      else size = 'L';

      if (fit === 'relax' && (size === 'XS' || size === 'S') && avg >= 2.0) {
        size = size === 'XS' ? 'S' : 'M';
      }

      fitNote = `Calce sugerido para silueta general del Atelier (${fit === 'relax' ? 'Estilo Más Holgado / Oversized' : 'Estilo Más Al Cuerpo'}).`;
      advice = 'Prendas con caída fluida. Si deseas mayor asesoramiento antes de comprar, podés contactarnos por WhatsApp.';
    }

    resultBox.innerHTML = `
      <div class="size-result-card">
        <span class="size-result-badge">✨ Recomendación Personalizada</span>
        <div class="size-result-value">Talle ${size}</div>
        <div class="size-result-fit">${fitNote}</div>
        <p class="size-result-desc">${advice}</p>
        <div class="size-result-actions">
          <a href="#coleccion" class="btn btn-primary" onclick="showToast('Explorando colección para talle ${size}')">
            Ver Prendas en Talle ${size}
          </a>
        </div>
      </div>
    `;
  }

  function resetSizeCalculator() {
    const bustoInput = document.getElementById('calc-busto');
    const cinturaInput = document.getElementById('calc-cintura');
    const caderaInput = document.getElementById('calc-cadera');
    const resultBox = document.getElementById('calc-result-box');

    if (bustoInput) bustoInput.value = '';
    if (cinturaInput) cinturaInput.value = '';
    if (caderaInput) caderaInput.value = '';

    if (resultBox) {
      resultBox.innerHTML = `
        <div class="calc-placeholder">
          <div class="calc-placeholder-icon">📐</div>
          <h5 class="calc-placeholder-title">Descubrí tu talle ideal</h5>
          <p class="calc-placeholder-desc">Completá tus medidas a la izquierda para recibir la recomendación personalizada de moldería del Atelier.</p>
        </div>
      `;
    }
  }

  // ==========================================
  // 12. FICHA TÉCNICA ILUSTRADA DE MEDICIÓN
  // ==========================================
  const MEASURE_SHEET_DATA = {
    busto: {
      key: 'busto',
      stepNum: '01',
      badge: 'Paso 01 de 03',
      title: 'Contorno de Busto',
      tag: 'Esquema Anatómico: Busto & Espalda',
      intro: 'El contorno de busto determina el calce de sisas, cruce de botones y soltura de busto en toda nuestra sastrería y partes superiores.',
      rules: [
        {
          title: 'Vértice más prominente',
          desc: 'Pasá la cinta por la parte más saliente del pecho (a la altura de los pezones) manteniendo los brazos y hombros relajados.'
        },
        {
          title: 'Cinta estrictamente horizontal',
          desc: 'Asegurate de que en la espalda la cinta esté a la misma altura que adelante. Mirate de perfil al espejo o pedí ayuda.'
        },
        {
          title: 'Regla del 1 dedo de holgura',
          desc: 'No tenses la cinta. Debe quedar un dedo índice deslizando cómodamente por debajo para respetar la caída fluida del atelier.'
        }
      ],
      garments: ['Chalecos Sastreros', 'Remeras de Puro Algodón', 'Tops de Lino & Musculosas', 'Vestidos Camiseros'],
      tip: '<strong>Consejo de Confección:</strong> Medite con el corpiño que vayas a usar habitualmente debajo de la prenda. Evitá corpiños deportivos con compresión fuerte.',
      legend: '<strong>Cinta métrica:</strong> Flexible, colocada horizontalmente sobre el vértice del busto con tolerancia de 1 dedo.',
      calcFieldId: 'calc-busto',
      calcButtonText: 'Ingresar Busto en Calculadora',
      nextKey: 'cintura',
      nextLabel: 'Siguiente: Cintura Natural →',
      svg: `<svg viewBox="0 0 380 430" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mannequinGradClean" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="50%" stop-color="#FAF9F6"/>
      <stop offset="100%" stop-color="#EDE8E2"/>
    </linearGradient>
    <linearGradient id="chromeCap" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#787C80"/>
      <stop offset="35%" stop-color="#E2E6EA"/>
      <stop offset="70%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#585C60"/>
    </linearGradient>
    <linearGradient id="tapeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#E5B96B"/>
      <stop offset="50%" stop-color="#F7D892"/>
      <stop offset="100%" stop-color="#DEAC56"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#3A3028" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Background Atelier Grid Marks -->
  <g stroke="#EAE0D3" stroke-width="0.75" stroke-dasharray="3 3">
    <line x1="40" y1="0" x2="40" y2="430"/>
    <line x1="190" y1="0" x2="190" y2="430"/>
    <line x1="340" y1="0" x2="340" y2="430"/>
    <line x1="0" y1="180" x2="380" y2="180"/>
  </g>

  <!-- Modern Metallic Stand Pole Base -->
  <line x1="190" y1="365" x2="190" y2="430" stroke="#4A4E52" stroke-width="6" stroke-linecap="round"/>

  <!-- Mannequin Torso with Realistic Smooth Dress Form Contour (Reference 2) -->
  <path d="M 166,42 Q 190,38 214,42 Q 224,54 238,72 Q 258,95 264,124 Q 268,154 256,182 Q 242,210 236,234 Q 230,258 238,284 Q 248,314 250,344 Q 251,360 248,366 L 132,366 Q 129,360 130,344 Q 132,314 142,284 Q 150,258 144,234 Q 138,210 124,182 Q 112,154 116,124 Q 122,95 142,72 Q 156,54 166,42 Z" 
        fill="url(#mannequinGradClean)" stroke="#B0A69A" stroke-width="1.5" filter="url(#shadow)"/>

  <!-- Modern Metallic Chrome Neck Cap (Silver finish from Reference Photo) -->
  <rect x="166" y="24" width="48" height="18" rx="4" fill="url(#chromeCap)" stroke="#3A3E42" stroke-width="1.2"/>
  <ellipse cx="190" cy="24" rx="24" ry="4" fill="#EAECEE" stroke="#505458" stroke-width="1"/>
  <ellipse cx="190" cy="42" rx="24" ry="4" fill="none" stroke="#7A8084" stroke-width="0.8"/>

  <!-- Bust Anatomical Highlights -->
  <ellipse cx="152" cy="172" rx="18" ry="14" fill="#FFFFFF" fill-opacity="0.4"/>
  <ellipse cx="228" cy="172" rx="18" ry="14" fill="#FFFFFF" fill-opacity="0.4"/>
  <circle cx="156" cy="172" r="3" fill="#A08E7D"/>
  <circle cx="224" cy="172" r="3" fill="#A08E7D"/>

  <!-- Back Tape Arc (Behind body) -->
  <path d="M104 175 C132 163 248 163 276 175" fill="none" stroke="#C29A4D" stroke-width="14" stroke-opacity="0.4" stroke-dasharray="6 4"/>

  <!-- Front Measuring Tape (Golden Ribbon across Bust Apex) -->
  <path d="M102 173 C142 185 238 185 278 173 L279 187 C238 199 142 199 101 187 Z" 
        fill="url(#tapeGrad)" stroke="#8A6729" stroke-width="1.2" filter="url(#shadow)"/>

  <!-- Centimeter Tick Marks on Front Tape -->
  <g stroke="#543C16" stroke-width="1">
    <line x1="114" y1="176" x2="114" y2="182"/>
    <line x1="124" y1="178" x2="124" y2="186"/>
    <line x1="134" y1="179" x2="134" y2="184"/>
    <line x1="144" y1="181" x2="144" y2="188"/>
    <line x1="154" y1="182" x2="154" y2="186"/>
    <line x1="164" y1="183" x2="164" y2="189"/>
    <line x1="174" y1="184" x2="174" y2="188"/>
    <line x1="184" y1="184" x2="184" y2="190"/>
    <line x1="194" y1="184" x2="194" y2="190"/>
    <line x1="204" y1="184" x2="204" y2="188"/>
    <line x1="214" y1="183" x2="214" y2="189"/>
    <line x1="224" y1="182" x2="224" y2="186"/>
    <line x1="234" y1="181" x2="234" y2="188"/>
    <line x1="244" y1="179" x2="244" y2="184"/>
    <line x1="254" y1="178" x2="254" y2="186"/>
    <line x1="264" y1="176" x2="264" y2="182"/>
  </g>
  <text x="144" y="186" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" font-weight="700" fill="#422E10" text-anchor="middle">88</text>
  <text x="190" y="188" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="800" fill="#422E10" text-anchor="middle">92</text>
  <text x="236" y="186" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" font-weight="700" fill="#422E10" text-anchor="middle">96</text>

  <!-- Caliper Guideline with Arrows -->
  <line x1="55" y1="180" x2="96" y2="180" stroke="#9E7B5C" stroke-width="1.8"/>
  <polyline points="93,176 98,180 93,184" fill="none" stroke="#9E7B5C" stroke-width="1.8"/>
  <line x1="284" y1="180" x2="325" y2="180" stroke="#9E7B5C" stroke-width="1.8"/>
  <polyline points="287,176 282,180 287,184" fill="none" stroke="#9E7B5C" stroke-width="1.8"/>

  <!-- Left Callout Box: Vértice del Busto -->
  <g transform="translate(10, 100)">
    <rect width="112" height="34" rx="4" fill="#FFFFFF" stroke="#9E7B5C" stroke-width="1.2" filter="url(#shadow)"/>
    <text x="56" y="15" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="700" fill="#3D3028" text-anchor="middle">VÉRTICE DEL PECHO</text>
    <text x="56" y="26" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" fill="#7C685A" text-anchor="middle">Parte más prominente</text>
    <path d="M112 17 L132 17 L156 172" fill="none" stroke="#9E7B5C" stroke-width="1.2" stroke-dasharray="3 2"/>
    <circle cx="156" cy="172" r="3.5" fill="#9E7B5C"/>
  </g>

  <!-- Right Callout Box: Cinta Horizontal & Espalda -->
  <g transform="translate(255, 100)">
    <rect width="115" height="34" rx="4" fill="#FFFFFF" stroke="#9E7B5C" stroke-width="1.2" filter="url(#shadow)"/>
    <text x="57" y="15" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="700" fill="#3D3028" text-anchor="middle">CINTA HORIZONTAL</text>
    <text x="57" y="26" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" fill="#7C685A" text-anchor="middle">Nivelada en la espalda</text>
    <path d="M0 17 L-18 17 L-31 165" fill="none" stroke="#9E7B5C" stroke-width="1.2" stroke-dasharray="3 2"/>
    <circle cx="224" cy="172" r="3.5" fill="#9E7B5C"/>
  </g>

  <!-- Bottom Badge: Tolerancia 1 dedo -->
  <g transform="translate(190, 244)">
    <rect x="-85" y="-14" width="170" height="28" rx="14" fill="#FAF4EB" stroke="#9E7B5C" stroke-width="1.5" filter="url(#shadow)"/>
    <text x="0" y="4" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" fill="#9E7B5C" text-anchor="middle">✨ TOLERANCIA: 1 DEDO DE HOLGURA</text>
  </g>
</svg>`
    },
    cintura: {
      key: 'cintura',
      stepNum: '02',
      badge: 'Paso 02 de 03',
      title: 'Cintura Natural',
      tag: 'Esquema Anatómico: Cintura & Torso',
      intro: 'La cintura natural es la medida crítica para la pretina de nuestros pantalones palazzo, faldas plato y cinturones artesanales.',
      rules: [
        {
          title: 'Punto más estrecho del torso',
          desc: 'Incliná tu torso suavemente hacia un lateral: donde se forme el pliegue natural (unos 2 a 3 cm sobre el ombligo), ese es tu punto de cintura.'
        },
        {
          title: 'Postura neutra y relajada',
          desc: 'Mantené los pies juntos, cabeza erguida y respirá con normalidad. Evitá contener la respiración o forzar el abdomen hacia adentro.'
        },
        {
          title: 'Calce de pretina firme pero suave',
          desc: 'La cinta debe rodear tu torso de manera justa pero permitiendo respirar con total comodidad sin que deje marcas en la piel.'
        }
      ],
      garments: ['Pantalones Palazzo Tiro Alto', 'Pantalones con Elástico Trasero', 'Faldas Midi & Maxi', 'Prendas con Cinturón'],
      tip: '<strong>Consejo de Confección:</strong> Si el pantalón tiene cintura elastizada en la espalda, tenés hasta 4 cm adicionales de confort.',
      legend: '<strong>Cinta métrica:</strong> Alrededor del punto más estrecho del torso (2 a 3 cm sobre ombligo), en respiración neutra.',
      calcFieldId: 'calc-cintura',
      calcButtonText: 'Ingresar Cintura en Calculadora',
      nextKey: 'cadera',
      nextLabel: 'Siguiente: Contorno de Cadera →',
      svg: `<svg viewBox="0 0 380 430" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mannequinGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FAF5EE"/>
      <stop offset="50%" stop-color="#F2E6D8"/>
      <stop offset="100%" stop-color="#E5D3C0"/>
    </linearGradient>
    <linearGradient id="tapeGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#E5B96B"/>
      <stop offset="50%" stop-color="#F7D892"/>
      <stop offset="100%" stop-color="#DEAC56"/>
    </linearGradient>
    <filter id="shadow2" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#4A3B32" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Background Atelier Grid Marks -->
  <g stroke="#EAE0D3" stroke-width="0.75" stroke-dasharray="3 3">
    <line x1="40" y1="0" x2="40" y2="430"/>
    <line x1="190" y1="0" x2="190" y2="430"/>
    <line x1="340" y1="0" x2="340" y2="430"/>
    <line x1="0" y1="225" x2="380" y2="225"/>
  </g>

  <!-- Modern Metallic Stand Pole Base -->
  <line x1="190" y1="365" x2="190" y2="430" stroke="#4A4E52" stroke-width="6" stroke-linecap="round"/>

  <!-- Mannequin Torso with Realistic Smooth Dress Form Contour (Reference 2) -->
  <path d="M 166,42 Q 190,38 214,42 Q 224,54 238,72 Q 258,95 264,124 Q 268,154 256,182 Q 242,210 236,234 Q 230,258 238,284 Q 248,314 250,344 Q 251,360 248,366 L 132,366 Q 129,360 130,344 Q 132,314 142,284 Q 150,258 144,234 Q 138,210 124,182 Q 112,154 116,124 Q 122,95 142,72 Q 156,54 166,42 Z" 
        fill="url(#mannequinGradClean)" stroke="#B0A69A" stroke-width="1.5" filter="url(#shadow2)"/>

  <!-- Chrome Cap Top -->
  <rect x="166" y="24" width="48" height="18" rx="4" fill="url(#chromeCap)" stroke="#3A3E42" stroke-width="1.2"/>
  <ellipse cx="190" cy="24" rx="24" ry="4" fill="#EAECEE" stroke="#505458" stroke-width="1"/>
  <ellipse cx="190" cy="42" rx="24" ry="4" fill="none" stroke="#7A8084" stroke-width="0.8"/>

  <!-- Navel Marker (Ombligo) -->
  <ellipse cx="190" cy="256" rx="4.5" ry="3.5" fill="#B0937A"/>
  <circle cx="190" cy="255.5" r="2" fill="#755843"/>

  <!-- Distance indicator: 2 a 3 cm sobre ombligo -->
  <line x1="190" y1="236" x2="190" y2="251" stroke="#9E7B5C" stroke-width="1.5"/>
  <polyline points="187,239 190,235 193,239" fill="none" stroke="#9E7B5C" stroke-width="1.5"/>
  <polyline points="187,248 190,252 193,248" fill="none" stroke="#9E7B5C" stroke-width="1.5"/>
  <text x="202" y="247" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="700" fill="#9E7B5C">▲ 2 a 3 cm</text>

  <!-- Back Tape Arc -->
  <path d="M136 226 C155 218 225 218 244 226" fill="none" stroke="#C29A4D" stroke-width="14" stroke-opacity="0.4" stroke-dasharray="6 4"/>

  <!-- Front Measuring Tape across narrowest waist -->
  <path d="M135 223 C160 231 220 231 245 223 L246 237 C220 245 160 245 134 237 Z" 
        fill="url(#tapeGrad2)" stroke="#8A6729" stroke-width="1.2" filter="url(#shadow2)"/>

  <!-- Tick Marks -->
  <g stroke="#543C16" stroke-width="1">
    <line x1="145" y1="226" x2="145" y2="232"/>
    <line x1="155" y1="228" x2="155" y2="235"/>
    <line x1="165" y1="229" x2="165" y2="234"/>
    <line x1="175" y1="230" x2="175" y2="236"/>
    <line x1="185" y1="231" x2="185" y2="235"/>
    <line x1="195" y1="231" x2="195" y2="237"/>
    <line x1="205" y1="230" x2="205" y2="235"/>
    <line x1="215" y1="229" x2="215" y2="236"/>
    <line x1="225" y1="228" x2="225" y2="234"/>
    <line x1="235" y1="226" x2="235" y2="232"/>
  </g>
  <text x="165" y="233" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" font-weight="700" fill="#422E10" text-anchor="middle">68</text>
  <text x="195" y="234.5" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="800" fill="#422E10" text-anchor="middle">72</text>
  <text x="225" y="233" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" font-weight="700" fill="#422E10" text-anchor="middle">76</text>

  <!-- Left Callout: Punto Más Estrecho -->
  <g transform="translate(10, 160)">
    <rect width="114" height="34" rx="4" fill="#FFFFFF" stroke="#9E7B5C" stroke-width="1.2" filter="url(#shadow2)"/>
    <text x="57" y="15" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="700" fill="#3D3028" text-anchor="middle">PUNTO MÁS ANGOSTO</text>
    <text x="57" y="26" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" fill="#7C685A" text-anchor="middle">Curvatura natural del torso</text>
    <path d="M114 17 L126 17 L135 223" fill="none" stroke="#9E7B5C" stroke-width="1.2" stroke-dasharray="3 2"/>
    <circle cx="135" cy="223" r="3.5" fill="#9E7B5C"/>
  </g>

  <!-- Right Callout: Ombligo como Referencia -->
  <g transform="translate(255, 245)">
    <rect width="115" height="34" rx="4" fill="#FFFFFF" stroke="#9E7B5C" stroke-width="1.2" filter="url(#shadow2)"/>
    <text x="57" y="15" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="700" fill="#3D3028" text-anchor="middle">LÍNEA DE OMBLIGO</text>
    <text x="57" y="26" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" fill="#7C685A" text-anchor="middle">Medir 2-3 cm arriba</text>
    <path d="M0 17 L-40 17 L-60 256" fill="none" stroke="#9E7B5C" stroke-width="1.2" stroke-dasharray="3 2"/>
    <circle cx="195" cy="256" r="3.5" fill="#9E7B5C"/>
  </g>

  <!-- Bottom Badge: Respiración natural -->
  <g transform="translate(190, 310)">
    <rect x="-85" y="-14" width="170" height="28" rx="14" fill="#FAF4EB" stroke="#9E7B5C" stroke-width="1.5" filter="url(#shadow2)"/>
    <text x="0" y="4" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="700" fill="#9E7B5C" text-anchor="middle">🌬️ RESPIRACIÓN NATURAL • SIN METER PANZA</text>
  </g>
</svg>`
    },
    cadera: {
      key: 'cadera',
      stepNum: '03',
      badge: 'Paso 03 de 03',
      title: 'Contorno de Cadera',
      tag: 'Esquema Anatómico: Cadera & Glúteos',
      intro: 'Esta medida asegura el movimiento, la soltura y la caída impecable de nuestros pantalones sastreros, vestidos y faldas sin que tiren al sentarse.',
      rules: [
        {
          title: 'Pies juntos y paralelos',
          desc: 'Parate con los talones y pies completamente juntos. Si abrís las piernas, la cadera se ensancha artificialmente alterando el talle.'
        },
        {
          title: 'Vértice de mayor volumen glúteo',
          desc: 'Pasá la cinta por la parte más sobresaliente de los glúteos y cadera, normalmente entre 18 y 22 cm por debajo de la cintura.'
        },
        {
          title: 'Cinta nivelada y deslizante',
          desc: 'Comprobá que la cinta esté paralela al piso en todo su recorrido y que deslice hacia arriba y hacia abajo suavemente.'
        }
      ],
      garments: ['Pantalones Palazzo Holgados', 'Conjuntos de Sastrería', 'Vestidos de Lino', 'Shorts Sastreros'],
      tip: '<strong>Consejo de Confección:</strong> Medite siempre sobre ropa interior fina o sin pantalones gruesos tipo denim que sumen centímetros falsos.',
      legend: '<strong>Cinta métrica:</strong> Pasando por la cresta glútea con pies juntos. Cinta perfectamente horizontal.',
      calcFieldId: 'calc-cadera',
      calcButtonText: 'Ingresar Cadera en Calculadora',
      nextKey: 'consejo',
      nextLabel: 'Siguiente: ¿Dudas de Talle? →',
      svg: `<svg viewBox="0 0 380 430" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="mannequinGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FAF5EE"/>
      <stop offset="50%" stop-color="#F2E6D8"/>
      <stop offset="100%" stop-color="#E5D3C0"/>
    </linearGradient>
    <linearGradient id="tapeGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#E5B96B"/>
      <stop offset="50%" stop-color="#F7D892"/>
      <stop offset="100%" stop-color="#DEAC56"/>
    </linearGradient>
    <filter id="shadow3" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#4A3B32" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Background Atelier Grid Marks -->
  <g stroke="#EAE0D3" stroke-width="0.75" stroke-dasharray="3 3">
    <line x1="40" y1="0" x2="40" y2="430"/>
    <line x1="190" y1="0" x2="190" y2="430"/>
    <line x1="340" y1="0" x2="340" y2="430"/>
    <line x1="0" y1="210" x2="380" y2="210"/>
  </g>

  <!-- Modern Metallic Stand Pole Base -->
  <line x1="190" y1="365" x2="190" y2="430" stroke="#4A4E52" stroke-width="6" stroke-linecap="round"/>

  <!-- Mannequin Torso with Realistic Smooth Dress Form Contour (Reference 2) -->
  <path d="M 166,42 Q 190,38 214,42 Q 224,54 238,72 Q 258,95 264,124 Q 268,154 256,182 Q 242,210 236,234 Q 230,258 238,284 Q 248,314 250,344 Q 251,360 248,366 L 132,366 Q 129,360 130,344 Q 132,314 142,284 Q 150,258 144,234 Q 138,210 124,182 Q 112,154 116,124 Q 122,95 142,72 Q 156,54 166,42 Z" 
        fill="url(#mannequinGradClean)" stroke="#B0A69A" stroke-width="1.5" filter="url(#shadow3)"/>

  <!-- Chrome Cap Top -->
  <rect x="166" y="24" width="48" height="18" rx="4" fill="url(#chromeCap)" stroke="#3A3E42" stroke-width="1.2"/>
  <ellipse cx="190" cy="24" rx="24" ry="4" fill="#EAECEE" stroke="#505458" stroke-width="1"/>
  <ellipse cx="190" cy="42" rx="24" ry="4" fill="none" stroke="#7A8084" stroke-width="0.8"/>

  <!-- Center division & leg seams -->
  <line x1="190" y1="45" x2="190" y2="255" stroke="#D3BFAD" stroke-width="1" stroke-dasharray="3 3"/>
  <path d="M190 255 L182 375 M190 255 L198 375" stroke="#9E7B5C" stroke-width="1.8"/>

  <!-- Gluteus curve lines -->
  <path d="M140 185 C150 235 185 245 190 245" fill="none" stroke="#D3BFAD" stroke-width="1.2" stroke-dasharray="3 2"/>
  <path d="M240 185 C230 235 195 245 190 245" fill="none" stroke="#D3BFAD" stroke-width="1.2" stroke-dasharray="3 2"/>

  <!-- Back Tape Arc -->
  <path d="M102 210 C135 198 245 198 278 210" fill="none" stroke="#C29A4D" stroke-width="14" stroke-opacity="0.4" stroke-dasharray="6 4"/>

  <!-- Front Measuring Tape across widest hips (gluteus peak) -->
  <path d="M100 207 C140 220 240 220 280 207 L281 221 C240 234 140 234 99 221 Z" 
        fill="url(#tapeGrad3)" stroke="#8A6729" stroke-width="1.2" filter="url(#shadow3)"/>

  <!-- Tick Marks -->
  <g stroke="#543C16" stroke-width="1">
    <line x1="112" y1="210" x2="112" y2="216"/>
    <line x1="124" y1="212" x2="124" y2="220"/>
    <line x1="136" y1="214" x2="136" y2="219"/>
    <line x1="148" y1="216" x2="148" y2="222"/>
    <line x1="160" y1="217" x2="160" y2="221"/>
    <line x1="172" y1="218" x2="172" y2="223"/>
    <line x1="184" y1="219" x2="184" y2="224"/>
    <line x1="196" y1="219" x2="196" y2="224"/>
    <line x1="208" y1="218" x2="208" y2="223"/>
    <line x1="220" y1="217" x2="220" y2="221"/>
    <line x1="232" y1="216" x2="232" y2="222"/>
    <line x1="244" y1="214" x2="244" y2="219"/>
    <line x1="256" y1="212" x2="256" y2="220"/>
    <line x1="268" y1="210" x2="268" y2="216"/>
  </g>
  <text x="148" y="221" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" font-weight="700" fill="#422E10" text-anchor="middle">94</text>
  <text x="190" y="223" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="800" fill="#422E10" text-anchor="middle">98</text>
  <text x="232" y="221" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" font-weight="700" fill="#422E10" text-anchor="middle">102</text>

  <!-- Caliper Guideline with Arrows -->
  <line x1="55" y1="214" x2="94" y2="214" stroke="#9E7B5C" stroke-width="1.8"/>
  <polyline points="91,210 96,214 91,218" fill="none" stroke="#9E7B5C" stroke-width="1.8"/>
  <line x1="286" y1="214" x2="325" y2="214" stroke="#9E7B5C" stroke-width="1.8"/>
  <polyline points="289,210 284,214 289,218" fill="none" stroke="#9E7B5C" stroke-width="1.8"/>

  <!-- Left Callout: Mayor Prominencia Glútea -->
  <g transform="translate(10, 130)">
    <rect width="114" height="34" rx="4" fill="#FFFFFF" stroke="#9E7B5C" stroke-width="1.2" filter="url(#shadow3)"/>
    <text x="57" y="15" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="700" fill="#3D3028" text-anchor="middle">PICO DE GLÚTEOS</text>
    <text x="57" y="26" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" fill="#7C685A" text-anchor="middle">Contorno más saliente</text>
    <path d="M114 17 L126 17 L105 207" fill="none" stroke="#9E7B5C" stroke-width="1.2" stroke-dasharray="3 2"/>
    <circle cx="105" cy="207" r="3.5" fill="#9E7B5C"/>
  </g>

  <!-- Right Callout: Cinta Paralela al Suelo -->
  <g transform="translate(255, 130)">
    <rect width="115" height="34" rx="4" fill="#FFFFFF" stroke="#9E7B5C" stroke-width="1.2" filter="url(#shadow3)"/>
    <text x="57" y="15" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="700" fill="#3D3028" text-anchor="middle">PARALELA AL PISO</text>
    <text x="57" y="26" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" fill="#7C685A" text-anchor="middle">En 360° sin inclinarse</text>
    <path d="M0 17 L-15 17 L-30 207" fill="none" stroke="#9E7B5C" stroke-width="1.2" stroke-dasharray="3 2"/>
    <circle cx="275" cy="207" r="3.5" fill="#9E7B5C"/>
  </g>

  <!-- Bottom Indicator: Pies Juntos -->
  <g transform="translate(190, 395)">
    <ellipse cx="-8" cy="0" rx="5" ry="9" fill="#9E7B5C"/>
    <ellipse cx="8" cy="0" rx="5" ry="9" fill="#9E7B5C"/>
    <text x="0" y="20" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" fill="#3D3028" text-anchor="middle">[ PIES JUNTOS Y ALINEADOS ]</text>
  </g>
</svg>`
    },
    consejo: {
      key: 'consejo',
      stepNum: '★',
      badge: 'Consejo Atelier',
      title: '¿Dudas entre 2 Talles?',
      tag: 'Comparativa de Siluetas & Flojedad',
      intro: 'Nuestra moldería está pensada para mujeres reales que buscan elegancia sin rigidez. Descubrí cómo elegir entre dos talles según tu estilo de vestir.',
      rules: [
        {
          title: 'Talle Menor: Silueta más definida',
          desc: 'Elegí el talle menor si preferís que la prenda acompañe más la figura en hombros, escote o pretina sin perder comodidad.'
        },
        {
          title: 'Talle Mayor: Caída bohemia & oversized',
          desc: 'Elegí el talle mayor si amás el estilo desenfadado europeo, con caída amplia, mangas caídas y movimiento generoso de telas.'
        },
        {
          title: 'Prendas con cintura elástica',
          desc: 'En modelos como el Palazzo Lino con cintura trasera elastizada podés inclinarte por el talle inferior sin riesgo de que apriete.'
        }
      ],
      garments: ['Colección Sastrería Relajada', 'Prendas Oversized', 'Prendas con Spandex o Elástico', 'Prendas de Lino Puro'],
      tip: '<strong>Asesoramiento Personalizado:</strong> Si tenés proporciones mixtas (ej. talle S de busto y talle M de cadera), escribinos por WhatsApp y te asesoramos para cada prenda.',
      legend: '<strong>Flojedad de confección:</strong> Todas nuestras prendas ya contemplan entre 4 y 8 cm de holgura de diseño.',
      calcFieldId: null,
      calcButtonText: 'Abrir Calculadora Interactiva',
      nextKey: 'busto',
      nextLabel: 'Volver a Paso 01: Busto →',
      svg: `<svg viewBox="0 0 380 430" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fitA" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDFBF7"/>
      <stop offset="100%" stop-color="#EFE5D8"/>
    </linearGradient>
    <linearGradient id="fitB" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FAF1E6"/>
      <stop offset="100%" stop-color="#E4CDB7"/>
    </linearGradient>
    <filter id="shadow4" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#4A3B32" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Central Division Line -->
  <line x1="190" y1="20" x2="190" y2="410" stroke="#DFD5C8" stroke-width="1.5" stroke-dasharray="4 4"/>

  <!-- Left Side: Talle Menor (Fit Entallado) -->
  <g transform="translate(95, 0)">
    <rect x="-70" y="25" width="140" height="28" rx="14" fill="#FFFFFF" stroke="#9E7B5C" stroke-width="1.2" filter="url(#shadow4)"/>
    <text x="0" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="700" fill="#9E7B5C" text-anchor="middle">TALLE MENOR</text>
    <text x="0" y="47" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" fill="#6B5647" text-anchor="middle">Calce Más Al Cuerpo</text>

    <!-- Silhouette A -->
    <path d="M-10 65 C-8 72 -8 80 -8 88 C-25 90 -38 102 -46 120 C-50 132 -48 150 -44 170 C-40 190 -32 205 -32 215 C-32 225 -42 245 -48 268 C-54 298 -50 330 -42 360 L-8 360 L-10 240 L-10 88 Z" 
          fill="url(#fitA)" stroke="#9E7B5C" stroke-width="1.8" filter="url(#shadow4)"/>
    <path d="M10 65 C8 72 8 80 8 88 C25 90 38 102 46 120 C50 132 48 150 44 170 C40 190 32 205 32 215 C32 225 42 245 48 268 C54 298 50 330 42 360 L8 360 L10 240 L10 88 Z" 
          fill="url(#fitA)" stroke="#9E7B5C" stroke-width="1.8" filter="url(#shadow4)"/>

    <g transform="translate(0, 385)">
      <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="700" fill="#3D3028" text-anchor="middle">Silueta Estructurada</text>
      <text x="0" y="11" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" fill="#7C685A" text-anchor="middle">+2 a +4 cm de holgura</text>
      <text x="0" y="21" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" fill="#9E7B5C" text-anchor="middle">Ideal para estilo clásico</text>
    </g>
  </g>

  <!-- Right Side: Talle Mayor (Fit Oversized Atelier) -->
  <g transform="translate(285, 0)">
    <rect x="-70" y="25" width="140" height="28" rx="14" fill="#9E7B5C" filter="url(#shadow4)"/>
    <text x="0" y="38" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="700" fill="#FFFFFF" text-anchor="middle">TALLE MAYOR ★</text>
    <text x="0" y="47" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" fill="#F8EEDB" text-anchor="middle">Caída Bohemia Atelier</text>

    <!-- Silhouette B -->
    <path d="M-10 65 C-8 72 -8 80 -8 88 C-32 90 -50 102 -60 125 C-65 140 -60 162 -55 185 C-50 205 -44 218 -44 228 C-44 238 -56 258 -65 285 C-74 315 -70 345 -62 360 L-10 360 L-12 235 L-10 88 Z" 
          fill="url(#fitB)" stroke="#8A6729" stroke-width="2" filter="url(#shadow4)"/>
    <path d="M10 65 C8 72 8 80 8 88 C32 90 50 102 60 125 C65 140 60 162 55 185 C50 205 44 218 44 228 C44 238 56 258 65 285 C74 315 70 345 62 360 L10 360 L12 235 L10 88 Z" 
          fill="url(#fitB)" stroke="#8A6729" stroke-width="2" filter="url(#shadow4)"/>

    <path d="M-30 145 C-25 185 -35 225 -25 270 C-18 310 -30 350 -20 360" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-opacity="0.7"/>
    <path d="M30 145 C25 185 35 225 25 270 C18 310 30 350 20 360" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-opacity="0.7"/>

    <g transform="translate(0, 385)">
      <text x="0" y="0" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="700" fill="#3D3028" text-anchor="middle">Caída Libre & Fluida</text>
      <text x="0" y="11" font-family="'Plus Jakarta Sans', sans-serif" font-size="6.5" fill="#7C685A" text-anchor="middle">+6 a +10 cm de soltura</text>
      <text x="0" y="21" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="700" fill="#8A6729" text-anchor="middle">El calce insignia de Evangelina</text>
    </g>
  </g>
</svg>`
    }
  };

  function renderMeasureSheetStep(stepKey) {
    const data = MEASURE_SHEET_DATA[stepKey] || MEASURE_SHEET_DATA.busto;
    
    // Update active tab buttons
    document.querySelectorAll('.sheet-nav-tab').forEach(tab => tab.classList.remove('active'));
    const activeTab = document.getElementById(`sheet-tab-btn-${data.key}`);
    if (activeTab) activeTab.classList.add('active');

    // Update drawing tag
    const tagEl = document.getElementById('sheet-drawing-tag');
    if (tagEl) tagEl.textContent = data.tag;

    // Update drawing viewport
    const viewportEl = document.getElementById('sheet-drawing-viewport');
    if (viewportEl) {
      viewportEl.innerHTML = data.svg;
    }

    // Update drawing legend
    const legendEl = document.getElementById('sheet-drawing-legend');
    if (legendEl) {
      legendEl.innerHTML = `
        <span class="drawing-legend-icon">📏</span>
        <span>${data.legend}</span>
      `;
    }

    // Update right column (sheet-info-col)
    const infoCol = document.getElementById('sheet-info-col');
    if (infoCol) {
      infoCol.innerHTML = `
        <div class="sheet-step-badge">${data.badge}</div>
        <h4 class="sheet-step-title">${data.title}</h4>
        <p class="sheet-step-intro">${data.intro}</p>

        <div class="sheet-rules-box">
          <div class="sheet-rules-title">
            <span>✨</span> 3 Reglas de Oro del Atelier
          </div>
          ${data.rules.map((rule, idx) => `
            <div class="sheet-rule-item">
              <span class="rule-check">${idx + 1}</span>
              <div>
                <strong>${rule.title}:</strong> ${rule.desc}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="sheet-garments-box">
          <div class="sheet-garments-label">Prendas Clave de Referencia:</div>
          <div class="sheet-garment-tags">
            ${data.garments.map(g => `<span class="sheet-garment-tag">${g}</span>`).join('')}
          </div>
        </div>

        <div class="sheet-atelier-tip">
          ${data.tip}
        </div>

        <div class="sheet-actions-row">
          <button type="button" class="btn-sheet-calc" onclick="applyMeasureToCalculator('${data.key}')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="4" y="2" width="16" height="20" rx="2"></rect>
              <line x1="8" y1="6" x2="16" y2="6"></line>
              <line x1="16" y1="14" x2="16" y2="18"></line>
              <path d="M16 10h.01"></path>
              <path d="M12 10h.01"></path>
              <path d="M8 10h.01"></path>
            </svg>
            <span>${data.calcButtonText}</span>
          </button>
          <button type="button" class="btn-sheet-step" onclick="switchMeasureSheetTab('${data.nextKey}')">
            <span>${data.nextLabel}</span>
          </button>
        </div>
      `;
    }
  }

  function openMeasureSheet(stepKey = 'busto') {
    const overlay = document.getElementById('measure-sheet-overlay');
    if (!overlay) return;
    renderMeasureSheetStep(stepKey);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function switchMeasureSheetTab(stepKey) {
    renderMeasureSheetStep(stepKey);
  }

  function closeMeasureSheet() {
    const overlay = document.getElementById('measure-sheet-overlay');
    if (overlay) {
      overlay.classList.remove('open');
    }
    document.body.style.overflow = '';
  }

  function applyMeasureToCalculator(stepKey) {
    closeMeasureSheet();
    switchMeasureTab('calc');
    
    const section = document.getElementById('como-medirse');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    const fieldMap = {
      busto: 'calc-busto',
      cintura: 'calc-cintura',
      cadera: 'calc-cadera'
    };

    const targetId = fieldMap[stepKey];
    if (targetId) {
      setTimeout(() => {
        const input = document.getElementById(targetId);
        if (input) {
          input.focus();
          input.classList.remove('calc-input-highlight');
          void input.offsetWidth;
          input.classList.add('calc-input-highlight');
          setTimeout(() => input.classList.remove('calc-input-highlight'), 3000);
        }
      }, 350);
    }
  }

  // Keyboard shortcut: ESC to close Measure Sheet
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const sheetOverlay = document.getElementById('measure-sheet-overlay');
      if (sheetOverlay && sheetOverlay.classList.contains('open')) {
        closeMeasureSheet();
      }
    }
  });

  // Global window bindings
  window.openMeasureSheet = openMeasureSheet;
  window.switchMeasureSheetTab = switchMeasureSheetTab;
  window.closeMeasureSheet = closeMeasureSheet;
  window.applyMeasureToCalculator = applyMeasureToCalculator;
  window.switchMeasureTab = switchMeasureTab;
  window.switchTableCategory = switchTableCategory;
  // Mobile step navigation for measurement carousel
  function scrollToMeasureStep(index) {
    const grid = document.getElementById('measure-steps-grid');
    if (!grid) return;
    const cards = grid.querySelectorAll('.measure-step-card');
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    const pills = document.querySelectorAll('.mobile-step-pill');
    pills.forEach((p, i) => p.classList.toggle('active', i === index));
  }

  function initMeasureCarousel() {
    const grid = document.getElementById('measure-steps-grid');
    if (!grid) return;
    let isScrolling = null;
    grid.addEventListener('scroll', () => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(() => {
        const cards = grid.querySelectorAll('.measure-step-card');
        const pills = document.querySelectorAll('.mobile-step-pill');
        if (!cards.length || !pills.length) return;
        const gridCenter = grid.getBoundingClientRect().left + grid.offsetWidth / 2;
        let closestIdx = 0;
        let minDiff = Infinity;
        cards.forEach((card, idx) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.left + rect.width / 2;
          const diff = Math.abs(gridCenter - cardCenter);
          if (diff < minDiff) {
            minDiff = diff;
            closestIdx = idx;
          }
        });
        pills.forEach((p, i) => p.classList.toggle('active', i === closestIdx));
      }, 50);
    }, { passive: true });
  }

  initMeasureCarousel();
  window.scrollToMeasureStep = scrollToMeasureStep;

  // Initialize first table tab
  renderSizeTable('pantalones');

  // Keyboard shortcut: Ctrl + Shift + A to open Admin Panel
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      openAdminModal();
    }
  });
});
