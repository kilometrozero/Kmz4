// Simple shared JS for pages: products, cart, admin. Uses localStorage.
const STORAGE_PRODUCTS = 'kmz_products_v1';
const STORAGE_CART = 'kmz_cart_v1';

// Seed products if none
function seedProducts(){
  if (localStorage.getItem(STORAGE_PRODUCTS)) return;
  const products = [
    {id:1, name:'Remera Oversize Negra', price:25000, stock:15, category:'Remeras', image:'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23000" width="800" height="600"/%3E%3Ctext x="400" y="320" font-family="Arial" font-size="56" fill="%23fff" text-anchor="middle"%3EKMZ%3C/text%3E%3C/svg%3E', description:'Remera oversize de algodón premium.'},
    {id:2, name:'Buzo KMZ Blanco', price:45000, stock:8, category:'Buzos', image:'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23fff" width="800" height="600"/%3E%3Ctext x="400" y="320" font-family="Arial" font-size="56" fill="%23000" text-anchor="middle"%3EKMZ%3C/text%3E%3C/svg%3E', description:'Buzo con capucha de alta calidad.'}
  ];
  localStorage.setItem(STORAGE_PRODUCTS, JSON.stringify(products));
}

function getProducts(){ seedProducts(); return JSON.parse(localStorage.getItem(STORAGE_PRODUCTS) || '[]'); }
function saveProducts(p){ localStorage.setItem(STORAGE_PRODUCTS, JSON.stringify(p)); }

function getCart(){ return JSON.parse(localStorage.getItem(STORAGE_CART) || '[]'); }
function saveCart(c){ localStorage.setItem(STORAGE_CART, JSON.stringify(c)); updateCartCount(); }

function updateCartCount(){
  const count = getCart().reduce((s,i)=>s+i.qty,0);
  const el = document.getElementById('cartCount') || document.getElementById('cartCount2');
  if(el) el.textContent = count;
}

// Render small grid (index)
function renderHomeProducts(){
  const grid = document.getElementById('productsGrid');
  if(!grid) return;
  const products = getProducts();
  grid.innerHTML = products.slice(0,4).map(p=>`
    <div class="card product">
      <img src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <div class="price">$${p.price.toLocaleString('es-AR')}</div>
      <div class="lead">${p.category}</div>
      <button class="btn" onclick="addToCart(${p.id})">Agregar</button>
    </div>
  `).join('');
}

// Render full catalog
function renderFullProducts(){
  const grid = document.getElementById('productsGridFull');
  if(!grid) return;
  const products = getProducts();
  grid.innerHTML = products.map(p=>`
    <div class="card product">
      <img src="${p.image}" alt="${p.name}">
      <h4>${p.name}</h4>
      <div class="price">$${p.price.toLocaleString('es-AR')}</div>
      <div class="lead">${p.description || ''}</div>
      <div>Stock: ${p.stock}</div>
      <div style="display:flex; gap:8px; margin-top:8px;">
        <button class="btn" onclick="addToCart(${p.id})" ${p.stock===0?'disabled':''}>Agregar</button>
        <button class="btn" onclick="location.href='admin.html'">Ver</button>
      </div>
    </div>
  `).join('');
}

// Cart UI
function openCart(modalId='cartModal', itemsId='cartItems', totalId='cartTotal'){
  const modal = document.getElementById(modalId);
  if(!modal) return;
  const itemsEl = document.getElementById(itemsId);
  const cart = getCart();
  if(cart.length===0){
    itemsEl.innerHTML = '<p class="lead">Tu carrito está vacío</p>';
    document.getElementById(totalId).textContent = '$0';
  } else {
    itemsEl.innerHTML = cart.map(i=>`
      <div style="display:flex; gap:12px; align-items:center; margin-bottom:8px;">
        <img src="${i.image}" style="width:72px; height:56px; object-fit:cover; border-radius:6px;">
        <div style="flex:1;">
          <strong>${i.name}</strong><br>
          $${i.price.toLocaleString('es-AR')} x ${i.qty}
        </div>
        <div>
          <button class="btn" onclick="changeQty(${i.id}, -1)">-</button>
          <button class="btn" onclick="changeQty(${i.id}, 1)">+</button>
        </div>
      </div>
    `).join('');
    const total = cart.reduce((s,i)=>s + i.price*i.qty,0);
    document.getElementById(totalId).textContent = '$' + total.toLocaleString('es-AR');
  }
  modal.classList.remove('hidden');
}

function closeModal(modalId){
  const modal = document.getElementById(modalId);
  if(modal) modal.classList.add('hidden');
}

function addToCart(productId){
  const products = getProducts();
  const p = products.find(x=>x.id===productId);
  if(!p || p.stock===0){ alert('Sin stock'); return; }
  const cart = getCart();
  const existing = cart.find(x=>x.id===productId);
  if(existing){
    if(existing.qty < p.stock) existing.qty++;
    else { alert('Stock insuficiente'); return; }
  } else {
    cart.push({id:p.id, name:p.name, price:p.price, image:p.image, qty:1});
  }
  saveCart(cart);
  showToast('Producto agregado');
}

function changeQty(productId, delta){
  let cart = getCart();
  const item = cart.find(i=>i.id===productId);
  if(!item) return;
  item.qty += delta;
  if(item.qty<=0) cart = cart.filter(i=>i.id!==productId);
  saveCart(cart);
  // refresh open modals if exist
  if(document.getElementById('cartModal') && !document.getElementById('cartModal').classList.contains('hidden')){
    openCart('cartModal','cartItems','cartTotal');
  }
  if(document.getElementById('cartModal2') && !document.getElementById('cartModal2').classList.contains('hidden')){
    openCart('cartModal2','cartItems2','cartTotal2');
  }
}

