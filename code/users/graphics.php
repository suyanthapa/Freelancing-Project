<?php include('loginNavbar.php'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Graphics & Design</title>
    <!-- Link to Main CSS -->
    <link rel="stylesheet" href="styles.css">
    <!-- Page-Specific Scoped CSS -->
    <style>
        .searchbox {
            margin-top: 150px;
            border: 1px solid rgb(1, 47, 1);
            background-color: rgb(7, 35, 58);
            width: 90%;
            height: 220px;
            border-radius: 20px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-left: 20px;
            margin-right: 20px;
        }

        #searchbox-slogan {
            color: #F0F0F0;
            display: flex;
            flex-direction: column;
            font-family: Macan, Helvetica Neue, Helvetica, Arial, sans-serif;
            justify-content: center;
            align-items: center;
        }

        .explore {
            display: flex;
            gap: 90px;
        }

        .explore ul {
            list-style-type: none;
            font-family: "Macan", "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

        .explore li {
            color: rgb(85, 78, 78);
            cursor: pointer;
            margin-bottom: 15px;
        }

        .explore li:hover {
            color: white;
            background-color: rgb(83, 88, 172);
            cursor: pointer;
        }

        #expHeading {
            font-family: "Arial", "Helvetica Neue", sans-serif;
            margin-top: 25px;
            margin-left: 39px;
            font-size: 30px;
            font-weight: bold;
            color: #333333;
        }

        /* Freelancer card styles */
        .freelancer-container {
            margin: 30px auto;
            padding: 20px;
            text-align: center;
        }

        .freelancer-container .freelancer-card {
            border: 1px solid #ddd;
            border-radius: 10px;
            padding: 20px;
            margin: 10px;
            display: inline-block;
            width: 250px;
            text-align: center;
        }

        .freelancer-container .freelancer-card img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="searchbox">
        <p id="searchbox-slogan">
            <span style="font-size:50px; font-weight: bold;">Graphics & Design</span> <br>
            <span style="font-size: 20px">Designs to make you stand out.</span>
        </p>
    </div>

     <!-- Freelancer Cards Section -->
     <div class="freelancer-container">
     <h2 id="expHeading">Hire Graphic Designer</h2>
        <?php
        include_once 'show.php'; // Place the freelancer logic in freelancers.php
        ?>
    </div>

    <h2 id="expHeading">Explore Graphics & Design</h2>

    <div class="explore">
        <ul class="brandLogo">
            <?php echo '<img src="../images/brandd.jpg" alt="Search" width="250" height="150" style="border-radius: 15px;">'; ?>
            <h2>Logo & Brand Identity</h2>
            <li>Logo Design</li>
            <li>Business Cards and Stationery</li>
            <li>Brand Style Guides</li>
        </ul>

        <ul class="WebApp">
            <?php echo '<img src="../images/webDesign.png" alt="Search" width="250" height="150" style="border-radius: 15px;">'; ?>
            <h2>Web & App Design</h2>
            <li>App Design</li>
            <li>Website Design</li>
            <li>Landing Page Design</li>
            <li>Icon Design</li>
            <li>UX Design</li>
        </ul>

        <ul class="art">
            <?php echo '<img src="../images/art.jpg" alt="Search" width="250" height= "150" style="border-radius: 15px;">'; ?>
            <h2>Art & Illustration</h2>
            <li>Illustration</li>
            <li>AI Artists</li>
            <li>Cartoon & Comics</li>
            <li>Pattern Design</li>
            <li>NFT Art</li>
        </ul>

        <ul class="archtitecture">
            <?php echo '<img src="../images/building.png" alt="Search" width="250" height="150" style="border-radius: 15px;" >'; ?>
            <h2>Architecture & Building Design</h2>
            <li>Architecture & Interior Design</li>
            <li>Landscape Design</li>
            <li>Building Engineering</li>
            <li>Lighting Design</li>
            <li>Building Information Modeling</li>
        </ul>
    </div>

   
</body>
</html>
