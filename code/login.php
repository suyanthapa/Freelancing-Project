<?php
session_start();

include_once "connection.php";
include_once "function.php"; 

$error_message = ""; // Initialize the error message variable

// Check if a login form submission occurred
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['formType']) && $_POST['formType'] === 'login') {
    $username = mysqli_real_escape_string($con, $_POST['username']);
    $password = mysqli_real_escape_string($con, $_POST['password']);

    // Check if both username and password are provided and username is not numeric
    if (!empty($username) && !empty($password) && !is_numeric($username)) {
        
        // Query the `freelancer` table first
        $queryFreelancer = "SELECT * FROM freelancer WHERE username = '$username' LIMIT 1";
        $resultFreelancer = mysqli_query($con, $queryFreelancer);

        if ($resultFreelancer && mysqli_num_rows($resultFreelancer) > 0) {
            $user_data = mysqli_fetch_assoc($resultFreelancer);

            // Verify the password
            if (password_verify($password, $user_data['password'])) {
                $_SESSION['user_id'] = $user_data['user_id']; // Store user ID in the session
                header("Location: dashboardL.php"); // Redirect to freelancer dashboard
                die;
            } else {
                $error_message = "Invalid Username or Password";
            }
        } else {
            // If no match in `freelancer`, query the `user` table
            $queryUser = "SELECT * FROM users WHERE username = '$username' LIMIT 1";
            $resultUser = mysqli_query($con, $queryUser);

            if ($resultUser && mysqli_num_rows($resultUser) > 0) {
                $user_data = mysqli_fetch_assoc($resultUser);

                // Verify the password
                if (password_verify($password, $user_data['password'])) {
                    $_SESSION['user_id'] = $user_data['user_id']; // Store user ID in the session
                    header("Location: dashboardU.php"); // Redirect to user dashboard
                    die;
                } else {
                    $error_message = "Invalid Username or Password";
                }
            } else {
                // Set error message if user doesn't exist in either table
                $error_message = "Invalid Username or Password";
            }
        }
    } else {
        // Set error message if fields are empty or invalid
        $error_message = "Please enter the username and password";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <style>
    /* General Reset */
body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background: #134848;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* Container for the form */
.container {
    width: 100%;
    max-width: 400px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    padding: 30px;
    text-align: center;
}

/* Heading styles */
h2.continueHead {
    font-size: 24px;
    color: #444;
    margin-bottom: 20px;
}

/* Input fields styling */
input[type="text"], input[type="password"] {
    width: 100%;
    padding: 12px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s ease-in-out;
}

input[type="text"]:focus, input[type="password"]:focus {
    border-color: #2575fc;
    outline: none;
}

/* Submit button styling */
input[type="submit"]#login {
    width: 100%;
    background: #2575fc;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 12px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

input[type="submit"]#login:hover {
    background: #6a11cb;
}

/* Back button */
button.back-button {
    background: #f5f5f5;
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    font-size: 14px;
    color: #444;
    cursor: pointer;
    margin-bottom: 20px;
    transition: background-color 0.3s ease-in-out;
}

button.back-button:hover {
    background: #ddd;
}

/* Error message styling */
p[style="color: red; font-size: small;"] {
    margin: 10px 0;
    font-size: 14px;
    color: #e63946;
}

/* Terms and conditions text */
p#terms {
    font-size: 12px;
    color: #888;
    margin-top: 20px;
    line-height: 1.5;
}

/* Form labels */
label {
    font-size: 14px;
    color: #444;
    text-align: left;
    display: block;
    margin-bottom: 5px;
}

  </style>
</head>
<body>
  <div class="container">
    <div class="form-box box">
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

          <input type="submit" name="login" id="login" value="Login">
        </div>
      </form>
      <p id="terms">By joining, you agree to this platform's Terms of Service and to occasionally receive emails from us. Please read our Privacy Policy to learn how we use your personal data.</p>
    </div>
  </div>
</body>
</html>
