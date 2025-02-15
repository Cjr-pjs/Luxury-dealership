// Seleciona os elementos do DOM
const carouselImages = document.querySelectorAll('.carousel img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const homeButton = document.getElementById('home');
const confirmationBox = document.getElementById('confirmation-box');
const deliveryTime = document.getElementById('delivery-time');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');
let currentIndex = 0;
// Função para mostrar a imagem atual
function showImage(index) {
    carouselImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}
showImage(currentIndex);
// Eventos para navegação no carrossel
prevBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselImages.length - 1;
    showImage(currentIndex);
});
nextBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex < carouselImages.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
});
// Evento para o botão "Comprar"
buyButton?.addEventListener('click', () => {
    if (confirmationBox && deliveryTime && overlay) {
        const randomMonths = Math.floor(Math.random() * 4) + 1;
        deliveryTime.textContent = `${randomMonths}`;
        confirmationBox.classList.remove('hidden');
        confirmationBox.classList.add('visible');
        overlay.classList.add('visible');
    }
});
// Fechar o bloco ao clicar no botão "OK"
closeBtn?.addEventListener('click', () => {
    confirmationBox?.classList.add('hidden');
    confirmationBox?.classList.remove('visible');
    overlay?.classList.remove('visible');
});
// Fechar o bloco ao clicar fora dele
overlay?.addEventListener('click', () => {
    confirmationBox?.classList.add('hidden');
    confirmationBox?.classList.remove('visible');
    overlay?.classList.remove('visible');
});
// Fechar o bloco ao pressionar a tecla "Esc"
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && confirmationBox?.classList.contains('visible')) {
        confirmationBox.classList.add('hidden');
        confirmationBox.classList.remove('visible');
        overlay?.classList.remove('visible');
    }
});
//DropDown
const dropPriceButton = document.getElementById("dropdown");
const carList = document.querySelectorAll(".card-audiTT, .card-bmwX1, .card-porsche911, .card-bmw-z4");
if (dropPriceButton) {
    dropPriceButton.addEventListener("click", () => {
        const cars = Array.from(carList);
        cars.sort((a, b) => {
            const priceA = parseInt(a.dataset.price || "0");
            const priceB = parseInt(b.dataset.price || "0");
            return priceA - priceB; // Ordena do menor para o maior preço
        });
        // Adiciona os elementos ordenados ao container principal
        const parent = cars[0].parentElement;
        if (parent) {
            cars.forEach(car => parent.appendChild(car));
        }
    });
}
