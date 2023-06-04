document.getElementById("sign-up-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
    }
    
    // Here, you can implement the code for sending user data to your server for registration
    
    alert("Registration successful! Welcome to Equation Engine.");
    });