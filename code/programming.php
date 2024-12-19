<?php include('loginNavbar.php'); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar Example with PHP</title>
    <!-- Link to Main CSS -->
    <link rel="stylesheet" href="styles.css">
    <!-- Page-Specific Scoped CSS -->
    <style>
  .searchbox {
           margin-top: 150px;
            border: 1px solid rgb(1, 47, 1);
            background-color:rgb(52, 176, 166);
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

  #searchbox-slogan{
   
    color: #F0F0F0;
   
    display: flex;
    flex-direction: column;
    font-family: Macan, Helvetica Neue, Helvetica, Arial, sans-serif;
    justify-content: center;
    align-items: center;
  }
  
  .search-container{
    display: flex;
   
    justify-content: center;
    align-items: center;
    
    /* align-items: center; */
    gap: 20px;
  }
  
  .explore{
    display: flex;
    gap: 90px;
  }
  
  .explore ul{
    list-style-type: none; /* Removes bullets from the list */
    font-family: "Macan", "Helvetica Neue", Helvetica, Arial, sans-serif;

  }

  .explore li{
    color:rgb(85, 78, 78);
    cursor: pointer;
    margin-bottom: 15px;
  }

  .explore li:hover{
    color:white;
    background-color: rgb(52, 176, 166);
    cursor: pointer;
  }

  #expHeading {
    font-family: "Arial", "Helvetica Neue", sans-serif; /* Clean font family */
    margin-top: 25px;
    margin-left: 39px;
    font-size: 30px; 
    font-weight: bold; /* Make it bold */
    color: #333333; /* Dark gray color for text */
}



    </style>
</head>
<body>
 
<div class="searchbox">
   
    <p id="searchbox-slogan"  >
    <span style="font-size:50px; font-weight: bold; "> 
       Programming & Tech
    </span> <br>

      <span style="font-size: 20px">You think it. A programmer develops it.</span>
    </p>
  
  </div> 
  <h2 id="expHeading">Explore  Programming & Tech</h2>
  <div  class="explore">

<ul class="websites">
<?php echo '<img src="images/websites.jpg" alt="Search" width="250" height="150" style="border-radius: 15px;">'; ?>

  <h2>Websites</h2>
  <li>Website Development</li>
  <li>Website Maintenance</li>
  <li>Wordpress</li>
  <li>Shopify</li>
  <li>Custom Websites</li>
</ul>

<ul class="appDev">
<?php echo '<img src="images/appDev.png" alt="Search" width="260" height="150" style="border-radius: 15px;">'; ?>

  <h2>Application Development</h2>
  <li>Web Application</li>
  <li>Desktop Application</li>
  <li>Game Development</li>
  <li>Chatbot Development</li>
  <li>Browser Extensions</li>
</ul>

<ul class="softDev">
<?php echo '<img src="images/softDev.jpg" alt="Search" width="250" height= "150" style="border-radius: 15px;">'; ?>

  <h2> Software Development</h2>
  <li>Software Development</li>
  <li>AI Development</li>
  <li>APIs & Integration</li>
  <li>Scripting</li>
  <li>Plugins Develoment</li>
</ul>

<ul class="mobileApps">
<?php echo '<img src="images/mobileApps.jpeg" alt="Search" width="250" height="150" style="border-radius: 15px;" >'; ?>

  <h2>Mobile Apps</h2>
  <li>Mobile App Development</li>
  <li>Cross-Platofrm Apps</li>
  <li>Android App Development</li>
  <li>iOS App Development</li>
  <li>Mobile App Maintenace</li>
</ul>


</div>

   
    
</body>
</html>
