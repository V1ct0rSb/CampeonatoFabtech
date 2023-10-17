const cards = document.querySelectorAll(".card-slider");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
let currentIndex = 0;

// Função para avançar para o próximo cartão
function goToNextCard() {
  cards[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % cards.length;
  cards[currentIndex].classList.add("active");
}

// Adicione um temporizador para avançar a cada 5 segundos
const autoAdvanceInterval = 5000; // 5 segundos
let autoAdvanceTimer = setInterval(goToNextCard, autoAdvanceInterval);

// Adicione manipuladores de eventos para parar o temporizador quando os botões são clicados
prevButton.addEventListener("click", () => {
  clearInterval(autoAdvanceTimer); // Pare o temporizador
  goToNextCard(); // Avance para o próximo cartão
  autoAdvanceTimer = setInterval(goToNextCard, autoAdvanceInterval); // Inicie o temporizador novamente
});

nextButton.addEventListener("click", () => {
  clearInterval(autoAdvanceTimer); // Pare o temporizador
  goToNextCard(); // Avance para o próximo cartão
  autoAdvanceTimer = setInterval(goToNextCard, autoAdvanceInterval); // Inicie o temporizador novamente
});

// Inicie o primeiro cartão como ativo
cards[currentIndex].classList.add("active");
