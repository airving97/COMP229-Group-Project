
// Get the login form
const loginForm = document.getElementById("loginForm");

// Listen for form submission
loginForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get the email and password
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Check if the fields are empty
    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    // Display a message
    alert("Login form submitted successfully!");

});
