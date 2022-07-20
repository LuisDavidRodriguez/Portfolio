const mailInput = document.querySelector('[type=email]');
const mailError = document.querySelector('.message');
const form = document.querySelector('#contactForm');

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
