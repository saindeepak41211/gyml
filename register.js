document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    if (!name || !email || !phone) {
      alert('Please fill in all the required fields!');
      return;
    }
  
    alert('Registration Successful!');
  });
  