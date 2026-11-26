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

// Function to remove an item
function removeItem(event) {
    const item = event.target.closest('li');
    const price = parseFloat(item.dataset.price);
    updateTotalPrice(-price);
    item.remove();
}

cart.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-btn")) {
        const item = event.target.closest("li")
        const price = item.querySelector("label");
        const priceToRemove = parseFloat(price.dataset.price);
        updateTotalPrice(-priceToRemove);
        item.remove()
    }
})

addProductButton.addEventListener("click", () => {

    const productName = productNameInput.value

    const productPrice = productPriceInput.value

     // Validate product name
    if (productName === "") {
        alert("Please enter a product name!");
        return;
    }

    // Validate product price
    // if (!Number.isFinite(productPrice) || productPrice <= 0) {
    //     alert("Please enter a valid product price!");
    //     return;
    //}

    const productListItem = document.createElement("li")
    productListItem.className = "cart-item"
    productListItem.innerText = productName

    const priceLabel = document.createElement("label")
    priceLabel.innerText = "$" + productPrice
    priceLabel.setAttribute('data-price', productPrice);
    productListItem.append(priceLabel)

    const removeBtn = document.createElement("button")
    removeBtn.classList.add("remove-btn")
    removeBtn.innerText = "Remove"

    productListItem.append(removeBtn)

    cart.append(productListItem)

    const price = parseFloat(productPrice);
    updateTotalPrice(price);

    productNameInput.value = ""
    productPriceInput.value = ""
    productNameInput.focus()

})
