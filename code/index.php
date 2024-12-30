d<?php

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

  <style>

  </style>
</head>

<body>
  <!-- Header-Section -->
  <?php include('header.php'); ?>

  <!-- Dashboaard-Section -->
  <?php include('dashboard.php'); ?>

  <!-- Footer Section -->
  <?php include('footer.php') ?>

  <script src="js/script.js"></script>
</body>

</html>