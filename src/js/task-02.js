const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

// Select the ul#ingredients element
const ingredientsList = document.querySelector('#ingredients');

// Create an array to store all <li> elements
const elements = ingredients.map(ingredient => {
  // Create a new <li> element
  const li = document.createElement('li');
  
  // Set the text content to the ingredient name
  li.textContent = ingredient;
  
  // Add the class 'item' to the <li> element
  li.classList.add('item');
  
  // Return the <li> element
  return li;
});

// Append all <li> elements to the ul#ingredients in one operation
ingredientsList.append(...elements);
