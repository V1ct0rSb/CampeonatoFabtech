const cards = document.querySelectorAll('.card-slider');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
    cards[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    cards[currentIndex].classList.add('active');
});

nextButton.addEventListener('click', () => {
    cards[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % cards.length;
    cards[currentIndex].classList.add('active');
});

cards[currentIndex].classList.add('active');
