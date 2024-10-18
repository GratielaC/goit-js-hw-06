const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Select the ul.gallery element
const galleryList = document.querySelector('.gallery');

// Create the gallery markup as a single string using map
const galleryMarkup = images
  .map(({ url, alt }) => 
    `<li class="gallery-item"><img src="${url}" alt="${alt}" width="300"></li>`)
  .join('');

// Insert all gallery items in one operation
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
