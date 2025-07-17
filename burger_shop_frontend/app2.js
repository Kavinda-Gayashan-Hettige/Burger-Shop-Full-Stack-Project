document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get user inputs
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMessage = document.getElementById("error-message");

  // Get stored credentials
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  // Validate credentials
  if (username === storedUsername && password === storedPassword) {
    alert("Login successful!");
    errorMessage.textContent = ""; // Clear any error message
    window.location.href = "index.html"; // Redirect to dashboard
  } else {
    errorMessage.textContent = "Invalid username or password. Please try again.";
  }
});
