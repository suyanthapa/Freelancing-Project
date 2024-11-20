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
<?php include('signup.php'); ?>