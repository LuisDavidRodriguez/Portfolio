/* eslint-disable no-plusplus */
const modalProject = document.querySelector('#modalProject');
const modalProjectClose = document.querySelector('#projectCloseButton');
let storiesButton = null;

const arrProjects = [
  {
    name: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    img: 'images/placeholder_big.png',
    technologies: ['Css', 'html', 'Bootstrp', 'Ruby'],
    linkToLive: 'https://www.youtube.com/watch?v=gFCYbsZE5Gw',
    linkToSource: 'https://github.com/LuisDavidRodriguez/Portfolio',
  },
  {
    name: 'RPM governor',
    description: 'Its principal aim is read the RPM of the engine also the temperature, the status of the lights, the voltage of the battery and by consequence the health of the Alternator,  whether the RPM surpass 3000RPM the system produce an alarm alerting to the driver, if the driver carry on and the engine transgress 3250 RPM the system open a relay and turn off the engine.\n\nI designed the electronic board, chose and order each of one the electronic components, send the GERBER files to china and assemble the components by hand by myself. I also wrote all the software on C++ and in a very basic IDE witch is Arduino IDE at the end it was being my first approach to the marvelous and endless programing world. Im working in the new version because Im looking forward a Patent.',
    img: 'images/projects/RPM_principal.jpg',
    technologies: ['C++', 'Eagle software', 'JLCPCB'],
    linkToLive: 'https://www.youtube.com/watch?v=bgHtr_pt5h8',
    linkToSource: 'https://github.com/LuisDavidRodriguez/RPMgobernor',
  },
  {
    name: 'Kaliope Android app',
    description: 'Android App for the workers, this app is published in the Play Store Mexico under my developer account.\n This app include an inventory management system, manage the clients of each worker, it can operate in online and offline mode, it make use of the GPS and portray in an instance of googleMap API the location of the worker and the location in the city of each client, their status with a pushpin, name and a polygon like a digital fence. If a new client is open the location is saved on the phone displayed on the map and send to the company server. The worker deliver new goods receive the payments and establish connection with a Bluetooth receipt printer to hand in the receipt to the client while all the data is saved in a SQLite table, the inventory increase or decrease, if the phone has internet connection send the data to the server, if not once the worker arrive to the warehouse and the app detects WIFI the app synchronizes automatically the data. In an old version of this app I add a QRCode Scaner with the Zxing library.',
    img: 'images/projects/kaliope_agentes.png',
    technologies: ['Java', 'PHP', 'MySQLite'],
    linkToLive: 'https://play.google.com/store/apps/details?id=mx.kaliope.luisda&hl=es_MX',
    linkToSource: 'https://bitbucket.org/david5048/kaliopeagentesandroid/src/master/',
  },
  {
    name: 'CNC Plasma cutter',
    description: 'It is a CNC plasma cutter it has 3 axis and use PAPs motors, was designed enterely in solidWorks and printend some pieces in 3d prindre, it use arduido and cnc shield with conected into fusion360 manofacturing solidWorks pieces I desing and made in SolidWorks a CNC machine, its heart was arduino and the CNC shield, with a plasma torch attached to its Z axis. It uses PAPs motors, drivers, StopLimit switches, and pices made from 3D printer. I made it because I had to make another machine made 100% from metal, thereby I needed something that allow me to cut with precision from my SolidWorks and fusion360 designs. I was acquainted with PAP motors an electronics because in highschool I studied Mecatronics, I made as final project a robotic arm. I applied to the IPN University (one of the most recogniced public universities in Mexico) Lo and behold I found out that I chose the wrong carrier, Industrial Engenering, pritty dull, so I studied only 1 semester there and returned to work in the pretty little family company because also we didn\'t have too much money in that time. There is where all this history start.',
    img: 'images/projects/plasma.png',
    technologies: ['SolidWorks', 'Fusion360', 'GRBL'],
    linkToLive: 'https://github.com/LuisDavidRodriguez',
    linkToSource: 'https://github.com/LuisDavidRodriguez',
  },
  {
    name: 'Kaliope Android  store',
    description: 'Android App Kaliope Clientes pedidos, This app is available in Play Store Mexico under my developer account. This app was released the previous year, it is an Store where the clients of the company can sing in see all the products with pictures displayed on a recyclerview, using the library "Glide", add items to their car look when their product will arrive, delete and submit their order sending the information to the company server the server modify the stock quantity of each product, another important feature is that this app also is allowed to work in offline mode, when there is no internet connection, it changes automatically to Offline mode and now all the images are showed from the Glide Cache with the URL stored on a xml file created by a Shared Preferences instance. In the server with PHP the information is received managed and stored in the tables Related with this app I developed "Kaliope Almacen Pedidos" which connect with the server and my php files to retrieve the data, the employees in the warehouse can visualize the information seeing the clients data, the products, deliver date, the branch of the company the package belonged to, afterwards they are able to tick each product make the package and pressing the button "print label" the app establish a Bluetooth connection with a adeshive labels Chinese printer zJing, print all the data in a adhesive label including a QR code, finalizing the order, pushing the information into the server, and now the client can see if its order is ready to be delivered. ',
    img: 'images/projects/kaliope_clientes.png',
    technologies: ['Java', 'PHP', 'SQL'],
    linkToLive: 'https://play.google.com/store/apps/details?id=com.kaliopeDavid.kaliopeclientespedidos&hl=es_MX',
    linkToSource: 'https://bitbucket.org/david5048/appclientesandroid/src/master/',
  },
  {
    name: 'Automovile GPS',
    description: 'Kaliope was buying GPS from china to monitor its fleet, when the Pandemic broke out the Chinese platform broke down. Thus It was impossible view and follow the cars, so I though, wouldn\'t be great if I could design my owns GPS add and personalize them with some special features that the company will need? So I started to figure out, looking for all the information in internet, learning copious information, and muster all the components needed. It takes me about 4 months and a lot of prototypes. I design the circuit board, wrote all the code now in Visual Studio with the Visual-micro plugin, that IDE in contrast with the very basic Arduino IDE allowed me to outstrip my first approach I made with the "RPM Governor system", I learned a lot and now I was able to understand the familiarities and differences between each language how C++ manage its header files and source files, class declarations, inheritance, polymorphism, the differences between variabless demeanor, how an array works a little different in java php or c++, that indeed I need to clear from the memory an array when it would not be used any more. The difference between pointers and pass a variable through reference or its explicit position in the memory, why one char array was full of junky bits when it was being used in another method.',
    img: 'images/projects/gps_project.jpg',
    technologies: ['C++', 'At328', 'At2560', 'Sim808'],
    linkToLive: 'https://github.com/LuisDavidRodriguez',
    linkToSource: 'https://bitbucket.org/david5048/gpsarduino-2/src/master/',
  },
  {
    name: 'Automovile Acelerometer',
    description: 'Accelerometer sensor and flow sensor. This is another software and hardware related to the GPS system, I add this feature because the drivers has a totally careless driving way, so the vehicles were being regularly struck with rocks or another obstacles resulting in staggering maintenance bills for the company. Now each car has a Accelerometer sensor, which is read by a microcontroler each 10ms, when the G-forces goes out from certain levels the software convert the analog lecture to a digital value and categorize the lecture according to one given scale',
    img: 'images/projects/acelerometer.png',
    technologies: ['C++', 'PHP', 'SQL', 'Eagle'],
    linkToLive: 'https://github.com/LuisDavidRodriguez',
    linkToSource: 'https://bitbucket.org/david5048/acelerometrodefinitivo/src/master/',
  }];

