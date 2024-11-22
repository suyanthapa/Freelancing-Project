
<?php

      session_start();

      include("connection.php");
      include("function.php");

      $user_data= check_login($con);
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
  <!-- Include the header (navbars and modals) -->
  <div id="header">
    <?php include('header.php'); ?>
  </div>
  
  <!-- Placeholder for the dashboard -->
  <div id="dashboard"></div>
  <?php include('dashboard.php'); ?>

  <script src="js/script.js"></script>
</body>
</html>