document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("newsletter");
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        const email = emailInput.value.trim();
        
        // Basic email validation
        if (!validateEmail(email)) {
            errorMessage.classList.remove("hidden");
            successMessage.classList.add("hidden");
        } else {
            errorMessage.classList.add("hidden");
            successMessage.textContent = `Success! You've subscribed with ${email}`;
            successMessage.classList.remove("hidden");
            form.reset(); // Clear the form
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
});
