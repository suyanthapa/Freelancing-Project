
<header-navbar>
  <nav class="nav1">
    <li><a href="home.php">Home</a></li>
    <li><a href="about.php">About</a></li>
    <li class="dropdown">
      <a href="#">Explore</a>
      <?php include ('explore.php');?>
      </li>
  </nav>

  <nav class="nav2">
    <li><button class="signup" id="signupBtn">Sign Up</button></li>
    <!-- <li><button class="join" id="joinBtn">Join</button></li> -->
  </nav>
</header-navbar>



<?php include('signup.php'); ?>

<script src="js/script.js"></script>

