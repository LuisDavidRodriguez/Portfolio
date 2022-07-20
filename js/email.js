const mailInput = document.querySelector('[type=email]');
const mailError = document.querySelector('.message');
const form = document.querySelector('#contactForm');


function showError(message) {
  mailInput.className = ('invalid');
  mailInput.setCustomValidity(message);
  mailInput.reportValidity();

  mailError.textContent =  message;
  mailError.classList.add('error');
}

function checkFormatMail (input) {
  console.log(input);
  let regex = /.+@(hotmail.com|gmail.com|yahoo.com)/;
  let regexCapital = /[A-Z]/g;

  if(input == '') {
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

export default function mailValidation () { 
  form.addEventListener('submit', (event) => {

    event.preventDefault();
    let value = mailInput.value.trim();

    if (checkFormatMail(value)){
      form.submit();
      mailError.classList.add('success');
      mailError.innerHTML = '<i class="fa-solid fa-circle-check"></i> Sending Form';
    }
});
}


  mailInput.addEventListener('input', () => {
    // each time the user introduce something
    console.log(mailInput.value);
    mailInput.setCustomValidity('');
    mailInput.classList.remove('invalid');
    mailError.textContent = '';
    mailError.classList.remove('error');
    mailError.classList.remove('success');
  });


