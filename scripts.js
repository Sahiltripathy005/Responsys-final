// Handle form submission and login logic
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    
    // Get user input
    const userId = document.getElementById('userid').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (userId === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        // Simulate a login process
        if (userId === 'admin' && password === 'admin123') {
            alert('Login successful! Redirecting...');
            // Redirect to a new page (replace with actual dashboard URL)
            window.location.href = 'dashboard.html'; 
        } else {
            alert('Invalid User ID or Password.');
        }
    }
});
