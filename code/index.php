
<?php

      session_start();

        // include("connection.php");
        // include("function.php");

        // $user_data= check_login($con);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home - My Website</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
   

 <!-- navbar section   -->

  <nav class="nav1">

    <li>
      <a href="home.php">Home</a>
    </li>
    <li>
      <a href="about.php">Services</a>
    </li>
    <li>
      <a href="about.php">About Us</a>
    </li>
    <li class="dropdown">
      <a href="#">Explore</a>
      <?php include ('explore.php');?>
      </li>

      <li>
        <a  href="login.php">Login</a>
      </li>
       <li>
        <a href="signup.php">Signup</a>
     </li>
  </nav>




  
  <!-- Placeholder for the dashboard -->
  <div id="dashboard"></div>
  <?php include('dashboard.php'); ?>

  <script src="js/script.js"></script>
</body>
</html>