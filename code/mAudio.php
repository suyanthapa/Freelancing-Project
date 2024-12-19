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
            background-color:rgb(24, 37, 7);
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
       Music & Audio
    </span> <br>

      <span style="font-size: 20px">Don't miss a beat. Bring your sound to life.</span>
    </p>
    
   

  </div> 
   
    
</body>
</html>
