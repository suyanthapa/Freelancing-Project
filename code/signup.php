
<!-- Signup Modal -->
<div id="signupModal" class="modal modal-overlay" style="display: none;">
  <div class="modal-content">
    <div class="modal-left">
      <h2>Success starts here</h2>
      <ul>
        <li>Over 700 categories</li>
        <li>Quality work done faster</li>
        <li>Access to talent and businesses across the globe</li>
      </ul>
      
      <img src="login-image.png" alt="" class="login-image">
    </div>

    <div class="modal-right" id="signupContent">
      <h2>Sign in to your account</h2>
      <p>Don't have an account? <a href="#">Join here</a></p>
      <button class="social-login google">Continue with Google</button>
      <button class="social-login email" id="continueEmail">Continue with email/username</button>
      <div class="or">OR</div>
      <button class="social-login apple">Apple</button>
      <button class="social-login facebook">Facebook</button>
      <p class="terms">
        By joining, you agree to the Terms of Service and occasionally receive emails from us.
      </p>
    </div>

    <div class="emailContent" id="emailContent" style="display: none;">
    <button id="backToSignup" class="back-button">← Back</button>
    <h2>Sign in with Email/Username</h2>

    <form action="emailForm">
      <label for="Email">Email:</label>
      
    </form>
    </div>
  </div>
</div>