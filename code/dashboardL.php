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
 
     
        .features{
            margin-top: 150px;
            font-family: Arial, sans-serif;
            font-size: 1.2rem;
        }

        .features ul
         {
            margin-left: 20px;
            list-style-type: none; /* Removes bullet points */
            gap: 20px; /* Adds space between items */
            flex-wrap: nowrap; /* Prevents items from wrapping to the next line */
            display: flex;
            border-bottom: 3px solid #e5e5e5;
        }

        .features li {
            margin-bottom: 8px; /* Adds space between list items */
            border: 1px solid black;
            width: 120px;
            height: 70px;
            border-radius: 8px; 

            display: flex; /* Make each list item a flex container */
            justify-content: center; /* Horizontally center the content */
            align-items: center; /* Vertically center the content */
            padding: 10px 20px; /* Add padding inside the list item */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            
        }

        .features li:hover {
          background-color:rgb(157, 168, 242);
          border: none;
        }

        .features #gd{
            background-color:rgb(66, 233, 69);
        }
        .features #pt{
            background-color:rgb(122, 75, 121);
        }
        .features #dm{
            background-color:rgb(216, 143, 70);
            
        }
        .features #va{
            background-color:rgb(142, 69, 127);
        }
        .features #wt{
            background-color:rgb(178, 213, 39);
        }
        .features #ma{
            background-color:rgb(68, 146, 164);
        }
    </style>
</head>
<body>
 

    <div class="features">
        <h2>Our Services</h2>
        <ul >
                    <li id="gd">
                        <a href="graphics.php" style="text-decoration: none;">Graphics & Design</a>
                    </li>
                    <li id="pt">Programming & Tech</li>
                    <li id="dm">Digital Marketing</li>
                    <li id="va">Video & Animation</li>
                    <li id="wt">Writing & Translation</li>
                    <li id="ma">Music & Audio</li>
         </ul>
                
     </div>
    
</body>
</html>
