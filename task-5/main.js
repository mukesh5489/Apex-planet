const products = [
  { id: 1, name: "Wireless Headphones", price: 1499.00, image: "https://images.unsplash.com/photo-1612465289702-7c84b5258fde?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, name: "Smart Watch", price: 2499.00, image: "https://images.unsplash.com/photo-1461141346587-763ab02bced9?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, name: "Bluetooth Speaker", price: 999.00, image: "https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, name: "Fitness Tracker", price: 1299.00, image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, name: "Laptop Backpack", price: 799.00, image: "https://images.unsplash.com/photo-1667411424771-cadd97150827?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, name: "Wireless Mouse", price: 499.00, image: "https://images.unsplash.com/photo-1660491083562-d91a64d6ea9c?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 7, name: "USB-C Charger", price: 699.00, image: "https://images.unsplash.com/photo-1731616103600-3fe7ccdc5a59?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 8, name: "Noise Cancelling Earbuds", price: 1799.00, image: "https://images.unsplash.com/photo-1733641839241-6ae7a628971f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 9, name: "Portable SSD 1TB", price: 3499.00, image: "https://images.unsplash.com/photo-1628557118391-56cd62c9f2cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 10, name: "Smart LED Bulb", price: 399.00, image: "https://images.unsplash.com/photo-1622574372197-b8e9fe9f522c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 11, name: "Gaming Keyboard", price: 2299.00, image: "https://images.unsplash.com/photo-1637243218672-d338945efdf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 12, name: "Tablet Stand", price: 599.00, image: "https://images.unsplash.com/photo-1675109322863-2f4eef9fe032?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFRhYmxldCUyMFN0YW5kfGVufDB8fDB8fHww" }
];

const cart = [];

function renderProducts() {
  const productsEl = document.getElementById('products');
  productsEl.innerHTML = products.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <h3>${product.name}</h3>
      <p>₹${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `).join('');
}

function renderCart() {
  const cartItemsEl = document.getElementById('cart-items');
  const cartTotalEl = document.getElementById('cart-total');
  cartItemsEl.innerHTML = cart.map(item => `
    <li>${item.name} x${item.qty} - ₹${(item.price * item.qty).toFixed(2)}</li>
  `).join('');
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotalEl.textContent = `₹${total.toFixed(2)}`;
}

window.addToCart = function(productId) {
  const product = products.find(p => p.id === productId);
  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
    cartItem.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
};

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();

  const buyBtn = document.getElementById('buy-btn');
  const addressForm = document.getElementById('address-form');
  const orderSuccess = document.getElementById('order-success');
  const addressInput = document.getElementById('address-input');
  const cartEl = document.getElementById('cart');
  const navCart = document.getElementById('nav-cart');

  cartEl.style.display = "none";

  navCart.addEventListener('click', (e) => {
    e.preventDefault();
    if (cartEl.style.display === "none") {
      cartEl.style.display = "block";
    } else {
      cartEl.style.display = "none";
    }
  });

  buyBtn.addEventListener('click', () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    buyBtn.style.display = "none";
    addressForm.style.display = "block";
    addressInput.focus();
  });

  addressForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const address = addressInput.value.trim();
    if (address === "") {
      addressInput.focus();
      return;
    }
    addressForm.style.display = "none";
    orderSuccess.style.display = "flex";
    cart.length = 0;
    renderCart();
    addressInput.value = "";
    setTimeout(() => {
      orderSuccess.style.display = "none";
      buyBtn.style.display = "block";
    }, 2000);
  });
});