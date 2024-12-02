 <!-- for creating new account -->
 <?php
// session_start();
include_once "connection.php";
include_once "function.php";
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

      $query = "INSERT INTO users (user_id, first_name, last_name, username, password ) VALUES ('$user_id',   '$firstName',  '$lastName' ,'$username', '$hashedPassword')";

      if (mysqli_query($con, $query)) {
          header("Location: index.php");
          die;
      } else {
          echo "Error: " . mysqli_error($con);
      }
  } else {
      echo "Please enter valid information!";
  }
}
?>
 <div class="createAcc" id="createAcc" style="display: none;">
 <button id="backToSignupj" class="back-button">← Back</button>
  
<h2>Create a new Account</h2>
 <p id="signIn" >Already  have an account? <a href="#">Sign in</a> </p> 


 <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">

  <div class="createForm">

  <label for="username">First Name</label>
  <input type="text" name="firstName" id="firstName"><br>


  <label for="username">Last Name</label>
  <input type="text" name="lastName" id="lastName"><br>



  <label for="username"> Username</label>
  <input type="text" name="newUsername" id="newUsername"><br>

  <label for="password">Password</label>
  <input type="password" name="newPassword" id="newPassword"><br>
  <label for="password">Confirm Password</label>
  <input type="password" name="confirmPassword" id="confirmPassword">


  
  <input type="submit" value="Continue" id="continue">

    <p id="terms">By joining, you agree to this platform's Terms of Service and to occasionally receive emails from us. Please read our Privacy Policy to learn how we use your personal data.</p>
  </div>

 </form>

    



  </div>