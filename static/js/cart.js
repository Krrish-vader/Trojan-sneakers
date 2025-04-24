// Function to add item to cart
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Function to remove item from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(product => {
        const subtotal = product.price * product.quantity;
        totalPrice += subtotal;

        const cartItem = document.createElement('tr');
        cartItem.innerHTML = `
            <td>
            <div>
                <p>${product.name}</p>
                <small>Price: $${product.price}</small>
                <br>
                <button onclick="removeFromCart(${product.id})">Remove</button>
            </div>
            </td>
            <td>${product.quantity}</td>
            <td>$${subtotal.toFixed(2)}</td>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    totalPriceElement.innerText = `$${totalPrice.toFixed(2)}`;
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', updateCart);