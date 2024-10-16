// Select the list of categories (li.item elements)
const categories = document.querySelectorAll('#categories .item');

// Log the total number of categories
console.log(`Number of categories: ${categories.length}`);

// Iterate over each category item
categories.forEach(category => {
  // Get the category title (h2 element)
  const categoryTitle = category.querySelector('h2').textContent;
  
  // Get the list of elements within the category (li elements)
  const categoryItems = category.querySelectorAll('ul li');

  // Log the title and the number of elements in the category
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});
