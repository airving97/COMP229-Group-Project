
// Get the registration form
const registerForm = document.getElementById("registerForm");

// Listen for form submission
registerForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the password values
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Display success message
    alert("Registration form completed successfully!");

});
