<?php

function check_login($con) {
  if (isset($_SESSION['user_id'])) {
      $id = $_SESSION['user_id'];
      $query = "SELECT * FROM users WHERE user_id = '$id' LIMIT 1";

      $result = mysqli_query($con, $query);

      if ($result && mysqli_num_rows($result) > 0) {
          $user_data = mysqli_fetch_assoc($result);
          return $user_data;
      }
  }

 

  // Redirect to join.php if no valid session found
  header("Location: header.php");
  exit();
}

