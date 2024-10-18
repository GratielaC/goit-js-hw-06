// Select the input element
const validationInput = document.querySelector('#validation-input');

// Add event listener for the blur event
validationInput.addEventListener('blur', () => {
  // Get the required length from the data-length attribute
  const requiredLength = Number(validationInput.getAttribute('data-length'));

  // Check if the length of the input value matches the required length
  if (validationInput.value.length === requiredLength) {
    // Add the 'valid' class and remove 'invalid' class if the length is correct
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    // Add the 'invalid' class and remove 'valid' class if the length is incorrect
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});
