// Function to generate a random hex color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Select the button and the color display span
const changeColorButton = document.querySelector('.change-color');
const colorDisplay = document.querySelector('.color');

// Add click event listener to the button
changeColorButton.addEventListener('click', () => {
  // Get a random color
  const newColor = getRandomHexColor();

  // Change the background color of the body
  document.body.style.backgroundColor = newColor;

  // Update the color display span
  colorDisplay.textContent = newColor;
});
