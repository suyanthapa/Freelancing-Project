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
            background-color:rgb(152, 37, 50);
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
    background-color: rgb(152, 37, 50);
    cursor: pointer;
  }


    </style>
</head>
<body>
 
<div class="searchbox">
    
   
    <p id="searchbox-slogan"  >
    <span style="font-size:50px; font-weight: bold; "> 
       Digital Marketing
    </span> <br>

      <span style="font-size: 20px">Build your brand. Grow your business.</span>
    </p>
    
  </div> 
   
  <div  class="explore">

<ul class="search">

<?php echo '<img src="images/search.jpg" alt="Search" width="250" height="150" style="border-radius: 15px;">'; ?>

  <h2>Search</h2>
  <li>Search Engine Optimization (SEO)</li>
  <li>Search Engine Marketing (SEM)</li>
  <li>Local SEO</li>
  <li>E-Commerce SEO</li>
  <li>Video SEO</li>
</ul>

<ul class="social">
<?php echo '<img src="images/social.jpg" alt="Search" width="250" height="150" style="border-radius: 15px;">'; ?>

  <h2>Social</h2>
  <li>Paid Social Media</li>
  <li>Social Media Marketing</li>
  <li>Social Commerce</li>
  <li>Influencer Marketing</li>
  <li>Community Management</li>
</ul>

<ul class="art">
<?php echo '<img src="images/methods.png" alt="Search" width="250" height= "150" style="border-radius: 15px;">'; ?>

  <h2>Methods & Techniques</h2>
  <li>Video Markeiting</li>
  <li>E-Commerce Marketing</li>
  <li>Email Marketing</li>
  <li>Email Automations</li>
  <li>Guest Posting</li>
</ul>

<ul class="archtitecture">
<?php echo '<img src="images/analytics.jpeg" alt="Search" width="250" height="150" style="border-radius: 15px;" >'; ?>

  <h2>Analytics & Strategy</h2>
  <li>Brand Strategy</li>
  <li>Digital Marketing Strategy</li>
  <li>UGC Strategy</li>
  <li>Marketing Concepts & Ideation</li>
  <li>Marketing Advice</li>
</ul>


</div>

    
</body>
</html>
