// script.js

// Greet user with "Hi [Name]"
function greetUser() {
  const name = prompt("What's your name?");
  const greetingContainer = document.getElementById("greeting");
  if (name && greetingContainer) {
    greetingContainer.textContent = `Hi ${name}`;
  }
}

greetUser();

// Handle "Message Us" form submission
const form = document.getElementById("messageForm");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("formName").value.trim();
    const email = document.getElementById("formEmail").value.trim();
    const message = document.getElementById("formMessage").value.trim();
    const output = document.getElementById("formOutput");

    if (!name || !email || !message) {
      alert("All fields must be filled out.");
      return;
    }

    output.innerHTML = `
      <h3>Form Submission:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
  });
}
