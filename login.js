const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".toggle-password");

togglePassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.setAttribute("name", "eye-off-outline");
  } else {
    passwordField.type = "password";
    togglePassword.setAttribute("name", "eye-outline");
  }
});
