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

const arrProjects = [
  {'name': 'Multi-Post Stories',
   'description': 'this is the project one',
   'img':'images/projects/projects16',
   'technologies':['html', 'Bootstrap', 'Ruby and Race'],
   'linkToLive': 'https://github.com/sntgopl/sntgopl.github.io',
   'linkToSource': 'https://github.com/sntgopl/Porfolio'
  },
  {'name': 'Professional Art Printing Data',
   'description': 'this is the project Two',
   'img':'images/projects/projects16',
   'technologies':['html', 'Bootstrap', 'Ruby and Race'],
   'linkToLive': 'https://github.com/sntgopl/sntgopl.github.io',
   'linkToSource': 'https://github.com/sntgopl/Porfolio'
  },
  {'name': 'Data Dashboard Healthcare',
  'description': 'this is the project Three',
  'img':'images/projects/projects16',
  'technologies':['html', 'Bootstrap', 'Ruby and Race'],
  'linkToLive': 'https://github.com/sntgopl/sntgopl.github.io',
  'linkToSource': 'https://github.com/sntgopl/Porfolio'
 },
 {'name': 'Website Protfolio',
  'description': 'this is the project Fourth',
  'img':'images/projects/projects16',
  'technologies':['html', 'Bootstrap', 'Ruby and Race'],
  'linkToLive': 'https://github.com/sntgopl/sntgopl.github.io',
  'linkToSource': 'https://github.com/sntgopl/Porfolio'
},
{'name': 'Profesional Art Printing Data More',
  'description': 'this is the project five',
  'img':'images/projects/projects16',
  'technologies':['html', 'Bootstrap', 'Ruby and Race'],
  'linkToLive': 'https://github.com/sntgopl/sntgopl.github.io',
  'linkToSource': 'https://github.com/sntgopl/Porfolio'
},
{'name': 'Data Dashboard Healthcare',
 'description': 'this is the project six',
 'img':'images/projects/projects16',
 'technologies':['html', 'Bootstrap', 'Ruby and Race'],
 'linkToLive': 'https://github.com/sntgopl/sntgopl.github.io',
 'linkToSource': 'https://github.com/sntgopl/Porfolio'
},
{'name': 'Website Protfolio',
 'description': 'this is the project seven',
 'img':'images/projects/projects16',
 'technologies':['html', 'Bootstrap', 'Ruby and Race'],
 'linkToLive': 'https://github.com/sntgopl/sntgopl.github.io',
 'linkToSource': 'https://github.com/sntgopl/Porfolio'
}    
];

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

workButton.addEventListener('click', () => {
  projectPup.style.display = 'flex';
  
});

projectButton1.addEventListener('click', () => {
  projectPup.style.display = 'flex';
});

projectButton2.addEventListener('click', () => {
  projectPup.style.display = 'flex';
});

projectButton3.addEventListener('click', () => {
  projectPup.style.display = 'flex';
});

projectButton4.addEventListener('click', () => {
  projectPup.style.display = 'flex';
});

projectButton5.addEventListener('click', () => {
  projectPup.style.display = 'flex';
});

projectButton6.addEventListener('click', () => {
  projectPup.style.display = 'flex';
});

pupClose.addEventListener('click', () => {
  projectPup.style.display = 'none';
});