
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, qtyId) {
  let qty = document.getElementById(qtyId).value;
  cart.push({ name, price, qty });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

function openCart() {
  window.location.href = "cart.html";
}

window.onload = function () {
  let container = document.getElementById("cart-items");
  let total = 0;

  if (!container) return;

  cart.forEach(item => {
    let div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <span>${item.name} (x${item.qty})</span>
      <span>₹${item.price * item.qty}</span>
    `;

    container.appendChild(div);
    total += item.price * item.qty;
  });

  document.getElementById("total").textContent = total;
};

function confirmOrder() {
  alert("Order Confirmed!");
  localStorage.clear();
  window.location.href = "index.html";
}
