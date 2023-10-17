window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var topButton = document.getElementById("topButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function scrollTopFunction() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para outros navegadores
}
