
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
      <p id="createHere" >Don't have an account? <a href="#">Create here</a> </p>
      <button class="social-login google">Continue with Google</button>
      <button class="social-login email" id="continueEmail">Continue with email/username</button>
      <div class="or">OR</div>
      <button class="social-login apple">Apple</button>
      <button class="social-login facebook">Facebook</button>
      <p class="terms">
        By joining, you agree to the Terms of Service and occasionally receive emails from us.
      </p>
    </div>

    
    <?php include('join.php'); ?>

    <!-- for login with username -->

    <div class="emailContent" id="emailContent" style="display: none;">
    <button id="backToSignup" class="back-button">← Back</button><br>
    <h2 class="continueHead">Continue with your Email or <br>Username</h2><br><br>

    <form action="emailForm">
     <div class="form">
      <label for="username">Email or Username</label><br><br>
      <input type="text" name="username" id="Cususername"><br><br>

      <label for="passsword">Password</label><br><br>
      <input type="password" name="password" id="CusPassword"><br><br>

      <input type="submit" id="continue" value="Continue">
      </div>
    </form>

    <p id="terms">By joining, you agree to this platform's Terms of Service and to occasionally receive emails from us. Please read our Privacy Policy to learn how we use your personal data.</p>
    </div>
  </div>
</div>
