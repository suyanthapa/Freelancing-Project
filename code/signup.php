<link rel="stylesheet" href="css/styles.css">

<?php
session_start();
include("connection.php");
include("function.php");

if ($_SERVER['REQUEST_METHOD'] == "POST") {

  $firstName = mysqli_real_escape_string($con, $_POST['firstName']);
  $lastName = mysqli_real_escape_string($con, $_POST['lastName']);
  $username = mysqli_real_escape_string($con, $_POST['newUsername']);
  $password = mysqli_real_escape_string($con, $_POST['newPassword']);
  $confirmPassword = $_POST['confirmPassword'];

  if (!empty($username) && !empty($password) && !is_numeric($username)) {
      if ($password !== $confirmPassword) {
          echo "Passwords do not match!";
          die;
      }

      $user_id = random_num(20);
      $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

      $query = "INSERT INTO users (user_id, first_name, last_name, username, password) VALUES ('$user_id',   '$firstName',  '$lastName' ,'$username', '$hashedPassword')";

      if (mysqli_query($con, $query)) {
          header("Location: about.php");
          die;
      } else {
          echo "Error: " . mysqli_error($con);
      }
  } else {
      echo "Please enter valid information!";
  }
}
?>


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

<script src="js/script.js"></script>