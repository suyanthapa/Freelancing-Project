<?php
session_start(); 
?>
<!--  -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign Up</title>
  <link rel="stylesheet" href="css/styles.css">
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->

  <style>
    /* General Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body, html {
      min-height: 100vh;
      font-family: 'Arial', sans-serif;
      background: linear-gradient(135deg, #4e54c8, #8f94fb);
      display: flex;
      justify-content: center;
      overflow-y: auto; /* Allow scrolling */
    }

    /* Signup Container */
    .signup {
      width: 100%;
      max-width: 500px; /* Slightly wider form */
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      padding: 30px;
      text-align: center;
      margin: 50px 20px; /* Allow spacing for scroll */
      position: relative;
    }

    /* Back Button */
    .back-button {
      position: absolute;
      top: 10px;
      left: 10px;
      background: none;
      border: none;
      font-size: 16px;
      color: #white;
      cursor: pointer;
      transition: color 0.3s ease;
      background-color: #4e54c8;
    }

    .back-button:hover {
      color:rgb(157, 161, 227);
    }

    /* Form Title */
    .signup h2 {
      font-size: 28px;
      color: #333;
      margin-bottom: 10px;
    }

    #signIn {
      font-size: 16px;
      color: #666;
      margin-bottom: 20px;
    }

    #signIn a {
      color: #4e54c8;
      text-decoration: none;
      font-weight: bold;
      transition: color 0.3s ease;
    }

    #signIn a:hover {
      color: #6c72e9;
    }

    /* Input Fields */
    .createForm label {
      display: block;
      text-align: left;
      margin: 10px 0 5px;
      font-size: 14px;
      color: #333;
      font-weight: bold;
    }

    .createForm input[type="text"],
    .createForm input[type="password"] {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 6px;
      outline: none;
      transition: border-color 0.3s ease;
    }

    .createForm input:focus {
      border-color: #4e54c8;
      box-shadow: 0 0 5px rgba(78, 84, 200, 0.4);
    }

    /* Submit Button */
    #signup {
      width: 100%;
      padding: 10px;
      margin-top: 20px;
      background: linear-gradient(135deg, #4e54c8, #8f94fb);
      border: none;
      border-radius: 6px;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    #signup:hover {
      background: linear-gradient(135deg, #6c72e9, #a3a8f0);
    }

    /* Error Message */
    p[style="color: red; font-size: small;"] {
      margin-top: 10px;
    }

    /* Terms Paragraph */
    #terms {
      font-size: 12px;
      color: #666;
      margin-top: 15px;
      line-height: 1.5;
    }
  </style>
</head>

<body> 
<?php
include_once "connection.php";
include_once "function.php"; 
$error_message = "";
$profile = "Seller";

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

            $query = "INSERT INTO users (user_id, first_name, last_name, username, password, profile) 
                      VALUES ('$user_id', '$firstName', '$lastName', '$username', '$hashedPassword' ,  '$profile')";

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