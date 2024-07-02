document.getElementById('showSignup').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('signupForm').classList.remove('hidden');
});

document.getElementById('showLogin').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('signupForm').classList.add('hidden');
  document.getElementById('loginForm').classList.remove('hidden');
});

function validateLoginForm() {
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();

  if (username === '' || password === '') {
    alert('Please fill in all fields.');
    return false;
  }

  window.location.href = 'Homepage.html'; 
  return false; 
}

function validateSignupForm() {
  const username = document.getElementById('signup-username').value.trim();
  const email = document.getElementById('signup-email').value.trim();
  const password = document.getElementById('signup-password').value.trim();
  const confirmPassword = document.getElementById('confirm-password').value.trim();

  if (username === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all fields.');
    return false;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return false;
  }

  // Here you can add code to handle the signup (e.g., sending data to the server)

  window.location.href = 'Homepage.html'; 
  return false; 
}

