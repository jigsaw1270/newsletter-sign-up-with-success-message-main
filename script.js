// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("newsletter");
//     const emailInput = document.getElementById("email");

//     const validEmailLabel = document.getElementById("validEmailLabel");
//     const successMessage = document.getElementById("successMessage");

//     form.addEventListener("submit", function (event) {
//         event.preventDefault(); // Prevent form submission
//         const email = emailInput.value.trim();

//         // Basic email validation
//         if (!validateEmail(email)) {
//             console.log("error!")
//         emailInput.classList.remove("hidden");
//         } else {

//             validEmailLabel.classList.add("hidden");
//             emailInput.classList.remove("invalid-input");
//             successMessage.textContent = `Success! You've subscribed with ${email}`;
//             successMessage.classList.remove("hidden");
//             form.reset(); // Clear the form
//         }
//     });

//     function validateEmail(email) {
//         const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//         return emailPattern.test(email);
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("newsletter");
    const emailInput = document.getElementById("emailInput");
    const errorLabel = document.getElementById("errorlabel");
    const successMessage = document.getElementById("successMessage");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      //  validation regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern===(emailInput.value)) {
        errorLabel.classList.remove("hidden");
        errorLabel.classList.add("valid-email-label");
        emailInput.classList.add("invalid-input");
      } else {
        successMessage.classList.remove("hidden");
        emailInput.classList.remove("invalid-input");
        errorLabel.classList.add("hidden");
        emailInput.value = '';
      }
    });
  });
  