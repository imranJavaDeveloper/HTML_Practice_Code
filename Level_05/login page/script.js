document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username.trim() === "" || password.trim() === "") {
            alert("Both fields are required.");
        } else {
            // Add your authentication logic here
            // For demo purposes, we'll just log the values
            console.log("Username:", username);
            console.log("Password:", password);

            // Redirect to a home page or another action after successful login
            // window.location.href = "home.html";
        }
    });
});
