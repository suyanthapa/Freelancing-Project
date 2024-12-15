<?php
session_start(); 
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="css/styles.css">
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
</head>

<body> 
<?php
include_once "connection.php";
include_once "function.php"; 
$error_message = "";

// Handle signup form submission
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['formType']) && $_POST['formType'] === 'signup') {
    $firstName = mysqli_real_escape_string($con, $_POST['firstName']);
    $lastName = mysqli_real_escape_string($con, $_POST['lastName']);
    $username = mysqli_real_escape_string($con, $_POST['newUsername']);
    $password = mysqli_real_escape_string($con, $_POST['newPassword']);
    $confirmPassword = $_POST['confirmPassword'];

    // Validate input fields
    if (!empty($firstName) && !empty($lastName) && !empty($username) && !empty($password) && !is_numeric($username)) {
      if ($password !== $confirmPassword) {
        $error_message = "Passwords don't match";
    }
    

        // Check if the username already exists
        $checkUserQuery = "SELECT * FROM users WHERE username = '$username' LIMIT 1";
        $checkResult = mysqli_query($con, $checkUserQuery);

        if ($checkResult && mysqli_num_rows($checkResult) > 0) {
          $error_message = "Username already exists!";
        }

        // If no errors, insert the new user into the database
        if (empty($error_message)) {
            $user_id = random_num(20); // Generate a random user ID
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT); // Hash password

            $query = "INSERT INTO users (user_id, first_name, last_name, username, password) 
                      VALUES ('$user_id', '$firstName', '$lastName', '$username', '$hashedPassword')";

            if (mysqli_query($con, $query)) {
                header("Location: login.php"); // Redirect to login or home page after signup
                die;
            } else {
              $error_message = "Error: " . mysqli_error($con); 
            }
        }
    } else {
        $error_message ="Please fill out all fields correctly.";
    }
}
?>


<!-- Create Account Form: Displayed when there is an error -->
<div class="signup" >
 
<a href="index.php"><button id="backToSignup" class="back-button">← Back</button></a><br>

    
  <h2>Create a new Account</h2>
  <p id="signIn">Already have an account? <a href="login.php">Sign in</a></p> 

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
      <?php if (!empty($error_message)): ?>
  <p style="color: red; font-size: small;"><?php echo $error_message; ?></p>
<?php endif; ?>


      <input type="submit" value="Signup" id="signup">

      <p id="terms">By joining, you agree to the Terms of Service and occasionally receive emails from us.</p>
    </div>
  </form>
</div>

</body>

</html>