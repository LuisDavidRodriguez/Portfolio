const modal = document.querySelector('#menuModal');
const burger = document.querySelector('#navBurger');
const closeButton = document.querySelector('#closeButton');
const menuOptions = document.querySelector('#menuList');
const workButton = document.querySelector('#workSeeBtn');
const projectPup = document.querySelector('#popUp');
const projectButton1 = document.querySelector('#projectBtn1');
const pupClose = document.querySelector('#popUpCloseButton');
const pTitle = document.querySelector('#popUpTitle');
const pTech1 = document.querySelector('#popUpTech1');
const pTech2 = document.querySelector('#popUpTech2');
const pTech3 = document.querySelector('#popUpTech3');
const pTech4 = document.querySelector('#popUpTech4');
const pImg = document.querySelector('#popUpImg');
const pTxt = document.querySelector('#popUpDesc');
const pBtnLive = document.querySelector('#popUpLive');
const pBtnSource = document.querySelector('#popUpSource');

burger.addEventListener('click', () => {
  modal.classList.add('open-menu');
  modal.classList.remove('close-menu');
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.classList.add('close-menu');
  modal.classList.remove('open-menu');
  setTimeout(() => {
    modal.style.display = 'none';
  }, 500);
});

menuOptions.addEventListener('click', () => {
  modal.style.display = 'none';
});