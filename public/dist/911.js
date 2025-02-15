// Seleciona os elementos do DOM
const carouselImages = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const buyButton = document.getElementById('buy-button');
const homeButton = document.getElementById('home');
let currentIndex = 0;
// Função para mostrar a imagem atual
function showImage(index) {
    carouselImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}
showImage(currentIndex); // Exibe a primeira imagem ao carregar a página
// Eventos para navegação no carrossel
prevBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselImages.length - 1;
    showImage(currentIndex);
});
nextBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex < carouselImages.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});
// Evento para o botão de compra
buyButton?.addEventListener('click', () => {
    window.location.href = "carrinho.html";
});
// Evento para o botão "Home"
homeButton?.addEventListener('click', () => {
    window.location.href = "index.html";
});
"";
