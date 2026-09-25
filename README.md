# Evangelina Atelier 🌿

> **Moda Femenina Bohemia & Minimalista**  
> Tienda online y panel de administración integral con diseño boutique editorial, siluetas fluidas y sincronización directa con GitHub.

---

## 🌟 Características Principales

### 🛍️ Tienda Online (`index.html`)
- **Diseño Editorial & Responsivo**: Tipografía cuidada (*Cormorant Garamond* y *Plus Jakarta Sans*), microanimaciones fluidas y paleta neutra cálida.
- **Catálogo Interactivo**: Filtrado por categorías (Prendas, Conjuntos, Accesorios, etc.), búsqueda en tiempo real y ordenamiento por precio o novedad.
- **Vista Rápida & Detalle de Producto**: Modales interactivos, selector de talles, colores y cálculo de disponibilidad.
- **Lookbook & Conjuntos**: Sección destacada para looks completos con agregado rápido al carrito.
- **Carrito de Compras & Checkout Directo**: Carrito persistente en el navegador con integración de pedido formateado a **WhatsApp** y resumen detallado.

### ⚙️ Backoffice & Panel de Gestión (`admin.html`)
- **Gestión Integral de Productos**: Alta, baja, edición de precios, stock, talles, colores y fotografías.
- **Control de Pedidos**: Visualización de órdenes entrantes, cambio de estado (Pendiente, Pagado, Enviado, Entregado) y métricas.
- **Agenda & Atelier**: Administración de citas presenciales en el showroom / atelier.
- **Sincronización Git en Tiempo Real (`github-sync.js`)**:
  - Conexión vía GitHub REST API usando Personal Access Token (PAT).
  - Almacenamiento seguro en sesión (`sessionStorage`).
  - Capacidad de actualizar catálogo JSON y subir imágenes directamente al repositorio sin necesidad de servidor backend.

---

## 📁 Estructura del Repositorio

```text
evangelina/
├── index.html           # Tienda online pública
├── admin.html           # Panel de administración / Backoffice
├── styles.css           # Sistema de diseño y hojas de estilo completas
├── app.js               # Lógica del cliente, catálogo, filtros y carrito
├── backoffice.js        # Lógica del panel administrativo
├── github-sync.js       # Capa de sincronización con la API de GitHub
├── assets/              # Fotografías de productos, logos e isotipos
├── data/                # Bases de datos JSON
│   ├── products.json
│   ├── orders.json
│   ├── custom_orders.json
│   ├── content.json
│   ├── atelier_config.json
│   ├── analytics.json
│   └── agenda.json
└── scratch/             # Herramientas y scripts auxiliares de desarrollo
```

---

## 🚀 Despliegue en GitHub Pages

Este proyecto es 100% estático (HTML5, Vanilla CSS3 y JavaScript moderno), lo que permite desplegarlo inmediatamente en **GitHub Pages**:

1. Ve a **Settings** en el repositorio en GitHub.
2. En el menú izquierdo, selecciona **Pages**.
3. En **Build and deployment > Source**, selecciona **Deploy from a branch**.
4. Selecciona la rama `main` y la carpeta `/ (root)`.
5. Haz clic en **Save**. ¡Tu tienda estará online en pocos minutos!

---

## 💻 Ejecución Local

Para previsualizar localmente, puedes usar cualquier servidor web estático:

```bash
# Con Python
python -m http.server 8000

# O con extensiones como Live Server de VS Code
```

Abre tu navegador en `http://localhost:8000` para la tienda o `http://localhost:8000/admin.html` para el backoffice.

---

## 🔒 Seguridad & Privacidad

- Las credenciales y tokens de acceso personal (PAT) utilizados para la sincronización de datos con GitHub **nunca** se almacenan en código fuente ni se suben al repositorio.
- Se mantienen exclusivamente en la memoria de sesión del navegador (`sessionStorage`) y se purgan al cerrar la pestaña.
