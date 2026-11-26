const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

// Function to update the total price
function updateTotalPrice(amount) {
    totalPrice += amount;
    totalPriceSpan.textContent = totalPrice.toFixed(2);
}

cart.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-btn")) {
        const item = event.target.closest("li")
        const price = parseFloat(item.dataset.price);
        updateTotalPrice(-price);
        item.remove()
    }
})

addProductButton.addEventListener("click", () => {

    // Get product name and price
    const productName = productNameInput.value.trim();

    const productPrice = parseFloat(productPriceInput.value);

    // Validate product name
    if (productName === "") {

        alert("Please enter a product name.");

        return;
    }

    // Validate product price
    if (!Number.isFinite(productPrice) || productPrice < 0.01) {

        alert("Please enter a valid product price.");

        return;
    }

    // Round the price to two decimal places
    const price = Number(productPrice.toFixed(2));

    // Create a new list item
    const li = document.createElement("li");

    li.classList.add("cart-item");

    // Store product price
    li.dataset.price = price;

    // Create product details
    const productDetails = document.createElement("span");

    productDetails.textContent = `${productName} - $${price.toFixed(2)}`;

    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove-btn")
    removeBtn.innerText = "Remove"

    // Append elements to list item
    li.appendChild(productDetails);

    li.appendChild(removeBtn);

    // Append list item to shopping cart
    cart.appendChild(li);

    // Update total price
    updateTotalPrice(price);

    productNameInput.value = ""
    productPriceInput.value = ""
    productNameInput.focus()

})
