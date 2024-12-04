<?php

include_once "connection.php";
include_once "function.php"; // Include any helper functions



$error_message = ""; // Initialize the error message variable\


$_SESSION['error_msg'] = ""; 






// Check if a login aform submission occurred
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['formType']) && $_POST['formType'] === 'login') {
    $username = mysqli_real_escape_string($con, $_POST['username']);
    $password = mysqli_real_escape_string($con, $_POST['password']);

    // Check if both username and password are provided and username is not numeric
    if (!empty($username) && !empty($password) && !is_numeric($username)) {
        // Check if the user exists in the database
        $query = "SELECT * FROM users WHERE username = '$username' LIMIT 1";
        $result = mysqli_query($con, $query);

        if ($result && mysqli_num_rows($result) > 0) {
            $user_data = mysqli_fetch_assoc($result);

            // Verify the password
            if (password_verify($password, $user_data['password'])) {
                $_SESSION['user_id'] = $user_data['user_id']; // Store user ID in the session
                header("Location: about.php"); // Redirect to another page
                die;
            } else {
                // Set error message if password is incorrect
                $error_message = "Invalid Username or Password";
            }
        } else {
            // Set error message if user doesn't exist
            $error_message = "Invalid Username or Password";
        }
    } else {
        // Set error message if fields are empty or invalid
        $error_message = "Please enter the username and password";
    }
}

?>

<!-- Signup Modal -->
<div id="signupModal" class="modal modal-overlay" style="display: <?php echo (!empty($error_message) || !empty($error_msg) ) ? 'flex' : 'none'; ?>;">
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

    <!-- Right Modal: Show it only if no error -->
    <div class="modal-right" id="signupContent" style="display: <?php   echo empty($error_message) ? 'block'     : 'none'; ?>;">
      <h2>Sign in to your account</h2>
      <p id="createHere">Don't have an account? <a href="#">Create here</a></p>
      <button class="social-login google">Continue with Google</button>
      <button class="social-login email" id="continueEmail">Continue with email/username</button>
      <div class="or">OR</div>
      <button class="social-login apple">Apple</button>
      <button class="social-login facebook">Facebook</button>
      <p class="terms">
        By joining, you agree to the Terms of Service and occasionally receive emails from us.
      </p>
    </div>

    <!-- Include the signup form or error message -->
    <?php include('join.php'); ?>

    <!-- Login Form: Displayed when there is an error -->
    <div class="emailContent" id="emailContent" style="display: <?php echo !empty($error_message) ? 'block' : 'none'; ?>;">
      <button id="backToSignup" class="back-button">← Back</button><br>
      <h2 class="continueHead">Continue with your Email or <br>Username</h2><br><br>

      <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
        <input type="hidden" name="formType" value="login">
        <div class="form">
          <label for="username">Email or Username</label><br><br>
          <input type="text" name="username" id="Cususername" value="<?php echo isset($username) ? $username : ''; ?>"><br><br>

          <label for="password">Password</label><br><br>
          <input type="password" name="password" id="CusPassword"><br><br>

          <!-- Display error message if there's an error -->
          <?php if (!empty($error_message)): ?>
            <p style="color: red; font-size: small;"><?php echo $error_message; ?></p>
          <?php endif; ?>

          <input type="submit" id="continue" value="Continue">
        </div>
      </form>

      <p id="terms">By joining, you agree to this platform's Terms of Service and to occasionally receive emails from us. Please read our Privacy Policy to learn how we use your personal data.</p>
    </div>
  </div>
</div>

<script src="js/script.js"></script>
