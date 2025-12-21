function signUp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  const user = { name, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Sign up successful!");
  window.location.href = "signin.html";
}

function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser || email !== storedUser.email || password !== storedUser.password) {
    alert("Invalid credentials");
    return;
  }

  alert("Login successful!");
  window.location.href = "index.html";
}
