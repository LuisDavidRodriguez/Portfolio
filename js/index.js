/* eslint-disable linebreak-style */
/* eslint-disable prefer-template */
/* eslint-disable no-plusplus */
import emailValidation from './form.js';
import { populateStories, createProjects } from './projects.js';

const modal = document.querySelector('#menuModal');
const burger = document.querySelector('#navBurger');
const closeButton = document.querySelector('#closeButton');
const menuOptions = document.querySelector('#menuList');

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

populateStories();
createProjects();
emailValidation();