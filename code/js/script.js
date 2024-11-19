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

      // Close modals when clicking outside
      window.addEventListener("click", (event) => {
        if (event.target.classList.contains('modal-overlay')) {
          loginModal.style.display = "none";
          signupModal.style.display = "none";
        }
      });
    })
    .catch(error => console.error('Error loading Header:', error));

});


  // // Load dashboard.html into the #dashboard div
  // fetch('dashboard.php')
  //   .then(response => response.text())
  //   .then(data => {
  //     document.getElementById('dashboard').innerHTML = data;
  //   })
  //   .catch(error => console.error('Error loading Dashboard:', error));

