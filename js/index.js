const body = document.body;
const modal = document.querySelector("#menuModal");
const burger = document.querySelector("#navBurger");
const closeButton = document.querySelector("#closeButton");
const menuOptions = document.querySelector("#menuList");

burger.addEventListener('click', ()=>{
    modal.style.display = "block";
});

closeButton.addEventListener('click', ()=>{
    modal.style.display = "none";
})

menuOptions.addEventListener('click', ()=>{
    modal.style.display = "none";
})