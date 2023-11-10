function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Check if credentials match
    if (localStorage.getItem(username) === password) {
      // Redirect to index.html on successful login
      window.location.href = 'index.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  
