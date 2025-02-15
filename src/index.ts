const audiBuy = document.getElementById("card-price-tt");
if (audiBuy) {
  audiBuy.addEventListener("click", () => {
    window.location.href = "audiBuy.html";
  });
}

const bmwx1Buy = document.getElementById("card-price-x1");
if (bmwx1Buy) {
  bmwx1Buy.addEventListener("click", () => {
    window.location.href = "bmwx1.html";
  });
}

const z4Buy = document.getElementById("card-price-z4");
if (z4Buy) {
  z4Buy.addEventListener("click", () => {
    window.location.href = "z4.html";
  });
}

const porscheBuy = document.getElementById("card-price-911");
if (porscheBuy) {
  porscheBuy.addEventListener("click", () => {
    window.location.href = "911.html";
  });
}


const selectPreco = document.getElementById("preco") as HTMLSelectElement | null;
const cardContainer = document.querySelector(".card-container"); // Ajuste para garantir que os cards estão dentro do mesmo container
const carListt = document.querySelectorAll(".card-container > div"); // Seleciona os cards diretamente dentro do container

if (selectPreco && cardContainer) {
    selectPreco.addEventListener("change", () => {
        const cars = Array.from(carListt) as HTMLDivElement[];
        const order = selectPreco.value; // "0" para menor preço, "1" para maior preço

        cars.sort((a, b) => {
            const priceA = parseInt(a.dataset.price || "0");
            const priceB = parseInt(b.dataset.price || "0");

            return order === "0" ? priceA - priceB : priceB - priceA;
        });

        // Remove todos os cards do container e os adiciona na nova ordem
        cardContainer.innerHTML = "";
        cars.forEach(car => cardContainer.appendChild(car));
    });
}




