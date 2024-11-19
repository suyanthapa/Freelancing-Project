<header-navbar>
  <nav class="nav1">
    <li><a href="home.php">Home</a></li>
    <li><a href="about.php">About</a></li>
    <li><a href="explore.php">Explore</a></li>
  </nav>

  <nav class="nav2">
    <li><button class="signup" id="signupBtn">Sign Up</button></li>
    <li><button class="login" id="loginBtn">Login</button></li>
  </nav>
</header-navbar>

<!-- Login Modal -->
<div id="loginModal" class="modal modal-overlay" style="display: none;">
  <div class="modal-content">
    <span class="close" id="closeModal">&times;</span>
    <h2>Login</h2>
    <form method="POST" action="login.php">
      <input type="email" placeholder="Your Email" required>
      <input type="password" placeholder="Your Password" required>
      <button type="submit">Login</button>
    </form>
  </div>
</div>

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

    <div class="modal-right">
      <h2>Sign in to your account</h2>
      <p>Don't have an account? <a href="#">Join here</a></p>
      <button class="social-login google">Continue with Google</button>
      <button class="social-login email">Continue with email/username</button>
      <div class="or">OR</div>
      <button class="social-login apple">Apple</button>
      <button class="social-login facebook">Facebook</button>
      <p class="terms">
        By joining, you agree to the Terms of Service and occasionally receive emails from us.
      </p>
    </div>
  </div>
</div>
