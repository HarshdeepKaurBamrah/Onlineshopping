let cartItems = [];

function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById("cart-items");
  cartItemsElement.innerHTML = "";
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItemsElement.appendChild(li);
  });
}

function checkout() {
  // Add checkout logic here
  alert("Thank you for your purchase!");
  cartItems = [];
  updateCart();
}
