<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kaaj</title>
    <!-- Link to Main CSS -->
    <link rel="stylesheet" href="styles.css">
    <!-- Page-Specific Scoped CSS -->
    <style>
        /* Scoped to #navbar-page */
        #navbar-page header {
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            position: fixed; /* Keeps the navbar fixed */
            top: 0; /* Sticks to the top of the viewport */
            left: 0;
            width: 100%; /* Full-width */
            z-index: 1000; /* Ensures it stays on top of other content */
        }

        #navbar-page nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 16px 24px;
        }

        #navbar-page .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #000;
        }

        #navbar-page .logo span {
            color: #22c55e;
        }

        #navbar-page .search-bar {
            display: flex;
            align-items: center;
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
            width: 30%;
        }

        #navbar-page .search-bar input {
            flex: 1;
            padding: 8px 12px;
            border: none;
            outline: none;
            font-size: 1rem;
        }

        #navbar-page .search-bar button {
            background-color: #000;
            color: #fff;
            border: none;
            padding: 8px 12px;
            cursor: pointer;
        }

        #navbar-page .search-bar button img {
            filter: invert(1);
        }

        #navbar-page .icon-links {
            display: flex;
            align-items: center;
            gap: 24px;
        }

        #navbar-page .icon-links img {
            width: 24px;
            height: 24px;
            cursor: pointer;
        }

        #navbar-page .icon-links a:hover img {
            opacity: 0.7;
        }

        #navbar-page .user-icon {
            background-color: #fbbf24;
            color: #fff;
            border-radius: 50%;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }

        #navbar-page .menu {
            border-top: 1px solid #e5e5e5;
            padding: 12px 24px;
            display: flex;
            gap: 24px;
        }

        #navbar-page .menu a {
            color: #666;
            text-decoration: none;
            font-size: 0.9rem;
            transition: color 0.3s ease;
        }

        #navbar-page .menu a:hover {
            color: #000;
        }

    
      
    </style>
</head>
<body>
    <!-- Page Container -->
    <div id="navbar-page">
        <!-- Header Section -->
        <header>
            <nav>
                <!-- Logo -->
                <div class="logo" >
                    <a href="dashboardL.php" style=" text-decoration: none;">fiverr</a>
                </div>

                <!-- Search Bar -->
                <div class="search-bar">
                    <input type="text" placeholder="What service are you looking for today?">
                    <button>
                        <?php echo '<img src="images/searchh.png" alt="Search" width="20" height="20">'; ?>
                    </button>
                </div>

                <!-- Icons and User Menu -->
                <div class="icon-links">
                    <a href="#"  style="text-decoration: none; color: black;" >
                        <!-- Bell Icon -->
                       <img src="images/bell.png" alt="Notifications" width="24" height="24" style="vertical-align: middle; margin-right: 8px">
                     Notification
                            

                    </a>
                    <a href="#" style="text-decoration: none; color: black;" >
                        <!-- Message Icon -->
                      <img src="images/msg.png" alt="Messages" width="24" height="24" style="vertical-align: middle; margin-right: 8px">
                      Message
                    </a>
                    <!-- User Profile -->
                    <div class="user-icon">S</div>
                </div>
            </nav>
            
            <!-- Menu Links -->
            <div class="menu">
                <a href="graphics.php">Graphics & Design</a>
                <a href="programming.php">Programming & Tech</a>
                <a href="digMarketing.php">Digital Marketing</a>
                <a href="vAnimation.php">Video & Animation</a>
                <a href="writing.php">Writing & Translation</a>
                <a href="mAudio.php">Music & Audio</a>
                <a href="#">Business</a>
                <a href="#">Finance</a>
                <a href="#">AI Services</a>
            </div>
        </header>
    </div>

    
</body>
</html>
