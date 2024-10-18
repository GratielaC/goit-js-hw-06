// Initialize counter value
let counterValue = 0;

// Select the span element that displays the counter value
const valueSpan = document.querySelector('#value');

// Select the increment and decrement buttons
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

// Function to update the displayed value
const updateValueDisplay = () => {
  valueSpan.textContent = counterValue;
};

// Add click event listener to the increment button
incrementBtn.addEventListener('click', () => {
  counterValue += 1; // Increment the counter value
  updateValueDisplay(); // Update the displayed value
});

// Add click event listener to the decrement button
decrementBtn.addEventListener('click', () => {
  counterValue -= 1; // Decrement the counter value
  updateValueDisplay(); // Update the displayed value
});
