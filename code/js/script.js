document.addEventListener("DOMContentLoaded", () => {
  // Load header.html into the #header div
  fetch('header.php')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;

      // Get the modal elements after loading the header content
      var loginModal = document.getElementById("loginModal");
      var signupModal = document.getElementById("signupModal");
      var loginBtn = document.getElementById("loginBtn");
      var signupBtn = document.getElementById("signupBtn");
      var closeLogin = document.getElementById("closeModal"); // For login modal close button
      var closeSignup = document.getElementById("closeSignupModal"); // For signup modal close button

      const signupContent = document.getElementById("signupContent");
      const emailContent = document.getElementById("emailContent");
      const continueEmail = document.getElementById("continueEmail");
      const backToSignup = document.getElementById("backToSignup");

      // Check if elements exist before adding event listeners
      if (loginBtn) {
        loginBtn.addEventListener("click", () => {
          loginModal.style.display = "flex";
        });
      }

      if (signupBtn) {
        signupBtn.addEventListener("click", () => {
          signupModal.style.display = "flex";
        });
      }

      if (closeLogin) {
        closeLogin.addEventListener("click", () => {
          loginModal.style.display = "none";
        });
      }

      if (closeSignup) {
        closeSignup.addEventListener("click", () => {
          signupModal.style.display = "none";
        });
      }

      // Toggle Signup and Email Content
      if (continueEmail) {
        continueEmail.addEventListener("click", () => {
          signupContent.style.display = "none";
          emailContent.style.display = "block";
        });
      }

      if (backToSignup) {
        backToSignup.addEventListener("click", () => {
          emailContent.style.display = "none";
          signupContent.style.display = "block";
        });
      }

      // Close modals when clicking outside
      window.addEventListener("click", (event) => {
        if (event.target.classList.contains('modal-overlay')) {
          if (loginModal) loginModal.style.display = "none";
          if (signupModal) signupModal.style.display = "none";
        }
      });
    })
    .catch(error => console.error('Error loading Header:', error));
});
