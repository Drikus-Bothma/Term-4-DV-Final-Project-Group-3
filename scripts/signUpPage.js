function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;

    if (!passwordRegex.test(password)) {
        alert("Password must contain at least one uppercase letter, one lowercase letter, and one number");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    // Store data in localStorage (if needed)
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);

    // Use 'window.location.replace' for better redirection
    window.location.replace('home.html');

    return false; // Prevent the default form submission
}
