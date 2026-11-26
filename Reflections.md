# Lab 1: Dynamic Content Creation - Reflection

## 1. How did you dynamically create and append new elements to the DOM?

I used `document.createElement()` to create a list item,
a span for the product name and price, and a Remove button.
I used `textContent` to display the product details and
`classList.add()` to assign CSS classes. Then, I used
`appendChild()` to add the span and button to the list item
and append the list item to the shopping cart.

## 2. What steps did you take to ensure accurate updates to the total price?

I used `parseFloat()` to convert the product price into
a number and rounded it to two decimal places. I stored
the price in the list item's `data-price` attribute.

I created an `updateTotalPrice()` function to add the price
when a product was added and subtract it when a product
was removed. I used `toFixed(2)` to display the total
with two decimal places.

## 3. How did you handle invalid input for product name or price?

I used `trim()` to remove extra spaces from the product
name and checked whether it was empty. I used
`Number.isFinite()` to check whether the price was a
valid finite number and made sure it was at least $0.01.

If either input was invalid, I displayed an alert and
used `return` to stop the product from being added.

## 4. What challenges did you face when implementing the remove functionality?

One challenge I faced was identifying the correct product
and retrieving its price when the Remove button was clicked.
Initially, I had difficulty accessing the price from a
sibling element.

I simplified this by storing the price directly on the
list item using `dataset.price`. I used event delegation
to identify clicks on Remove buttons and `closest("li")`
to find the correct list item.

Then, I subtracted its price from the total and used
`remove()` to delete the item from the cart.