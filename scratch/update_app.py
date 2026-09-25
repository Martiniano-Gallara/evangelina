with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update submitCartCheckout to sync with Backoffice store
old_order_save = """  ORDERS.unshift(newOrder);
  saveOrders();
  saveProducts();"""

new_order_save = """  ORDERS.unshift(newOrder);
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
  }"""

if old_order_save in content:
    content = content.replace(old_order_save, new_order_save)
    print("Updated submitCartCheckout to sync with BackofficeStoreInstance!")
else:
    print("Could not find exact old_order_save in app.js")

# 2. Replace lines 1342 to 2140 (old admin code)
start_marker = "// ==========================================\n// 8. COMPLETE ADMIN SUITE CONTROLLER"
end_marker = "  // Newsletter subscription"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    bridge_code = """// ==========================================
// 8. COMPLETE ADMIN SUITE (DELEGATED TO BACKOFFICE.JS)
// ==========================================
// The comprehensive backoffice suite is managed by window.Backoffice (backoffice.js)
// Real-time synchronization between Backoffice, localStorage, GitHub API, and Public Storefront.

"""
    content = content[:start_idx] + bridge_code + content[end_idx:]
    print("Successfully replaced legacy admin suite in app.js with clean bridge!")
else:
    print(f"Indices: start={start_idx}, end={end_idx}")

# Also remove old admin event listeners that were at lines 2160-2178
old_listeners = """  // Apply Admin Config on initial load
  applyAdminConfig();

  // Admin Modal trigger
  if (adminTrigger) adminTrigger.addEventListener('click', openAdminModal);
  if (adminModalClose) adminModalClose.addEventListener('click', closeAdminModal);
  if (adminModalOverlay) {
    adminModalOverlay.addEventListener('click', (e) => {
      if (e.target === adminModalOverlay) closeAdminModal();
    });
  }

  // Live Admin inputs preview
  const liveAdminText = document.getElementById('admin-banner-text');
  const liveAdminBg = document.getElementById('admin-banner-bg');
  const liveAdminColor = document.getElementById('admin-banner-color');
  if (liveAdminText) liveAdminText.addEventListener('input', updateAdminBannerPreview);
  if (liveAdminBg) liveAdminBg.addEventListener('input', updateAdminBannerPreview);
  if (liveAdminColor) liveAdminColor.addEventListener('input', updateAdminBannerPreview);"""

if old_listeners in content:
    content = content.replace(old_listeners, "  // Admin Modal trigger is managed in backoffice.js")
    print("Removed duplicate admin modal listeners from app.js!")

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("app.js updated successfully!")
