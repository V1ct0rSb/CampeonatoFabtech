function validateForm() {
  const passwordInput = document.getElementById("password");
  const errorMessage = document.getElementById("error-message");

  const password = passwordInput.value;

  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password);
  const isLongEnough = password.length >= 8;

  let errors = [];

  if (!hasUpperCase) {
    errors.push("Pelo menos uma letra maiúscula");
  }
  if (!hasSpecialChar) {
    errors.push("Pelo menos um caractere especial");
  }
  if (!isLongEnough) {
    errors.push("Pelo menos 8 caracteres");
  }

  if (errors.length > 0) {
    errorMessage.innerHTML =
      "Corrija os seguintes erros:<br>" + errors.join("<br>");
    errorMessage.style.marginTop = "-15px";
    errorMessage.style.marginBottom = "10px";
    errorMessage.style.color = "red";
    passwordInput.style.borderColor = "red";
    passwordInput.style.borderWidth = "3px";

    return false; // Impede o envio do formulário
  } else {
    errorMessage.innerHTML = "";
    errorMessage.style.color = "transparent";

    // Redireciona o usuário para a página de boas-vindas
    window.location.href = "welcome.html";

    return false; // Impede o envio do formulário
  }
}
