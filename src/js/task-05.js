// Select the input and output elements
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Add an event listener for the input event on the nameInput
nameInput.addEventListener('input', () => {
  // If the input is not empty, update the span with the input value
  // Otherwise, display "Anonymous"
  nameOutput.textContent = nameInput.value.trim() !== '' ? nameInput.value : 'Anonymous';
});
