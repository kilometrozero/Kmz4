<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KMZ - Cero reglas. Full estilo.</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lucide/0.263.1/umd/lucide.min.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
      color: white;
      overflow-x: hidden;
    }

    .hidden {
      display: none !important;
    }

    /* Navbar */
    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      background: rgba(10, 10, 10, 0.95);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      z-index: 1000;
      padding: 1rem 5%;
    }

    .navbar-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1400px;
      margin: 0 auto;
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .logo-circle {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, #ff0055, #ff6b9d);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 900;
      font-size: 1.2rem;
    }

    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
      background: linear-gradient(135deg, #ff0055, #ff6b9d);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-links a, .nav-links button {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      font-family: 'Poppins', sans-serif;
    }

    .nav-links a:hover, .nav-links button:hover {
      color: #ff0055;
    }

    .cart-btn {
      position: relative;
      background: #ff0055;
      padding: 0.75rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s;
    }

    .cart-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 10px 30px rgba(255, 0, 85, 0.5);
    }

    .cart-badge {
      position: absolute;
      top: -8px;
      right: -8px;
      background: white;
      color: #ff0055;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 700;
      animation: bounce 1s infinite;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }

    /* Hero Section */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 120px 20px 60px;
      background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: 
        radial-gradient(circle at 20% 50%, rgba(255, 0, 85, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 50%, rgba(255, 107, 157, 0.1) 0%, transparent 50%);
      animation: pulse 8s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    .hero-content {
      position: relative;
      z-index: 1;
      animation: fadeInUp 1s ease-out;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .hero h1 {
      font-size: 5rem;
      font-weight: 900;
      line-height: 1.2;
      margin-bottom: 1rem;
      background: linear-gradient(135deg, #fff 0%, #ff0055 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero p {
      font-size: 1.5rem;
      color: #aaa;
      margin-bottom: 2rem;
    }

    .btn-primary {
      background: linear-gradient(135deg, #ff0055, #ff6b9d);
      color: white;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      display: inline-block;
      transition: all 0.3s;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      font-family: 'Poppins', sans-serif;
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(255, 0, 85, 0.5);
    }

    /* Products Section */
    .section {
      padding: 100px 5%;
      max-width: 1400px;
      margin: 0 auto;
    }

    .section-title {
      text-align: center;
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 60px;
      background: linear-gradient(135deg, #ff0055, #ff6b9d);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .product-card {
      background: rgba(26, 26, 26, 0.8);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      overflow: hidden;
      transition: all 0.4s;
      cursor: pointer;
    }

    .product-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(255, 0, 85, 0.3);
      border-color: #ff0055;
    }

    .product-image {
      width: 100%;
      height: 320px;
      object-fit: cover;
      transition: transform 0.4s;
    }

    .product-card:hover .product-image {
      transform: scale(1.1);
    }

    .product-info {
      padding: 1.5rem;
    }

    .product-badge {
      display: inline-block;
      background: #ff0055;
      color: white;
      padding: 0.3rem 1rem;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .product-name {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .product-description {
      color: #aaa;
      margin-bottom: 1rem;
      line-height: 1.6;
    }

    .product-price {
      font-size: 2rem;
      font-weight: 700;
      color: #ff0055;
      margin: 1rem 0;
    }

    .product-stock {
      color: #aaa;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .rating {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }

    .star {
      color: #ffd700;
    }

    .star.empty {
      color: #333;
    }

    /* Cart */
    .cart-item {
      background: rgba(26, 26, 26, 0.8);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      padding: 1.5rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    .cart-item-image {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 10px;
    }

    .cart-item-info {
      flex: 1;
    }

    .quantity-controls {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .quantity-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #333;
      border: none;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
      transition: all 0.3s;
    }

    .quantity-btn:hover {
      background: #ff0055;
      transform: scale(1.1);
    }

    .remove-btn {
      background: #ff4444;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
    }

    .remove-btn:hover {
      background: #cc0000;
    }

    /* Form */
    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }

    .form-group input,
    .form-group textarea,
    .form-group select {
      width: 100%;
      padding: 1rem;
      background: rgba(26, 26, 26, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      color: white;
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
    }

    .form-group input:focus,
    .form-group textarea:focus,
    .form-group select:focus {
      outline: none;
      border-color: #ff0055;
    }

    /* Modal */
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
      padding: 2rem;
      animation: fadeIn 0.3s;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .modal-content {
      background: rgba(26, 26, 26, 0.95);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      max-width: 900px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      animation: slideUp 0.4s;
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .close-btn {
      background: none;
      border: none;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      transition: color 0.3s;
    }

    .close-btn:hover {
      color: #ff0055;
    }

    .modal-body {
      padding: 2rem;
    }

    /* Notification */
    .notification {
      position: fixed;
      top: 2rem;
      right: 2rem;
      background: #ff0055;
      color: white;
      padding: 1rem 2rem;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      z-index: 3000;
      animation: slideInRight 0.4s;
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .notification.success {
      background: #22c55e;
    }

    .notification.error {
      background: #ef4444;
    }

    .notification.info {
      background: #3b82f6;
    }

    /* Admin */
    .admin-panel {
      min-height: 100vh;
      padding: 100px 5% 60px;
    }

    .admin-tabs {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }

    .tab-btn {
      padding: 1rem 2rem;
      background: rgba(26, 26, 26, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      color: #aaa;
      cursor: pointer;
      transition: all 0.3s;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 1rem;
    }

    .tab-btn.active {
      background: #ff0055;
      color: white;
      border-color: #ff0055;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .stat-card {
      background: rgba(26, 26, 26, 0.8);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      padding: 2rem;
      text-align: center;
      transition: all 0.3s;
    }

    .stat-card:hover {
      transform: translateY(-5px);
      border-color: #ff0055;
    }

    .stat-value {
      font-size: 2.5rem;
      font-weight: 700;
      color: #ff0055;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      color: #aaa;
      font-size: 0.9rem;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }

      .hero h1 {
        font-size: 3rem;
      }

      .hero p {
        font-size: 1.2rem;
      }

      .products-grid {
        grid-template-columns: 1fr;
      }

      .section-title {
        font-size: 2rem;
      }

      .cart-item {
        flex-direction: column;
        text-align: center;
      }
    }

    .glass-card {
      background: rgba(26, 26, 26, 0.8);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 2rem;
    }

    .btn-secondary {
      background: transparent;
      border: 2px solid #ff0055;
      color: #ff0055;
      padding: 0.75rem 1.5rem;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      font-size: 1rem;
    }

    .btn-secondary:hover {
      background: #ff0055;
      color: white;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .flex-between {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .flex-center {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .text-center {
      text-align: center;
    }

    .mb-2 {
      margin-bottom: 1rem;
    }

    .mt-4 {
      margin-top: 2rem;
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
        <button onclick="showAdmin()" style="color: #ff0055;">Dashboard</button>
        <button class="cart-btn" onclick="showCart()">
          <i data-lucide="shopping-cart"></i>
          <span class="cart-badge hidden" id="cartBadge">0</span>
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
    <section id="sobre" class="section" style="background: rgba(26, 26, 26, 0.5);">
      <h2 class="section-title">Sobre KMZ</h2>
      <div class="glass-card text-center" style="max-width: 800px; margin: 0 auto;">
        <p style="font-size: 1.2rem; line-height: 1.8; color: #aaa; margin-bottom: 3rem;">
          KilometroZero es más que una marca: es una forma de expresar tu estilo sin límites. Nacimos para romper las reglas y crear una nueva cultura urbana donde la autenticidad es lo único que importa.
        </p>
        <div class="grid-2">
          <div class="glass-card">
            <div style="font-size: 3rem; margin-bottom: 1rem;">🔥</div>
            <h3 class="mb-2">Diseño Único</h3>
            <p style="color: #aaa;">Piezas exclusivas</p>
          </div>
          <div class="glass-card">
            <div style="font-size: 3rem; margin-bottom: 1rem;">⚡</div>
            <h3 class="mb-2">Calidad Premium</h3>
            <p style="color: #aaa;">Materiales seleccionados</p>
          </div>
          <div class="glass-card">
            <div style="font-size: 3rem; margin-bottom: 1rem;">💎</div>
            <h3 class="mb-2">Estilo Urbano</h3>
            <p style="color: #aaa;">Esencia de la calle</p>
          </div>
        </div>
      </div>
    </section>

    <footer style="text-align: center; padding: 2rem; color: #666;">
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
          <div class="flex-between" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem;">
            <span>Total:</span>
            <span style="color: #ff0055;" id="totalAmount">$0</span>
          </div>
          <button class="btn-primary" style="width: 100%; padding: 1rem;" onclick="proceedToCheckout()">
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

  <!-- Admin Panel -->
  <div id="adminPanel" class="admin-panel hidden">
    <div class="glass-card" style="max-width: 500px; margin: 0 auto;">
      <h2 class="text-center mb-2">🔐 Panel de Administración</h2>
      <p class="text-center" style="color: #aaa; margin-bottom: 2rem;">Ingresa tu contraseña</p>
      <div class="form-group">
        <input type="password" id="adminPassword" placeholder="Contraseña">
      </div>
      <button class="btn-primary" style="width: 100%;" onclick="loginAdmin()">Iniciar sesión</button>
      <button class="btn-secondary" style="width: 100%; margin-top: 1rem;" onclick="closeAdmin()">Volver al sitio</button>
    </div>
  </div>

  <!-- Admin Dashboard -->
  <div id="adminDashboard" class="admin-panel hidden">
    <div class="flex-between mb-2">
      <div>
        <h2 style="font-size: 2.5rem; font-weight: 700;">Dashboard KMZ</h2>
        <p style="color: #aaa;">Gestiona tu tienda</p>
      </div>
      <div>
        <button class="btn-secondary" onclick="closeAdminDashboard()">Volver al sitio</button>
        <button class="btn-primary" onclick="logoutAdmin()" style="margin-left: 1rem;">Cerrar sesión</button>
      </div>
    </div>

    <div class="admin-tabs">
      <button class="tab-btn active" onclick="switchAdminTab('stats')">📊 Estadísticas</button>
      <button class="tab-btn" onclick="switchAdminTab('products')">🛍️ Productos</button>
      <button class="tab-btn" onclick="switchAdminTab('add')">➕ Agregar Producto</button>
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
        <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem;">Productos con mejor rendimiento</h3>
        <div id="topProducts"></div>
      </div>
    </div>

    <div id="adminProductsTab" class="admin-tab-content hidden">
      <div class="products-grid" id="adminProductsContainer"></div>
    </div>

    <div id="adminAddTab" class="admin-tab-content hidden">
      <div class="glass-card" style="max-width: 800px; margin: 0 auto;">
        <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem;">Agregar nuevo producto</h3>
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
          <div class="form-group
