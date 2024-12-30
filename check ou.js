document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const checkoutItemsContainer = document.getElementById("checkout-items");

    if (cart.length === 0) {
        checkoutItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("checkout-item");

        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100px;">
            <p>${item.name}</p>
            <p>£${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
        `;

        checkoutItemsContainer.appendChild(itemElement);
    });

    // Clear Cart Button
    document.getElementById("clear-cart").addEventListener("click", () => {
        localStorage.removeItem("cart");
        alert("Cart cleared!");
        location.reload();
    });
});
