let barsButton = document.querySelector(".navbar-bars");
let navbarList = document.querySelector(".navbar-list");
let header = document.querySelector("#header-a");
let cocktails = document.querySelector("#cocktails-a");
let team = document.querySelector("#team-a");
let food = document.querySelector("#food-a");
let promotions = document.querySelector("#promotions-a");
let contact = document.querySelector("#contact-a");

barsButton.addEventListener("click", ()=>{
    navbarList.classList.toggle("navbar-list-visible")
});
header.addEventListener("click", ()=>{
    navbarList.classList.toggle("navbar-list-visible")
});
cocktails.addEventListener("click", ()=>{
    navbarList.classList.toggle("navbar-list-visible")
});
team.addEventListener("click", ()=>{
    navbarList.classList.toggle("navbar-list-visible")
});
food.addEventListener("click", ()=>{
    navbarList.classList.toggle("navbar-list-visible")
});
promotions.addEventListener("click", ()=>{
    navbarList.classList.toggle("navbar-list-visible")
});
contact.addEventListener("click", ()=>{
    navbarList.classList.toggle("navbar-list-visible")
});