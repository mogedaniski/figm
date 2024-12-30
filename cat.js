document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.dataset.name;
            const price = button.dataset.price;
            const image = button.dataset.image;

            // Check if the item is already in the cart
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, image, quantity: 1 });
            }

            // Save updated cart to localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${name} added to cart!`);
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsContainer = document.getElementById("cart-items");

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");

        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100px;">
            <p>${item.name}</p>
            <p>£${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
        `;

        cartItemsContainer.appendChild(itemElement);
    });
});
document.getElementById("clear-cart").addEventListener("click", () => {
    localStorage.removeItem("cart");
    alert("Cart cleared!");
    location.reload();
});