function checkoutFlow(){
  const cart = getCart();
  if(cart.length===0){ alert('Carrito vacío'); return; }
  const total = cart.reduce((s,i)=>s + i.price*i.qty,0);
  const message = `Nuevo pedido KMZ - Total: $${total.toLocaleString('es-AR')}. Productos: ` + cart.map(i=>i.qty + 'x ' + i.name).join(', ');
  const wa = 'https://wa.me/5491234567890?text=' + encodeURIComponent(message);
  window.open(wa, '_blank');
  // update stock & clear cart
  const products = getProducts();
  cart.forEach(ci=>{
    const prod = products.find(p=>p.id===ci.id);
    if(prod) prod.stock = Math.max(0, prod.stock - ci.qty);
  });
  saveProducts(products);
  localStorage.removeItem(STORAGE_CART);
  updateCartCount();
  showToast('Pedido enviado por WhatsApp');
  // close modals if open
  closeModal('cartModal'); closeModal('cartModal2');
  renderFullProducts(); renderHomeProducts(); renderAdminProducts();
}

// Admin functions
function renderAdminProducts(){
  const el = document.getElementById('adminProducts');
  if(!el) return;
  const products = getProducts();
  if(products.length===0) el.innerHTML = '<p>No hay productos</p>';
  el.innerHTML = products.map(p=>`
    <div style="display:flex; gap:12px; align-items:center; margin-bottom:8px;">
      <img src="${p.image}" style="width:72px; height:56px; object-fit:cover; border-radius:6px;">
      <div style="flex:1;">
        <strong>${p.name}</strong> <div style="color:#aaa;">$${p.price.toLocaleString('es-AR')}</div>
        <div style="color:#999;">Stock: ${p.stock} • ${p.category || ''}</div>
      </div>
      <div style="display:flex; gap:8px;">
        <button class="btn" onclick="promptEdit(${p.id})">Editar</button>
        <button class="btn" onclick="deleteProduct(${p.id})">Eliminar</button>
      </div>
    </div>
  `).join('');
}

function promptEdit(id){
  const products = getProducts();
  const p = products.find(x=>x.id===id);
  if(!p) return;
  const n = prompt('Nombre', p.name); if(n===null) return;
  const pr = prompt('Precio', p.price); if(pr===null) return;
  const st = prompt('Stock', p.stock); if(st===null) return;
  p.name = n; p.price = parseInt(pr)||p.price; p.stock = parseInt(st)||p.stock;
  saveProducts(products); renderAdminProducts(); renderFullProducts(); renderHomeProducts();
}

function deleteProduct(id){
  if(!confirm('Eliminar producto?')) return;
  const products = getProducts().filter(p=>p.id!==id);
  saveProducts(products); renderAdminProducts(); renderFullProducts(); renderHomeProducts();
  showToast('Producto eliminado');
}

function showToast(msg){
  // simple notification
  const el = document.createElement('div');
  el.textContent = msg; el.style.position='fixed'; el.style.right='16px'; el.style.bottom='16px';
  el.style.background='#111'; el.style.padding='10px 14px'; el.style.borderRadius='8px'; el.style.border='1px solid rgba(255,255,255,0.04)';
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),2200);
}

// Init on pages
document.addEventListener('DOMContentLoaded', ()=>{
  seedProducts();
  renderHomeProducts();
  renderFullProducts();
  renderAdminProducts();
  updateCartCount();

  // Cart buttons listeners
  const cartBtn = document.getElementById('cartBtn');
  if(cartBtn) cartBtn.addEventListener('click', ()=> openCart('cartModal','cartItems','cartTotal'));
  const closeCart = document.getElementById('closeCart');
  if(closeCart) closeCart.addEventListener('click', ()=> closeModal('cartModal'));
  const checkoutBtn = document.getElementById('checkoutBtn');
  if(checkoutBtn) checkoutBtn.addEventListener('click', checkoutFlow);

  const cartBtn2 = document.getElementById('cartBtn2');
  if(cartBtn2) cartBtn2.addEventListener('click', ()=> openCart('cartModal2','cartItems2','cartTotal2'));
  const closeCart2 = document.getElementById('closeCart2');
  if(closeCart2) closeCart2.addEventListener('click', ()=> closeModal('cartModal2'));
  const checkoutBtn2 = document.getElementById('checkoutBtn2');
  if(checkoutBtn2) checkoutBtn2.addEventListener('click', checkoutFlow);

  // Admin add product
  const addForm = document.getElementById('addProductForm');
  if(addForm){
    addForm.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('p_name').value.trim();
      const price = parseInt(document.getElementById('p_price').value) || 0;
      const stock = parseInt(document.getElementById('p_stock').value) || 0;
      const cat = document.getElementById('p_cat').value.trim();
      const img = document.getElementById('p_img').value.trim() || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23222" width="800" height="600"/%3E%3Ctext x="400" y="320" font-family="Arial" font-size="56" fill="%23fff" text-anchor="middle"%3EKMZ%3C/text%3E%3C/svg%3E';
      const products = getProducts();
      const id = Date.now();
      products.push({id, name, price, stock, category:cat, image:img, description:''});
      saveProducts(products);
      addForm.reset();
      renderAdminProducts(); renderFullProducts(); renderHomeProducts();
      showToast('Producto agregado');
    });
  }
});
