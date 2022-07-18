const body = document.body;
const modal = document.querySelector("#menuModal");
const burger = document.querySelector("#navBurger");
const closeButton = document.querySelector("#closeButton");
const menuOptions = document.querySelector("#menuList");

burger.addEventListener('click', ()=>{
    modal.classList.add('open-menu');
    modal.classList.remove('close-menu');
    modal.style.display = "block";
});

closeButton.addEventListener('click', ()=>{
    modal.classList.add('close-menu');
    modal.classList.remove('open-menu');
    setTimeout(()=>{
        modal.style.display = "none";
    }, 500);
})

menuOptions.addEventListener('click', ()=>{
    modal.style.display = "none";
});