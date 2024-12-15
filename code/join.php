<?php
// session_start(); 
include_once "connection.php";
include_once "function.php"; // Include helper functions like random_num()

// Initialize the error message session variable
// $_SESSION['error_msg'] = ""; 


// Handle signup form submission
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['formType']) && $_POST['formType'] === 'signup') {
    $firstName = mysqli_real_escape_string($con, $_POST['firstName']);
    $lastName = mysqli_real_escape_string($con, $_POST['lastName']);
    $username = mysqli_real_escape_string($con, $_POST['newUsername']);
    $password = mysqli_real_escape_string($con, $_POST['newPassword']);
    $confirmPassword = $_POST['confirmPassword'];

    // Validate input fields
    if (!empty($firstName) && !empty($lastName) && !empty($username) && !empty($password) && !is_numeric($username)) {
        if (empty($confirmPassword) || $password !== $confirmPassword) {
            $_SESSION['error_msg'] = "Passwords don't match";
        }

        // Check if the username already exists
        $checkUserQuery = "SELECT * FROM users WHERE username = '$username' LIMIT 1";
        $checkResult = mysqli_query($con, $checkUserQuery);

        if ($checkResult && mysqli_num_rows($checkResult) > 0) {
            $_SESSION['error_msg'] = "Username already exists!";
        }

        // If no errors, insert the new user into the database
        if (empty($_SESSION['error_msg'])) {
            $user_id = random_num(20); // Generate a random user ID
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT); // Hash password

            $query = "INSERT INTO users (user_id, first_name, last_name, username, password) 
                      VALUES ('$user_id', '$firstName', '$lastName', '$username', '$hashedPassword')";

            if (mysqli_query($con, $query)) {
                header("Location: index.php"); // Redirect to login or home page after signup
                die;
            } else {
                $_SESSION['error_msg'] = "Error: " . mysqli_error($con); // Error inserting user
            }
        }
    } else {
        $_SESSION['error_msg'] = "Please fill out all fields correctly.";
    }
}
?>


<!-- Create Account Form: Displayed when there is an error -->
<div class="createAcc" id="createAcc" style="display: <?php echo !empty($_SESSION['error_msg']) ? 'block' : 'none'; ?>;">
  <?php //echo $_SESSION['error_msg']." this is message" ?>
  <button id="backToSignupj" class="back-button">← Back</button>
    
  <h2>Create a new Account</h2>
  <p id="signIn">Already have an account? <a href="#">Sign in</a></p> 

  <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
    <input type="hidden" name="formType" value="signup">

    <div class="createForm">
      <label for="firstName">First Name</label>
      <input type="text" name="firstName" id="firstName"><br>

      <label for="lastName">Last Name</label>
      <input type="text" name="lastName" id="lastName"><br>

      <label for="username">Username</label>
      <input type="text" name="newUsername" id="newUsername"><br>

      <label for="password">Password</label>
      <input type="password" name="newPassword" id="newPassword" ><br>

      <label for="password">Confirm Password</label>
      <input type="password" name="confirmPassword" id="confirmPassword"><br>

     

      <!-- Display error message if there's an error -->
      <?php if (!empty($_SESSION['error_msg'])): ?>
        <p style="color: red; font-size: small;"><?php echo $_SESSION['error_msg']; ?></p>
      <?php endif; ?>

      <input type="submit" value="Continue" id="continue">

      <p id="terms">By joining, you agree to the Terms of Service and occasionally receive emails from us.</p>
    </div>
  </form>
</div>
