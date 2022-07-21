import * as storage from './dataStorage.js';

const storageAvailable = storage.storageAvailable();
const nameInput = document.querySelector('#name');
const mailInput = document.querySelector('[type=email]');
const textArea = document.querySelector('#comments');
const mailError = document.querySelector('.message');
const form = document.querySelector('#contactForm');

(() => {
  if (!storageAvailable) return;
  const data = storage.getStorage(storage.FORM_DATA);
  nameInput.value = data[storage.KEY_NAME];
  mailInput.value = data[storage.KEY_EMAIL];
  textArea.value = data[storage.KEY_COMMENTS];
})();

function showError(message) {
  mailInput.className = ('invalid');
  mailInput.setCustomValidity(message);
  mailInput.reportValidity();

  mailError.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${message}`;
  mailError.classList.add('error');
}

function checkFormatMail(input) {
  const regex = /.+@(hotmail.com|gmail.com|yahoo.com)/;
  const regexCapital = /[A-Z]/g;

  if (input === '') {
    showError('please enter an email');
    return false;
  }

  if (regexCapital.test(input)) {
    showError('Your email should be in low letters');
    return false;
  }

  if (!regex.test(input)) {
    showError('the email should include @hotmail.com  @gmail.com  @yahoo.com');
    return false;
  }

  return true;
}

mailInput.addEventListener('input', () => {
  // each time the user introduce something
  mailInput.setCustomValidity('');
  mailInput.classList.remove('invalid');
  mailError.textContent = '';
  mailError.classList.remove('error');
  mailError.classList.remove('success');
});

form.addEventListener('input', () => {
  if (storageAvailable) {
    storage.setFormStorage(nameInput.value, mailInput.value, textArea.value);
  }
});

export default function mailValidation() {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = mailInput.value.trim();

    if (checkFormatMail(value)) {
      form.submit();
      mailError.classList.add('success');
      mailError.innerHTML = '<i class="fa-solid fa-circle-check"></i> Sending Form';
    }
  });
}
