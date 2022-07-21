/**
 * created by Luis David Rodriguez Valades
 * 21/07/2022
 */
const LOCAL_STORAGE = 'localStorage';
const FORM_DATA = 'form';
const KEY_NAME = 'name';
const KEY_EMAIL = 'email';
const KEY_COMMENTS = 'comments';

const formData = { [KEY_NAME]: '', [KEY_EMAIL]: '', [KEY_COMMENTS]: '' };

/**
 * If is the first time the software run in one browser load the default data
 * if not you will have an exeption
 */
function setUp() {
  if (localStorage.getItem(FORM_DATA) === null) {
    localStorage.setItem(FORM_DATA, JSON.stringify(formData));
  }
}

/**
 * You must ask if the browser support the localStorage before use it
 * this function also set up the initial values
 * @param {*} type string
 * @returns Boolean if the browser supports local storage
 */
function storageAvailable(type = LOCAL_STORAGE) {
  let storage;
  try {
    storage = window[type];
    const test = '__storage_test__';
    storage.setItem(test, test);
    storage.removeItem(test);
    setUp();
    return true;
  } catch (exeption) {
    return exeption instanceof DOMException
      && (exeption.code === 22 || exeption.code === 1014 || exeption.name === 'QuotaExceededError' || exeption.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && (storage && storage.length !== 0);
    /* the code 22 check everything exept firefox
    the code 1014 check firefox
    we also need to check for the name because sometimes the code is not present
    everithing exept firefox  QuotaExceededError
    firefox NS_ERROR_DOM_QUOTA_REACHED
    this last part has not sunk in my mind yet :(
    acknowledge QuotaExceededError only if there's something already stored */
  }
}

/**
 * Save the values
 * @param {*} name
 * @param {*} mail
 * @param {*} comments
 */
function setFormStorage(name, mail, comments) {
  formData[KEY_NAME] = name;
  formData[KEY_EMAIL] = mail;
  formData[KEY_COMMENTS] = comments;
  localStorage.setItem(FORM_DATA, JSON.stringify(formData));
}

/**
 * Retreive the data
 * @param {*} key the key of the data you want to recover
 * @returns object
 */
function getStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export {
  storageAvailable,
  FORM_DATA, KEY_NAME, KEY_EMAIL, KEY_COMMENTS,
  getStorage,
  setFormStorage,
};