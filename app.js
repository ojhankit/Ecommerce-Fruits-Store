document.addEventListener('DOMContentLoaded', () => {
    // Function to add product to cart
    const addToCart = (item) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product} added to cart!`);
    };

    // Handle Add to Cart button clicks
    const addButtons = document.querySelectorAll('.add-to-cart');
    addButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const product = event.target.getAttribute('data-product');
            addToCart(product);
        });
    });

    // Function to display cart items on the checkout page
    const displayCartItems = () => {
        const cartItemsContainer = document.getElementById('cart-items');
        if (cartItemsContainer) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cartItemsContainer.innerHTML = '';
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
            } else {
                cart.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.textContent = item;
                    cartItemsContainer.appendChild(itemElement);
                });
            }
        }
    };

    // Call displayCartItems if on checkout page
    if (document.getElementById('cart-items')) {
        displayCartItems();
    }
});
