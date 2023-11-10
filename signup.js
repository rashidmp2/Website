function signup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Check if username already exists
    if (localStorage.getItem(username)) {
      alert('Username already exists. Please choose a different username.');
    } else {
      // Save user credentials to localStorage
      localStorage.setItem(username, password);
  
      // Redirect to login page
      window.location.href = 'login.html';
    }
  }
  
