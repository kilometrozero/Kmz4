<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>KMZ - Cero reglas. Full estilo.</title>

  <!-- Lucide icons -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lucide/0.263.1/umd/lucide.min.js" defer></script>

  <!-- Font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap" rel="stylesheet">

  <style>
    /* ---------- Styles (copiados y limpiados) ---------- */
    * { margin:0; padding:0; box-sizing:border-box; }
    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg,#0a0a0a 0%,#1a1a1a 100%);
      color:#fff;
      overflow-x:hidden;
    }
    .hidden { display:none !important; }

    .navbar {
      position: fixed; top:0; width:100%;
      background: rgba(10,10,10,0.95);
      backdrop-filter: blur(20px); border-bottom:1px solid rgba(255,255,255,0.1);
      z-index:1000; padding:1rem 5%;
    }
    .navbar-content { display:flex; justify-content:space-between; align-items:center; max-width:1400px; margin:0 auto; }
    .logo-section { display:flex; align-items:center; gap:1rem; }
    .logo-circle { width:50px; height:50px; border-radius:50%; background:linear-gradient(135deg,#ff0055,#ff6b9d); display:flex; align-items:center; justify-content:center; font-weight:900; font-size:1.2rem; }
    .logo-text { font-size:1.5rem; font-weight:700; background:linear-gradient(135deg,#ff0055,#ff6b9d); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }

    .nav-links { display:flex; gap:2rem; align-items:center; }
    .nav-links a, .nav-links button { color:white; text-decoration:none; font-weight:500; background:none; border:none; cursor:pointer; font-size:1rem; font-family:'Poppins',sans-serif; }
    .nav-links a:hover, .nav-links button:hover { color:#ff0055; }

    .cart-btn { position:relative; background:#ff0055; padding:0.75rem; border-radius:50%; display:flex; align-items:center; justify-content:center; transition:all .3s; }
    .cart-btn:hover { transform:scale(1.06); box-shadow:0 10px 30px rgba(255,0,85,0.5); }
    .cart-badge { position:absolute; top:-8px; right:-8px; background:white; color:#ff0055; border-radius:50%; width:24px; height:24px; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; animation:bounce 1s infinite; }
    @keyframes bounce { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-5px);} }

    .hero { min-height:100vh; display:flex; align-items:center; justify-content:center; text-align:center; padding:120px 20px 60px; position:relative; overflow:hidden; }
    .hero::before { content:''; position:absolute; inset:0; background: radial-gradient(circle at 20% 50%, rgba(255,0,85,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,107,157,0.1) 0%, transparent 50%); animation:pulse 8s ease-in-out infinite; }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }

    .hero h1 { font-size:5rem; font-weight:900; line-height:1.2; margin-bottom:1rem; background:linear-gradient(135deg,#fff 0%,#ff0055 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
    .hero p { font-size:1.5rem; color:#aaa; margin-bottom:2rem; }
    .btn-primary { background:linear-gradient(135deg,#ff0055,#ff6b9d); color:white; padding:1rem 2.5rem; border-radius:50px; text-decoration:none; font-weight:600; display:inline-block; transition:all .3s; border:none; cursor:pointer; font-size:1rem; font-family:'Poppins',sans-serif; }
    .btn-primary:hover { transform:translateY(-3px); box-shadow:0 15px 40px rgba(255,0,85,0.5); }

    .section { padding:100px 5%; max-width:1400px; margin:0 auto; }
    .section-title { text-align:center; font-size:3rem; font-weight:700; margin-bottom:60px; background:linear-gradient(135deg,#ff0055,#ff6b9d); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }

    .products-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(300px,1fr)); gap:2rem; }
    .product-card { background:rgba(26,26,26,0.8); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.1); border-radius:20px; overflow:hidden; transition:all .4s; cursor:pointer; }
    .product-card:hover { transform:translateY(-10px); box-shadow:0 20px 40px rgba(255,0,85,0.3); border-color:#ff0055; }
    .product-image { width:100%; height:320px; object-fit:cover; transition:transform .4s; }
    .product-card:hover .product-image { transform:scale(1.1); }
    .product-info { padding:1.5rem; }
    .product-badge { display:inline-block; background:#ff0055; color:white; padding:0.3rem 1rem; border-radius:20px; font-size:.85rem; font-weight:600; margin-bottom:1rem; }
    .product-name { font-size:1.5rem; font-weight:600; margin-bottom:.5rem; }
    .product-description { color:#aaa; margin-bottom:1rem; line-height:1.6; }
    .product-price { font-size:2rem; font-weight:700; color:#ff0055; margin:1rem 0; }
    .product-stock { color:#aaa; font-size:.9rem; margin-bottom:1rem; }
    .rating { display:flex; align-items:center; gap:.5rem; margin-bottom:1rem; }
    .star { color:#ffd700; } .star.empty { color:#333; }

    .cart-item { background:rgba(26,26,26,0.8); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.1); border-radius:15px; padding:1.5rem; margin-bottom:1rem; display:flex; align-items:center; gap:1.5rem; }
    .cart-item-image { width:100px; height:100px; object-fit:cover; border-radius:10px; }
    .cart-item-info { flex:1; }
    .quantity-controls { display:flex; align-items:center; gap:1rem; }
    .quantity-btn { width:40px; height:40px; border-radius:50%; background:#333; border:none; color:white; font-size:1.2rem; cursor:pointer; transition:all .3s; }
    .quantity-btn:hover { background:#ff0055; transform:scale(1.06); }
    .remove-btn { background:#ff4444; color:white; border:none; padding:.5rem 1rem; border-radius:10px; cursor:pointer; transition:all .3s; font-family:'Poppins',sans-serif; font-weight:600; }
    .remove-btn:hover { background:#cc0000; }

    .form-group { margin-bottom:1.5rem; }
    .form-group label { display:block; margin-bottom:.5rem; font-weight:600; }
    .form-group input, .form-group textarea, .form-group select {
      width:100%; padding:1rem; background:rgba(26,26,26,0.8); border:1px solid rgba(255,255,255,0.1); border-radius:10px; color:white; font-family:'Poppins',sans-serif; font-size:1rem;
    }
    .form-group input:focus, .form-group textarea:focus, .form-group select:focus { outline:none; border-color:#ff0055; }

    .modal { position:fixed; inset:0; background:rgba(0,0,0,0.9); display:flex; align-items:center; justify-content:center; z-index:2000; padding:2rem; animation:fadeIn .3s; }
    @keyframes fadeIn { from{opacity:0} to{opacity:1} }
    .modal-content { background:rgba(26,26,26,0.95); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.1); border-radius:20px; max-width:900px; width:100%; max-height:90vh; overflow-y:auto; animation:slideUp .4s; }
    @keyframes slideUp { from{opacity:0; transform:translateY(50px);} to{opacity:1; transform:translateY(0);} }
    .modal-header { display:flex; justify-content:space-between; align-items:center; padding:2rem; border-bottom:1px solid rgba(255,255,255,0.1); }
    .close-btn { background:none; border:none; color:white; font-size:2rem; cursor:pointer; transition:color .3s; }
    .close-btn:hover { color:#ff0055; }
    .modal-body { padding:2rem; }

    .notification { position:fixed; top:2rem; right:2rem; background:#ff0055; color:white; padding:1rem 2rem; border-radius:10px; box-shadow:0 10px 30px rgba(0,0,0,0.5); z-index:3000; animation:slideInRight .4s; }
    @keyframes slideInRight { from{opacity:0; transform:translateX(100px);} to{opacity:1; transform:translateX(0);} }
    .notification.success { background:#22c55e; } .notification.error { background:#ef4444; } .notification.info { background:#3b82f6; }

    .admin-panel { min-height:100vh; padding:100px 5% 60px; }
    .admin-tabs { display:flex; gap:1rem; margin-bottom:2rem; flex-wrap:wrap; }
    .tab-btn { padding:1rem 2rem; background:rgba(26,26,26,0.8); border:1px solid rgba(255,255,255,0.1); border-radius:10px; color:#aaa; cursor:pointer; transition:all .3s; font-family:'Poppins',sans-serif; font-weight:600; font-size:1rem; }
    .tab-btn.active { background:#ff0055; color:white; border-color:#ff0055; }

    .stats-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:1.5rem; margin-bottom:3rem; }
    .stat-card { background:rgba(26,26,26,0.8); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.1); border-radius:15px; padding:2rem; text-align:center; transition:all .3s; }
    .stat-card:hover { transform:translateY(-5px); border-color:#ff0055; }
    .stat-value { font-size:2.5rem; font-weight:700; color:#ff0055; margin-bottom:.5rem; } .stat-label { color:#aaa; font-size:.9rem; }

    .glass-card { background:rgba(26,26,26,0.8); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.1); border-radius:20px; padding:2rem; }

    .btn-secondary { background:transparent; border:2px solid #ff0055; color:#ff0055; padding:.75rem 1.5rem; border-radius:10px; cursor:pointer; transition:all .3s; font-family:'Poppins',sans-serif; font-weight:600; font-size:1rem; }
    .btn-secondary:hover { background:#ff0055; color:white; }

    .grid-2 { display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:1.5rem; }
    .flex-between { display:flex; justify-content:space-between; align-items:center; }
    .flex-center { display:flex; align-items:center; justify-content:center; }
    .text-center { text-align:center; } .mb-2 { margin-bottom:1rem; } .mt-4 { margin-top:2rem; }

    @media (max-width:768px) {
      .nav-links { display:none; }
      .hero h1 { font-size:3rem; }
      .hero p { font-size:1.2rem; }
      .products-grid { grid-template-columns:1fr; }
      .section-title { font-size:2rem; }
      .cart-item { flex-direction:column; text-align:center; }
    }
  </style>
</head>

<body>
  <!-- Navbar -->
  <nav class="navbar">
    <div class="navbar-content">
      <div class="logo-section">
        <div class="logo-circle">KMZ</div>
        <div class="logo-text">KilometroZero</div>
      </div>
      <div class="nav-links">
        <a href="#inicio">Inicio</a>
        <a href="#tienda">Tienda</a>
        <a href="#sobre">Sobre KMZ</a>
        <button onclick="showAdmin()" style="color:#ff0055;">Dashboard</button>
        <button class="cart-btn" onclick="showCart()">
          <i data-lucide="shopping-cart"></i>
          <span id="cartBadge" class="cart-badge hidden">0</span>
        </button>
      </div>
    </div>
  </nav>

  <!-- Main Site -->
  <div id="mainSite">
    <!-- Hero -->
    <section id="inicio" class="hero">
      <div class="hero-content">
        <h1>Cero reglas.<br>Full estilo.</h1>
        <p>KMZ redefine la moda urbana con actitud y presencia.</p>
        <a href="#tienda" class="btn-primary">Ver colección</a>
      </div>
    </section>

    <!-- Products -->
    <section id="tienda" class="section">
      <h2 class="section-title">Tienda</h2>
      <div class="products-grid" id="productsContainer"></div>
    </section>

    <!-- About -->
    <section id="sobre" class="section" style="background: rgba(26,26,26,0.5);">
      <h2 class="section-title">Sobre KMZ</h2>
      <div class="glass-card text-center" style="max-width:800px; margin:0 auto;">
        <p style="font-size:1.2rem; line-height:1.8; color:#aaa; margin-bottom:3rem;">
          KilometroZero es más que una marca: es una forma de expresar tu estilo sin límites. Nacimos para romper las reglas y crear una nueva cultura urbana donde la autenticidad es lo único que importa.
        </p>
        <div class="grid-2">
          <div class="glass-card text-center">
            <div style="font-size:3rem; margin-bottom:1rem;">🔥</div>
            <h3 class="mb-2">Diseño Único</h3>
            <p style="color:#aaa;">Piezas exclusivas</p>
          </div>
          <div class="glass-card text-center">
            <div style="font-size:3rem; margin-bottom:1rem;">⚡</div>
            <h3 class="mb-2">Calidad Premium</h3>
            <p style="color:#aaa;">Materiales seleccionados</p>
          </div>
          <div class="glass-card text-center">
            <div style="font-size:3rem; margin-bottom:1rem;">💎</div>
            <h3 class="mb-2">Estilo Urbano</h3>
            <p style="color:#aaa;">Esencia de la calle</p>
          </div>
        </div>
      </div>
    </section>

    <footer style="text-align:center; padding:2rem; color:#666;">
      <p>© 2025 KMZ — Todos los derechos reservados | @kilometrozerokmz</p>
    </footer>
  </div>

  <!-- Cart Modal -->
  <div id="cartModal" class="modal hidden">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Tu Carrito</h2>
        <button class="close-btn" onclick="closeCart()">&times;</button>
      </div>
      <div class="modal-body">
        <div id="cartItems"></div>
        <div id="cartTotal" class="glass-card mt-4">
          <div class="flex-between" style="font-size:1.5rem; font-weight:700; margin-bottom:1rem;">
            <span>Total:</span>
            <span style="color:#ff0055;" id="totalAmount">$0</span>
          </div>
          <button class="btn-primary" style="width:100%; padding:1rem;" onclick="proceedToCheckout()">
            Proceder al pago
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Checkout Modal -->
  <div id="checkoutModal" class="modal hidden">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Finalizar Compra</h2>
        <button class="close-btn" onclick="closeCheckout()">&times;</button>
      </div>
      <div class="modal-body">
        <form id="checkoutForm" onsubmit="submitOrder(event)">
          <div class="form-group">
            <label>Nombre completo *</label>
            <input type="text" id="customerName" required>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label>Email *</label>
              <input type="email" id="customerEmail" required>
            </div>
            <div class="form-group">
              <label>Teléfono *</label>
              <input type="tel" id="customerPhone" required>
            </div>
          </div>

          <div class="form-group">
            <label>Dirección *</label>
            <input type="text" id="customerAddress" required>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label>Ciudad *</label>
              <input type="text" id="customerCity" required>
            </div>
            <div class="form-group">
              <label>Código Postal</label>
              <input type="text" id="customerPostal">
            </div>
          </div>

          <div class="form-group">
            <label>Notas adicionales</label>
            <textarea id="customerNotes" rows="3"></textarea>
          </div>

          <div class="grid-2">
            <button type="button" class="btn-secondary" onclick="closeCheckout()">Volver</button>
            <button type="submit" class="btn-primary">Confirmar pedido</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Product Detail Modal -->
  <div id="productModal" class="modal hidden">
    <div class="modal-content">
      <div class="modal-header">
        <h2 id="modalProductName"></h2>
        <button class="close-btn" onclick="closeProductModal()">&times;</button>
      </div>
      <div class="modal-body" id="productModalBody"></div>
    </div>
  </div>

  <!-- Notification -->
  <div id="notification" class="notification hidden"></div>

  <!-- Admin Panel (login) -->
  <div id="adminPanel" class="admin-panel hidden">
    <div class="glass-card" style="max-width:500px; margin:0 auto;">
      <h2 class="text-center mb-2">🔐 Panel de Administración</h2>
      <p class="text-center" style="color:#aaa; margin-bottom:2rem;">Ingresa tu contraseña</p>
      <div class="form-group">
        <input type="password" id="adminPassword" placeholder="Contraseña">
      </div>
      <button class="btn-primary" style="width:100%;" onclick="loginAdmin()">Iniciar sesión</button>
      <button class="btn-secondary" style="width:100%; margin-top:1rem;" onclick="closeAdmin()">Volver al sitio</button>
    </div>
  </div>

  <!-- Admin Dashboard -->
  <div id="adminDashboard" class="admin-panel hidden">
    <div class="flex-between mb-2">
      <div>
        <h2 style="font-size:2.5rem; font-weight:700;">Dashboard KMZ</h2>
        <p style="color:#aaa;">Gestiona tu tienda</p>
      </div>
      <div>
        <button class="btn-secondary" onclick="closeAdminDashboard()">Volver al sitio</button>
        <button class="btn-primary" onclick="logoutAdmin()" style="margin-left:1rem;">Cerrar sesión</button>
      </div>
    </div>

    <div class="admin-tabs">
      <button id="tabStatsBtn" class="tab-btn active" onclick="switchAdminTab(event,'stats')">📊 Estadísticas</button>
      <button id="tabProductsBtn" class="tab-btn" onclick="switchAdminTab(event,'products')">🛍️ Productos</button>
      <button id="tabAddBtn" class="tab-btn" onclick="switchAdminTab(event,'add')">➕ Agregar Producto</button>
    </div>

    <div id="adminStatsTab" class="admin-tab-content">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value" id="totalProducts">0</div>
          <div class="stat-label">Total Productos</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" id="totalViews">0</div>
          <div class="stat-label">Vistas Totales</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" id="totalSales">0</div>
          <div class="stat-label">Ventas Totales</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" id="totalRevenue">$0</div>
          <div class="stat-label">Ingresos</div>
        </div>
      </div>
      <div class="glass-card">
        <h3 style="font-size:1.5rem; margin-bottom:1.5rem;">Productos con mejor rendimiento</h3>
        <div id="topProducts"></div>
      </div>
    </div>

    <div id="adminProductsTab" class="admin-tab-content hidden">
      <div class="products-grid" id="adminProductsContainer"></div>
    </div>

    <div id="adminAddTab" class="admin-tab-content hidden">
      <div class="glass-card" style="max-width:800px; margin:0 auto;">
        <h3 style="font-size:1.5rem; margin-bottom:1.5rem;">Agregar nuevo producto</h3>
        <form id="addProductForm" onsubmit="addProduct(event)">
          <div class="form-group">
            <label>Nombre del producto *</label>
            <input type="text" id="productName" required>
          </div>

          <div class="grid-2">
            <div class="form-group">
              <label>Precio *</label>
              <input type="number" id="productPrice" required>
            </div>
            <div class="form-group">
              <label>Stock *</label>
              <input type="number" id="productStock" required>
            </div>
          </div>

          <div class="form-group">
            <label>Categoría *</label>
            <select id="newProductCategory" required>
              <option>Remeras</option>
              <option>Buzos</option>
              <option>Pantalones</option>
              <option>Accesorios</option>
            </select>
          </div>

          <div class="form-group">
            <label>Descripción</label>
            <textarea id="productDescription" rows="4"></textarea>
          </div>

          <div class="form-group">
            <label>Imagen del producto</label>
            <input type="file" id="productImage" accept="image/*" onchange="previewProductImage()">
            <img id="imagePreview" style="display:none; margin-top:1rem; max-width:300px; border-radius:10px;">
          </div>

          <button type="submit" class="btn-primary" style="width:100%;">Agregar producto</button>
        </form>
      </div>
    </div>
  </div>

  <!-- ---------- JavaScript (completo y corregido) ---------- -->
  <script>
    // Wait until Lucide script is loaded to create icons
    window.addEventListener('load', () => {
      if (window.lucide && typeof lucide.createIcons === 'function') lucide.createIcons();
    });

    // ---------- Data ----------
    let products = [
      {
        id: 1,
        name: 'Remera Oversize Negra',
        price: 25000,
        category: 'Remeras',
        stock: 15,
        views: 234,
        sales: 45,
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23000" width="400" height="400"/%3E%3Ctext x="200" y="200" font-family="Arial" font-size="80" fill="%23fff" text-anchor="middle"%3EKMZ%3C/text%3E%3C/svg%3E',
        description: 'Remera oversize de algodón premium con logo KMZ bordado. Corte amplio y cómodo para máximo estilo urbano.',
        rating: 4.8
      },
      {
        id: 2,
        name: 'Buzo KMZ Blanco',
        price: 45000,
        category: 'Buzos',
        stock: 8,
        views: 189,
        sales: 32,
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23fff" width="400" height="400"/%3E%3Ctext x="200" y="200" font-family="Arial" font-size="80" fill="%23000" text-anchor="middle"%3EKMZ%3C/text%3E%3C/svg%3E',
        description: 'Buzo con capucha de alta calidad. Material premium con estampado exclusivo KMZ en pecho y espalda.',
        rating: 4.9
      }
    ];

    let cart = [];
    let isAdminLoggedIn = false;

    // ---------- Persistence ----------
    function loadData() {
      const savedProducts = localStorage.getItem('kmz_products');
      if (savedProducts) {
        try { products = JSON.parse(savedProducts); } catch(e) { /* ignore */ }
      }
      const savedCart = localStorage.getItem('kmz_cart');
      if (savedCart) {
        try { cart = JSON.parse(savedCart); } catch(e) { cart = []; }
        updateCartBadge();
      }
    }

    function saveData() {
      localStorage.setItem('kmz_products', JSON.stringify(products));
      localStorage.setItem('kmz_cart', JSON.stringify(cart));
    }

    // ---------- Notifications ----------
    let notifTimeout = null;
    function showNotification(message, type = 'success') {
      const notification = document.getElementById('notification');
      notification.textContent = message;
      notification.className = `notification ${type}`;
      notification.classList.remove('hidden');

      // small sound
      try { playSound(type); } catch(e) {}

      if (notifTimeout) clearTimeout(notifTimeout);
      notifTimeout = setTimeout(() => {
        notification.classList.add('hidden');
      }, 3000);
    }

    // simple audio feedback (short beep)
    function playSound(type) {
      if (!window.AudioContext && !window.webkitAudioContext) return;
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      if (type === 'success') {
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.08);
      } else if (type === 'error') {
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime + 0.08);
      } else {
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
      }

      gainNode.gain.setValueAtTime(0.12, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.18);
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.18);
    }

    // ---------- Render Products ----------
    function generateStars(rating) {
      let stars = '';
      for (let i = 1; i <= 5; i++) {
        stars += `<span class="star ${i <= Math.floor(rating) ? '' : 'empty'}">★</span>`;
      }
      return stars;
    }

    function renderProducts() {
      const container = document.getElementById('productsContainer');
      if (!container) return;
      container.innerHTML = products.map(product => `
        <div class="product-card" onclick="showProductDetail(${product.id})">
          <div style="position: relative; overflow: hidden;">
            <img src="${product.image}" alt="${escapeHtml(product.name)}" class="product-image">
            ${product.stock < 5 ? `<div style="position: absolute; top: 1rem; left: 1rem; background: #ef4444; color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600;">¡Últimas ${product.stock} unidades!</div>` : ''}
          </div>
          <div class="product-info">
            <span class="product-badge">${escapeHtml(product.category)}</span>
            <h3 class="product-name">${escapeHtml(product.name)}</h3>
            <p class="product-description">${escapeHtml(product.description)}</p>
            <div class="rating">
              ${generateStars(product.rating)}
              <span style="color: #aaa; font-size: 0.9rem;">(${product.rating})</span>
            </div>
            <div class="product-price">$${product.price.toLocaleString('es-AR')}</div>
            <div class="product-stock">Stock: ${product.stock} unidades</div>
            <button class="btn-primary" style="width:100%;" onclick="event.stopPropagation(); addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
              ${product.stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
            </button>
          </div>
        </div>
      `).join('');
    }

    // small helper to avoid breaking HTML when inserting
    function escapeHtml(str) {
      if (!str && str !== 0) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    // ---------- Product Detail ----------
    function showProductDetail(productId) {
      const product = products.find(p => p.id === productId);
      if (!product) return;

      // increment views
      product.views = (product.views || 0) + 1;
      saveData();
      renderProducts();
      updateAdminStats();

      document.getElementById('modalProductName').textContent = product.name;
      document.getElementById('productModalBody').innerHTML = `
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:2rem;">
          <div>
            <img src="${product.image}" alt="${escapeHtml(product.name)}" style="width:100%; border-radius:15px;">
          </div>
          <div>
            <span class="product-badge">${escapeHtml(product.category)}</span>
            <div class="rating" style="margin:1rem 0;">
              ${generateStars(product.rating)}
              <span style="color:#aaa;">(${product.rating})</span>
            </div>
            <p style="color:#aaa; line-height:1.8; margin-bottom:1.5rem;">${escapeHtml(product.description)}</p>
            <div class="glass-card" style="margin-bottom:1.5rem;">
              <div class="flex-between" style="margin-bottom:.5rem;">
                <span style="color:#aaa;">Precio:</span>
                <span style="font-size:2rem; font-weight:700; color:#ff0055;">$${product.price.toLocaleString('es-AR')}</span>
              </div>
              <div class="flex-between">
                <span style="color:#aaa;">Stock disponible:</span>
                <span style="font-weight:600;">${product.stock} unidades</span>
              </div>
            </div>
            <button class="btn-primary" style="width:100%;" onclick="addToCart(${product.id}); closeProductModal();" ${product.stock === 0 ? 'disabled' : ''}>
              ${product.stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
            </button>

            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem; margin-top:1.5rem;">
              <div class="glass-card text-center">
                <div style="color:#aaa; font-size:.85rem;">Vistas</div>
                <div style="font-weight:700; font-size:1.2rem;">${product.views}</div>
              </div>
              <div class="glass-card text-center">
                <div style="color:#aaa; font-size:.85rem;">Vendidos</div>
                <div style="font-weight:700; font-size:1.2rem;">${product.sales}</div>
              </div>
              <div class="glass-card text-center">
                <div style="color:#aaa; font-size:.85rem;">Rating</div>
                <div style="font-weight:700; font-size:1.2rem;">${product.rating}</div>
              </div>
            </div>
          </div>
        </div>
      `;
      document.getElementById('productModal').classList.remove('hidden');
    }

    function closeProductModal() {
      document.getElementById('productModal').classList.add('hidden');
    }

    // ---------- Cart ----------
    function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      if (!product || product.stock === 0) {
        showNotification('Producto sin stock', 'error');
        return;
      }
      const existingItem = cart.find(item => item.id === productId);
      if (existingItem) {
        if (existingItem.quantity >= product.stock) {
          showNotification('Stock insuficiente', 'error');
          return;
        }
        existingItem.quantity++;
      } else {
        cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 });
      }
      saveData();
      updateCartBadge();
      showNotification('Producto agregado al carrito', 'success');
    }

    function updateCartBadge() {
      const badge = document.getElementById('cartBadge');
      const total = cart.reduce((sum, item) => sum + item.quantity, 0);
      if (total > 0) {
        badge.textContent = total;
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    }

    function showCart() {
      renderCart();
      document.getElementById('cartModal').classList.remove('hidden');
    }

    function closeCart() {
      document.getElementById('cartModal').classList.add('hidden');
    }

    function renderCart() {
      const container = document.getElementById('cartItems');
      const cartTotalEl = document.getElementById('cartTotal');
      if (!container) return;
      if (cart.length === 0) {
        container.innerHTML = `
          <div class="glass-card text-center" style="padding:3rem;">
            <div style="font-size:4rem; margin-bottom:1rem;">🛒</div>
            <p style="font-size:1.2rem; color:#aaa; margin-bottom:1.5rem;">Tu carrito está vacío</p>
            <button class="btn-primary" onclick="closeCart()">Ir a la tienda</button>
          </div>
        `;
        if (cartTotalEl) cartTotalEl.style.display = 'none';
      } else {
        container.innerHTML = cart.map(item => `
          <div class="cart-item">
            <img src="${item.image}" alt="${escapeHtml(item.name)}" class="cart-item-image">
            <div class="cart-item-info">
              <h3 style="font-weight:600; margin-bottom:.5rem;">${escapeHtml(item.name)}</h3>
              <p style="color:#ff0055; font-weight:700;">$${item.price.toLocaleString('es-AR')}</p>
            </div>
            <div class="quantity-controls">
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
              <span style="font-weight:700; font-size:1.2rem;">${item.quantity}</span>
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Eliminar</button>
          </div>
        `).join('');
        if (cartTotalEl) cartTotalEl.style.display = 'block';
        updateCartTotal();
      }
    }

    function updateQuantity(productId, delta) {
      const product = products.find(p => p.id === productId);
      const cartItem = cart.find(item => item.id === productId);

      if (!cartItem) return;
      const newQuantity = cartItem.quantity + delta;
      if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
      }
      if (product && newQuantity > product.stock) {
        showNotification('Stock insuficiente', 'error');
        return;
      }
      cartItem.quantity = newQuantity;
      saveData();
      renderCart();
      updateCartBadge();
    }

    function removeFromCart(productId) {
      cart = cart.filter(item => item.id !== productId);
      saveData();
      renderCart();
      updateCartBadge();
      showNotification('Producto eliminado', 'info');
    }

    function updateCartTotal() {
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const el = document.getElementById('totalAmount');
      if (el) el.textContent = `$${total.toLocaleString('es-AR')}`;
    }

    // ---------- Checkout ----------
    function proceedToCheckout() {
      if (cart.length === 0) {
        showNotification('El carrito está vacío', 'error');
        return;
      }
      closeCart();
      document.getElementById('checkoutModal').classList.remove('hidden');
    }

    function closeCheckout() {
      document.getElementById('checkoutModal').classList.add('hidden');
    }

    function submitOrder(event) {
      event.preventDefault();

      const name = document.getElementById('customerName').value || '';
      const email = document.getElementById('customerEmail').value || '';
      const phone = document.getElementById('customerPhone').value || '';
      const address = document.getElementById('customerAddress').value || '';
      const city = document.getElementById('customerCity').value || '';
      const postal = document.getElementById('customerPostal').value || '';
      const notes = document.getElementById('customerNotes').value || '';

      const orderDetails = cart.map(item => `${item.quantity}x ${item.name}`).join(', ');
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      const message = `🛍️ *Nueva Orden KMZ*\n\n*Cliente:* ${name}\n*Email:* ${email}\n*Teléfono:* ${phone}\n*Dirección:* ${address}, ${city}${postal ? ' (' + postal + ')' : ''}\n\n*Productos:*\n${orderDetails}\n\n*Total:* $${total.toLocaleString('es-AR')}\n\n${notes ? '*Notas:* ' + notes : ''}`;

      // Replace the phone number below with your store WhatsApp number
      const whatsappUrl = `https://wa.me/5491234567890?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      // Update stock and sales
      cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
          product.stock = Math.max(0, (product.stock || 0) - item.quantity);
          product.sales = (product.sales || 0) + item.quantity;
        }
      });

      saveData();
      cart = [];
      saveData();
      updateCartBadge();
      renderProducts();

      closeCheckout();
      showNotification('¡Pedido enviado! Te contactaremos pronto', 'success');
      const form = document.getElementById('checkoutForm');
      if (form) form.reset();
    }

    // ---------- Admin ----------
    function showAdmin() {
      document.getElementById('mainSite').classList.add('hidden');
      document.getElementById('adminPanel').classList.remove('hidden');
    }
    function closeAdmin() {
      document.getElementById('mainSite').classList.remove('hidden');
      document.getElementById('adminPanel').classList.add('hidden');
    }

    function loginAdmin() {
      const password = document.getElementById('adminPassword').value;
      if (password === '00000000') {
        isAdminLoggedIn = true;
        document.getElementById('adminPanel').classList.add('hidden');
        document.getElementById('adminDashboard').classList.remove('hidden');
        updateAdminStats();
        renderAdminProducts();
        showNotification('Bienvenido al dashboard', 'success');
      } else {
        showNotification('Contraseña incorrecta', 'error');
      }
    }

    function logoutAdmin() {
      isAdminLoggedIn = false;
      document.getElementById('adminPassword').value = '';
      closeAdminDashboard();
      showNotification('Sesión cerrada', 'info');
    }

    function closeAdminDashboard() {
      document.getElementById('adminDashboard').classList.add('hidden');
      document.getElementById('mainSite').classList.remove('hidden');
    }

    // switchAdminTab receives event and tab
    function switchAdminTab(e, tab) {
      // Update buttons
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      if (e && e.currentTarget) e.currentTarget.classList.add('active');

      // Update content
      document.querySelectorAll('.admin-tab-content').forEach(content => content.classList.add('hidden'));

      if (tab === 'stats') {
        document.getElementById('adminStatsTab').classList.remove('hidden');
        updateAdminStats();
      } else if (tab === 'products') {
        document.getElementById('adminProductsTab').classList.remove('hidden');
        renderAdminProducts();
      } else if (tab === 'add') {
        document.getElementById('adminAddTab').classList.remove('hidden');
      }
    }

    function updateAdminStats() {
      const totalViews = products.reduce((sum, p) => sum + (p.views || 0), 0);
      const totalSales = products.reduce((sum, p) => sum + (p.sales || 0), 0);
      const totalRevenue = products.reduce((sum, p) => sum + ((p.sales || 0) * (p.price || 0)), 0);

      document.getElementById('totalProducts').textContent = products.length;
      document.getElementById('totalViews').textContent = totalViews;
      document.getElementById('totalSales').textContent = totalSales;
      document.getElementById('totalRevenue').textContent = `$${totalRevenue.toLocaleString('es-AR')}`;

      const topProducts = [...products].sort((a, b) => (b.views || 0) - (a.views || 0)).slice(0, 5);
      document.getElementById('topProducts').innerHTML = topProducts.map((product, i) => `
        <div style="display:flex; align-items:center; gap:1rem; background: rgba(0,0,0,0.3); padding:1rem; border-radius:10px; margin-bottom:1rem;">
          <div style="font-size:1.5rem; font-weight:700; color:#333; width:40px;">#${i+1}</div>
          <img src="${product.image}" alt="${escapeHtml(product.name)}" style="width:60px; height:60px; border-radius:10px; object-fit:cover;">
          <div style="flex:1;">
            <h4 style="font-weight:600; margin-bottom:.25rem;">${escapeHtml(product.name)}</h4>
            <p style="color:#aaa; font-size:.85rem;">${escapeHtml(product.category)}</p>
          </div>
          <div style="text-align:right;">
            <div style="color:#a78bfa; font-weight:600; margin-bottom:.25rem;">👁️ ${product.views || 0}</div>
            <div style="color:#22c55e; font-weight:600;">📦 ${product.sales || 0}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:1.2rem; font-weight:700; color:#ff0055;">$${(product.price||0).toLocaleString('es-AR')}</div>
            <div style="color:#aaa; font-size:.85rem;">Stock: ${product.stock || 0}</div>
          </div>
        </div>
      `).join('');
    }

    function renderAdminProducts() {
      const container = document.getElementById('adminProductsContainer');
      if (!container) return;
      container.innerHTML = products.map(product => `
        <div class="glass-card">
          <img src="${product.image}" alt="${escapeHtml(product.name)}" style="width:100%; height:200px; object-fit:cover; border-radius:10px; margin-bottom:1rem;">
          <h3 style="font-weight:600; margin-bottom:.5rem;">${escapeHtml(product.name)}</h3>
          <p style="color:#aaa; font-size:.85rem; margin-bottom:1rem; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${escapeHtml(product.description)}</p>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; margin-bottom:1rem; font-size:.85rem;">
            <div><div style="color:#aaa;">Precio</div><div style="font-weight:700; color:#ff0055;">$${(product.price||0).toLocaleString('es-AR')}</div></div>
            <div><div style="color:#aaa;">Stock</div><div style="font-weight:700;">${product.stock||0}</div></div>
            <div><div style="color:#aaa;">Vistas</div><div style="font-weight:700; color:#a78bfa;">${product.views||0}</div></div>
            <div><div style="color:#aaa;">Ventas</div><div style="font-weight:700; color:#22c55e;">${product.sales||0}</div></div>
          </div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem;">
            <button class="btn-secondary" onclick="editProduct(${product.id})">✏️ Editar</button>
            <button class="remove-btn" onclick="deleteProduct(${product.id})">🗑️ Eliminar</button>
          </div>
        </div>
      `).join('');
    }

    function previewProductImage() {
      const input = document.getElementById('productImage');
      const preview = document.getElementById('imagePreview');
      if (input && input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
          preview.src = e.target.result;
          preview.style.display = 'block';
        };
        reader.readAsDataURL(input.files[0]);
      } else {
        if (preview) preview.style.display = 'none';
      }
    }

    function addProduct(event) {
      event.preventDefault();
      const name = document.getElementById('productName').value || 'Sin nombre';
      const price = parseInt(document.getElementById('productPrice').value) || 0;
      const stock = parseInt(document.getElementById('productStock').value) || 0;
      const category = document.getElementById('newProductCategory').value || 'Sin categoría';
      const description = document.getElementById('productDescription').value || '';
      const imageInput = document.getElementById('productImage');

      let imageData = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23222" width="400" height="400"/%3E%3Ctext x="200" y="200" font-family="Arial" font-size="60" fill="%23fff" text-anchor="middle"%3EKMZ%3C/text%3E%3C/svg%3E';

      if (imageInput && imageInput.files && imageInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
          imageData = e.target.result;
          completeAddProduct(imageData);
        };
        reader.readAsDataURL(imageInput.files[0]);
      } else {
        completeAddProduct(imageData);
      }

      function completeAddProduct(image) {
        const newProduct = {
          id: Date.now(),
          name,
          price,
          category,
          stock,
          description,
          image,
          views: 0,
          sales: 0,
          rating: 5.0
        };
        products.push(newProduct);
        saveData();
        renderProducts();
        renderAdminProducts();
        updateAdminStats();

        const form = document.getElementById('addProductForm');
        if (form) form.reset();
        const preview = document.getElementById('imagePreview');
        if (preview) preview.style.display = 'none';

        showNotification('Producto agregado exitosamente', 'success');
        // switch to products tab
        document.getElementById('tabProductsBtn').click();
      }
    }

    function editProduct(productId) {
      const product = products.find(p => p.id === productId);
      if (!product) return;
      const newName = prompt('Nombre:', product.name);
      if (newName === null) return;
      const newPrice = prompt('Precio:', product.price);
      if (newPrice === null) return;
      const newStock = prompt('Stock:', product.stock);
      if (newStock === null) return;

      product.name = newName || product.name;
      product.price = parseInt(newPrice) || product.price;
      product.stock = parseInt(newStock) || product.stock;

      saveData();
      renderProducts();
      renderAdminProducts();
      updateAdminStats();
      showNotification('Producto actualizado', 'success');
    }

    function deleteProduct(productId) {
      if (!confirm('¿Confirma eliminar este producto?')) return;
      products = products.filter(p => p.id !== productId);
      saveData();
      renderProducts();
      renderAdminProducts();
      updateAdminStats();
      showNotification('Producto eliminado', 'success');
    }

    // ---------- Init ----------
    window.onload = function() {
      loadData();
      renderProducts();
      if (window.lucide && typeof lucide.createIcons === 'function') lucide.createIcons();
      // Set default visible admin tab
      document.getElementById('adminStatsTab').classList.remove('hidden');
    };

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // ensure clicking tab buttons triggers correct content on first use
    document.getElementById('tabStatsBtn').addEventListener('click', (e) => switchAdminTab(e, 'stats'));
    document.getElementById('tabProductsBtn').addEventListener('click', (e) => switchAdminTab(e, 'products'));
    document.getElementById('tabAddBtn').addEventListener('click', (e) => switchAdminTab(e, 'add'));
  </script>
</body>
</html>
