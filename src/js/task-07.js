// Select the input and span elements
const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

// Add event listener for the input event on the range input
fontSizeControl.addEventListener('input', () => {
  // Update the font-size of the text element based on the range input's value
  text.style.fontSize = `${fontSizeControl.value}px`;
});