function populateModal(number, arr = arrProjects) {
  const modalProjectTitle = modalProject.querySelector('h3');
  const modalProjectList = modalProject.querySelector('ul');
  const modalProjectImage = modalProject.querySelector('img');
  const modalProjectDescription = modalProject.querySelector('p');
  const modalProjectSeeLiveBtn = modalProject.querySelector('#seeLiveBtn');
  const modalProjectSeeSourceBtn = modalProject.querySelector('#seeSourceBtn');

  const project = arr[number];
  modalProjectTitle.innerText = project.name;
  modalProjectDescription.innerText = project.description;
  modalProjectImage.src = project.img;
  modalProjectSeeLiveBtn.setAttribute('href', project.linkToLive);
  modalProjectSeeSourceBtn.attributes.href.nodeValue = project.linkToSource;

  // add dinamically the li elements into the list
  modalProjectList.innerHTML = '';
  project.technologies.forEach((item) => {
    const element = document.createElement('li');
    element.innerText = item;
    element.classList.add('tec-modal');
    modalProjectList.append(element);
  });
}

function createProjects(arr = arrProjects) {
  const parent = document.querySelector('#principalProjectSection');

  for (let i = 1; i < arr.length; i++) {
    // eslint-disable-next-line object-curly-newline
    const { name, description, img, technologies } = arr[i];
    const container = document.createElement('article');
    container.classList.add('project-container');
    const liElements = technologies.map((item) => `<li class="tec">${item}</li>`);

    container.innerHTML = `<div>
    <h2 class="project-subtitle">${name}</h2>
    <p class="project-paragraph">${`${description.substring(0, 100)}...`}</p>
    <ul class="stories-technologies">${liElements.join('')}</ul>    
    </div>
    <a id="buttonProject${i}" href="#" class="button">See Project</a>`;

    container.style.background = `url(${img}) 50% 50% no-repeat`;
    container.style.backgroundSize = 'auto 100%';
    parent.append(container);
  }
}

function populateStories(arr = arrProjects) {
  const storiesSection = document.querySelector('.stories-container');
  // eslint-disable-next-line object-curly-newline
  const { name, description, img, technologies } = arr[0];
  const liElements = technologies.map((item) => `<li class="sto">${item}</li>`);

  storiesSection.innerHTML = `<img
  class="stories-img" alt="Is shown an image of a yoga project page" src="${img}"/>
  <article class="stories-info">
    <h2 class="stories-subtitle">${name}</h2>
    <p class="stories-paragraph">${`${description.substring(0, 400)}...`}</p>
    <ul class="stories-technologies">${liElements.join('')}</ul>
    <a id="buttonStories" href="#" class="button">See Project</a>
  </article>`;

  // eslint-disable-next-line no-use-before-define
  storiesListener();
}

function storiesListener() {
  storiesButton = document.querySelector('#buttonStories');
  storiesButton.addEventListener('click', (event) => {
    modalProject.style.display = 'flex';
    event.preventDefault();
    populateModal(0, arrProjects);
  });
}

document.addEventListener((event) => {
  const targetId = event.target.id;
  console.log(event.type);
  const regex = /(?<=buttonProject)\d+$/; // regex to match the las number at the end all my projects buttons has is number at the end
  if (regex.test(targetId)) {
    // if the button presed any project we get the number and use that number to populate the modal
    event.preventDefault();
    const match = targetId.match(regex)[0];
    modalProject.style.display = 'flex';
    populateModal(match, arrProjects);
  }
}, false);

modalProjectClose.addEventListener('click', () => {
  modalProject.style.display = 'none';
});

export { populateStories, createProjects };