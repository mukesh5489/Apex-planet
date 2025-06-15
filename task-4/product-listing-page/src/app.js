const products = [
    {
        id: 1,
        title: "Wireless Headphones",
        category: "Electronics",
        price: 89.99,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        title: "Men's T-Shirt",
        category: "Clothing",
        price: 25.00,
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        title: "Smartphone",
        category: "Electronics",
        price: 499.99,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 4,
        title: "Novel: The Great Adventure",
        category: "Books",
        price: 15.99,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 5,
        title: "Women's T-shirt",
        category: "Clothing",
        price: 120.00,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 6,
        title: "Bluetooth Speaker",
        category: "Electronics",
        price: 39.99,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 7,
        title: "Cookbook: Easy Recipes",
        category: "Books",
        price: 22.50,
        rating: 4.0,
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    }
];

const productList = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const sortFilter = document.getElementById('sortFilter');

function renderProducts(list) {
    productList.innerHTML = '';
    if (list.length === 0) {
        productList.innerHTML = '<p>No products found.</p>';
        return;
    }
    list.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product-title">${product.title}</div>
            <div class="product-category">${product.category}</div>
            <div class="product-price">₹${product.price.toLocaleString('en-IN', {minimumFractionDigits: 2})}</div>
            <div class="product-rating">⭐ ${product.rating}</div>
        `;
        productList.appendChild(card);
    });
}

function filterAndSortProducts() {
    let filtered = [...products];

    // Filter by category
    const category = categoryFilter.value;
    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }

    const price = priceFilter.value;
    if (price !== 'all') {
        const [min, max] = price.split('-').map(Number);
        filtered = filtered.filter(p => {
            if (max) return p.price >= min && p.price <= max;
            return p.price >= min;
        });
    }
    const sort = sortFilter.value;
    if (sort === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'priceLowHigh') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'priceHighLow') {
        filtered.sort((a, b) => b.price - a.price);
    }

    renderProducts(filtered);
}

categoryFilter.addEventListener('change', filterAndSortProducts);
priceFilter.addEventListener('change', filterAndSortProducts);
sortFilter.addEventListener('change', filterAndSortProducts);
renderProducts(products);