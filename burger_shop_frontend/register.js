document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get user inputs
  const newUsername = document.getElementById("newUsername").value.trim();
  const newPassword = document.getElementById("newPassword").value.trim();
  const errorMessage = document.getElementById("register-error-message");

  // Validate input
  if (!newUsername || !newPassword) {
    errorMessage.textContent = "All fields are required.";
    return;
  }

  // Save user data in localStorage
  localStorage.setItem("username", newUsername);
  localStorage.setItem("password", newPassword);

  alert("Registration successful! Please log in.");
  errorMessage.textContent = ""; // Clear any error message
  window.location.href = "index2.html"; // Redirect to login page
});
