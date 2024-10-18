// Select the form element
const form = document.querySelector('.login-form');

// Add submit event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting and reloading the page
  event.preventDefault();

  // Get the email and password input values
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  // Check if any of the fields are empty
  if (email === '' || password === '') {
    // Display an alert if any field is empty
    alert('All fields must be filled!');
    return;
  }

  // Create an object with the form data
  const formData = {
    email: email,
    password: password,
  };

  // Display the object in the console
  console.log(formData);

  // Clear the form after submission
  form.reset();
});

