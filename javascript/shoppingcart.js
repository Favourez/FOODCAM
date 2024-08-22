document.addEventListener('DOMContentLoaded', function() {
    // Example cart items (replace with actual cart data)
    const cartItems = [
        {
            name: "Pizza Margherita",
            price: "$12.99",
            image: "assets/pizza.jpg"
        },
        {
            name: "Cheeseburger",
            price: "$8.99",
            image: "assets/burger.jpg"
        }
        // Add more items or fetch from an API
    ];

    const cartContent = document.getElementById('cart-content');
    const emptyCart = document.getElementById('empty-cart');

    if (cartItems.length === 0) {
        // Show empty cart message
        emptyCart.classList.remove('d-none');
    } else {
        // Populate cart with items
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                </div>
            `;

            cartContent.appendChild(cartItem);
        });
    }
});
