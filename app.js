const cart = [];

// Add item to cart
function addToCart(item) {
    cart.push(item);
    console.log(`Item added: ${item.name}`);
    updateCartUI();
}

// Update cart UI
function updateCartUI() {
    const cartItems = document.querySelector(".cart-items");
    cartItems.innerHTML = "";
    cart.forEach(item => {
        cartItems.innerHTML += `<li>${item.name} - $${item.price}</li>`;
    });
}
