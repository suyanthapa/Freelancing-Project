<link rel="stylesheet" href="css/header.css">
<header class="header-navbar">
  <nav class="navbar">
    <div class="logo">
      <a href="index.php">
        <img src="images/kaaj-logo.png" alt="kaaj logo" class="logo-icon">
      </a>
    </div>
    <ul class="nav-links">
      <li>
        <a href="index.php">Home</a>
      </li>
      <li class="dropdown">
        <a href="#">Explore</a>
        <?php include('explore.php'); ?>
      </li>
      <li>
        <a href="about.php">About Us</a>
      </li>
    </ul>
    <div class="authentication">
      <li>
        <a href="login.php">Login</a>
      </li>
      <li>
        <a href="signup.php">Sign Up</a>
      </li>

    </div>
  </nav>

</header>