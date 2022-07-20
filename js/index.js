const modal = document.querySelector('#menuModal');
const burger = document.querySelector('#navBurger');
const closeButton = document.querySelector('#closeButton');
const menuOptions = document.querySelector('#menuList');
const workButton = document.querySelector('#workSeeBtn');
const modalProject = document.querySelector('#modalProject');
const modalProjectClose = document.querySelector('#projectCloseButton');
const storiesButton = document.querySelector('#buttonStories');
const projectsButtons = document.querySelectorAll('#principalProjectSection .button');

const arrProjects = [
  {'name': 'Multi-Post Stories',
   'description': 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
   'img':'images/placeholder_big.png',
   'technologies':['css', 'html', 'bootstrp', 'ruby'],
   'linkToLive': 'https://www.youtube.com/watch?v=gFCYbsZE5Gw',
   'linkToSource': 'https://github.com/LuisDavidRodriguez/Portfolio'
  },
  {'name': 'RPM governor',
   'description': 'Its principal aim is read the RPM of the engine also the temperature, the status of the lights, the voltage of the battery and by consequence the health of the Alternator,  whether the RPM surpass 3000RPM the system produce an alarm alerting to the driver, if the driver carry on and the engine transgress 3250 RPM the system open a relay and turn off the engine.',
   'img':'images/projects/RPM_principal.jpg',
   'technologies':['C++', 'Eagle software', 'JLCPCB'],
   'linkToLive': 'https://www.youtube.com/watch?v=bgHtr_pt5h8',
   'linkToSource': 'https://github.com/sntgopl/Porfolio'
  },
  {'name': 'Kaliope Android app agent control',
  'description': 'this is the project Three',
  'img':'images/projects/kaliope_agentes.png',
  'technologies':['html', 'Bootstrap', 'Ruby and Race'],
  'linkToLive': 'https://play.google.com/store/apps/details?id=mx.kaliope.luisda&hl=es_MX',
  'linkToSource': 'https://play.google.com/store/apps/details?id=mx.kaliope.luisda&hl=es_MX'
 },
 {'name': 'CNC Plasma cutter',
  'description': 'It is a css plasma cutter it has 3 axis and use PAPs motors, was designed enterely in solidWorks and printend some pieces in 3d prindre, it use arduido and cnc shield with conected into fusion360 manofacturing solidWorks pieces',
  'img':'images/projects/plasma.png',
  'technologies':['html', 'Bootstrap', 'Ruby and Race'],
  'linkToLive': 'https://github.com/sntgopl/sntgopl.github.io',
  'linkToSource': 'https://github.com/sntgopl/Porfolio'
},
{'name': 'Kaliope Android App clientes',
  'description': 'This is a digital store running in android and availabe in the playstore!',
  'img':'images/projects/kaliope_clientes.png',
  'technologies':['html', 'Bootstrap', 'Ruby and Race'],
  'linkToLive': 'https://play.google.com/store/apps/details?id=com.kaliopeDavid.kaliopeclientespedidos&hl=es_MX',
  'linkToSource': 'https://play.google.com/store/apps/details?id=com.kaliopeDavid.kaliopeclientespedidos&hl=es_MX'
},
{'name': 'Automovile GPS',
 'description': 'This is a GPS based on Atmega 2560, module GPRS GPS SIM808, SD module, and another ATmega module  which also includes ',
 'img':'images/projects/gps_project.jpg',
 'technologies':['C++', 'Microcontroller', 'SIM808'],
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

populateProjects(arrProjects);

burger.addEventListener('click', (event) => {
  event.preventDefault();
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

storiesButton.addEventListener('click', (event) => {
  modalProject.style.display = 'flex';
  event.preventDefault();
  populateModal (0, arrProjects);
});

document.addEventListener('click', (event) => {
  let targetId = event.target.id;
  let regex = /(?<=buttonProject)\d+$/;       //regex to match the las number at the end all my projects buttons has is number at the end
  if (regex.test(targetId)){
    //if the button presed any project we get the number and use that number to populate the modal
    event.preventDefault();
    let match = targetId.match(regex)[0];
    modalProject.style.display = 'flex';
    populateModal (match, arrProjects);
  }
  
}, false);

modalProjectClose.addEventListener('click', () => {
  modalProject.style.display = 'none';
});

projectsButtons.forEach(button => {
  console.log(button);
});

function populateModal (number, arr) {
  const modalProjectTitle = modalProject.querySelector('h3');
  const modalProjectList = modalProject.querySelector('ul');
  const modalProjectImage = modalProject.querySelector('img');
  const modalProjectDescription = modalProject.querySelector('p');
  const modalProjectSeeLiveBtn = modalProject.querySelector('#seeLiveBtn');
  const modalProjectSeeSourceBtn = modalProject.querySelector('#seeSourceBtn');

  let project = arr[number];
  modalProjectTitle.innerText = project.name;
  modalProjectDescription.innerText = project.description;
  modalProjectImage.src = project.img;
  modalProjectSeeLiveBtn.setAttribute('href', project.linkToLive);
  modalProjectSeeSourceBtn.attributes.href.nodeValue = project.linkToSource;
  
  //add dinamically the li elements into the list
  modalProjectList.innerHTML = '';
  project.technologies.forEach(item => {
    const element = document.createElement('li');
    element.innerText = item;
    element.classList.add ('sto');
    modalProjectList.append(element);
  });
}

function populateProjects (arr) {
  const allTheProjects = document.querySelectorAll(".project-container");
  let iterator = 1;

  allTheProjects.forEach(projectContainer => {
    const data = arr[iterator];
    const title = projectContainer.querySelector('h2');
    const description = projectContainer.querySelector('p');
    const list = projectContainer.querySelector('ul');

    title.innerText = data.name;
    description.innerText = data.description.substring(0, 100) + '...';
    projectContainer.style.background = `linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4)),  url('${data.img}') 50% 50% no-repeat`;
    list.innerHTML = '';

    //populate the list with the tecnologies
    data.technologies.forEach(tec => {
      let tecnologie = document.createElement('li');
      tecnologie.innerText = tec;
      tecnologie.classList.add('tec');
      list.append(tecnologie);
    });
    
    iterator++;
  });

};
