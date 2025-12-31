function handleContactForm() {
  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  // Validation
  if (name === "" || email === "" || message === ""|| phone === "" ) {
    alert("Please fill all fields");
    return false;
  }
  if (!/^[6-9]\d{9}$/.test(phone)) {
    alert("Enter a valid 10-digit phone number");
    return false;
  }

  // Create content for document
  const content =
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    `Message: ${message}\n` +
    `phNo: ${phone}\n` +
    `------------------------\n`;

  // Create a text file
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  // Auto-download file
  const a = document.createElement("a");
  a.href = url;
  a.download = "contact_messages.txt";
  a.click();

  URL.revokeObjectURL(url);

  alert("Message saved successfully!");
   // Clear form after submit
  document.getElementById("contactForm").reset();

  // Show thank you message
  document.getElementById("thankYouMsg").style.display = "block";
  return false; // prevent page refresh

}

function clearForm() {
  document.getElementById("contactForm").reset();

  // Show Thank You message
  document.getElementById("thankYouMsg").style.display = "block";
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
