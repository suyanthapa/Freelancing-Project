<?php


$dbhost= "localhost";

$dbuser= "root";

$dbpass = "";

$dbname= "db_freelance";

// if (!$con = mysqli_connect("localhost","root","","db_freelance"))
// {
//   die("failed to connect !");
// }

  $con = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
  if (!$con) {
      die("Failed to connect!");
  }

