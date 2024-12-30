// cadeau.js

// Function to open the modal
function openModal() {
    document.getElementById("passwordModal").style.display = "flex";
}

// Function to close the modal when clicking outside of it
function closeModal(event) {
    if (event.target === document.getElementById("passwordModal")) {
        document.getElementById("passwordModal").style.display = "none";
    }
}

// Function to check the entered password
function checkPassword() {
    const correctPassword = "20230622";  // Correct password (date in YYYYmmdd format)
    const enteredPassword = document.getElementById("password").value;

    if (enteredPassword == correctPassword) {
        window.location.href = "conf.secret/secret.html";  // Redirect to the secret page
    } else {
        alert("Heille tu connais pas notre date");  // Alert for incorrect password
    }
}
