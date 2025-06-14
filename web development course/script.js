document.getElementById('contactForm').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const errorMessage = document.getElementById('errorMessage');
  
  errorMessage.textContent = ''; // Clear previous messages

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email) {
    errorMessage.textContent = 'All fields are required.';
    event.preventDefault(); // Stop form submission
  } else if (!emailRegex.test(email)) {
    errorMessage.textContent = 'Please enter a valid email address.';
    event.preventDefault(); // Stop form submission
  }
});