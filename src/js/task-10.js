// Function to generate a random hex color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Function to create boxes
function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes'); // Get the boxes container
  const boxes = []; // Initialize an array to hold the created boxes

  for (let i = 0; i < amount; i++) {
    // Calculate dimensions for the current box
    const size = 30 + i * 10; // Starting at 30px, increasing by 10px each time
    const box = document.createElement('div'); // Create a new div element
    box.style.width = `${size}px`; // Set the width
    box.style.height = `${size}px`; // Set the height
    box.style.backgroundColor = getRandomHexColor(); // Set random background color
    boxes.push(box); // Add the box to the boxes array
  }

  boxesContainer.append(...boxes); // Append all boxes to the container in one operation
}

// Function to destroy boxes
function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Clear the content of the boxes container
}

// Select the create and destroy buttons
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input[type="number"]');

// Add click event listener for the Create button
createButton.addEventListener('click', () => {
  const amount = Number(input.value); // Get the value from the input
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); // Call createBoxes with the specified amount
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

// Add click event listener for the Destroy button
destroyButton.addEventListener('click', destroyBoxes); // Call destroyBoxes on click
