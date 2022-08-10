let bars = document.querySelector(".bars");
let navbarLinks = document.querySelector(".navbarLinks");

let inicio = document.querySelector("#inicio");
let sobreNosotros = document.querySelector("#sobreNosotros");
let comidas = document.querySelector("#comidas");
let tragos = document.querySelector("#tragos");
let contacto = document.querySelector("#contacto");

bars.addEventListener("click", () => {
    navbarLinks.classList.toggle("navbarToggle");
})

inicio.addEventListener("click", () => {
    navbarLinks.classList.toggle("navbarToggle");
})
sobreNosotros.addEventListener("click", () => {
    navbarLinks.classList.toggle("navbarToggle");
})
comidas.addEventListener("click", () => {
    navbarLinks.classList.toggle("navbarToggle");
})
tragos.addEventListener("click", () => {
    navbarLinks.classList.toggle("navbarToggle");
})
contacto.addEventListener("click", () => {
    navbarLinks.classList.toggle("navbarToggle");
})

let nachosChingonesToggle = false;
let nachosChingonesButton = document.querySelector("#nachosChingones");
nachosChingonesButton.addEventListener("click", () => {
    let nachosChingonesText = document.querySelector(".nachosChingones");
    if (nachosChingonesToggle === false) {
        nachosChingonesText.innerHTML = "Montaña de nachos preparada con tortillas caseras y servida con salsa de queso, guacamole y frijoles re fritos";
        nachosChingonesToggle = true;
    } else {
        nachosChingonesText.innerHTML = "";
        nachosChingonesToggle = false;
    }
})