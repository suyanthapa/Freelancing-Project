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
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
  <div class="container">
    <div class="form-box box">

      <?php
      
      
include_once "connection.php";
include_once "function.php"; 

$error_message = ""; // Initialize the error message variable

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
                header("Location: dashboardL.php"); // Redirect to another page
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

<div class="form-box"  >
      <a href="index.php"><button id="backToIndex" class="back-button">← Back</button></a><br>

      <h2 class="continueHead">Continue with your Email or <br>Username</h2><br><br>

      <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
        <input type="hidden" name="formType" value="login">
        <div class="form">

        
          <label for="username">Username</label><br><br>
          <input type="text" name="username" id="Cususername" value="<?php echo isset($username) ? $username : ''; ?>"><br><br>

          <label for="password">Password</label><br><br>
          <input type="password" name="password" id="CusPassword"><br><br>

          <!-- Display error message if there's an error -->
          <?php if (!empty($error_message)): ?>
            <p style="color: red; font-size: small;"><?php echo $error_message; ?></p>
          <?php endif; ?>

          <input type="submit" name= "login" id="login" value="login">
        </div>
      </form>

      <p id="terms">By joining, you agree to this platform's Terms of Service and to occasionally receive emails from us. Please read our Privacy Policy to learn how we use your personal data.</p>
    </div>
x`