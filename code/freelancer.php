<?php
// Handle the form submission
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Process the form data as needed
    // For simplicity, we'll just collect the form data here
    $fullName = $_POST['fullName'] ?? '';
    $description = $_POST['description'] ?? '';
    $education = $_POST['education'] ?? '';
    $skills = $_POST['skills'] ?? '';
    $occupation = $_POST['occupation'] ?? '';
    $certification = $_POST['certification'] ?? '';
    $certifiedFrom = $_POST['certifiedFrom'] ?? '';
    $personalwebsite = $_POST['personal-website'] ?? '';
    $experienceLevel = $_POST['experienceLevel'] ?? '';

   header("Location: dashboardL.php");
   die;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal Info</title>
    <style>
        /* General Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 0;
        }

        /* Header */
        .header {
            background-color: #fff;
            padding: 20px;
            border-bottom: 1px solid #e0e0e0;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
            color:rgb(33, 27, 147);
        }

        .form-intro {
    text-align: center;
    margin-bottom: 30px;
    padding: 20px;
    background-color: #f4f6f8; /* Light gray background */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.form-intro h1 {
    font-size: 28px;
    font-weight: bold;
    color: #4e54c8; /* Primary color */
    margin-bottom: 10px;
}

.form-intro p {
    font-size: 16px;
    color: #333; /* Neutral text color */
    line-height: 1.6; /* Spacing between lines */
    margin: 10px 0;
}

.form-intro p em {
    font-size: 14px;
    color: #555; /* Slightly lighter color for emphasis */
}

        /* Form Container */
        .content-container {
            max-width: 80%;
            margin: 40px auto;
            padding: 20px;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .content-container h1 {
            margin-bottom: 40px;
        }

        .form-group {
            margin-bottom: 20px;
        }
        .form-group label {
            display: block;
            font-weight: bold;
            margin-top: 15px;
            color: #333;
        }

        .form-group input {
            height: 100%;
            width: 100%;
            padding: 5px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            margin-bottom: 15px;
            margin-top : 5px;
        }

        #description {
            height: 150px;
            width: 100%;
            padding: 5px;
            font-size: 14px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
            margin-bottom: 15px;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 16px;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
            border-color: #4caf50;
        }

        .form-group button {
            width: 100%;
            padding: 10px;
            border: none;
            background-color: #4e54c8;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            border-radius: 6px;
            cursor: pointer;
        }

        .form-group button:hover {
            background-color: rgb(157, 161, 227);
        }

        .back-button {
            background: none;
            border: none;
            font-size: 16px;
            color: #ffffff;
            background-color:rgb(204, 90, 172);
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 4px;
        }

        .back-button:hover {
            background-color: rgb(88, 6, 45);
        }

    </style>
</head>

<body>
    <div class="header">
        <div class="logo">Kaaj</div>
    </div>

    <div class="form-intro">
    <h1>Build Your Professional Profile</h1>
    <p>
        Create a detailed profile to showcase your skills, experience, and certifications. 
        This will help potential clients learn more about you and connect with you for projects.
    </p>
</div>

    <div class="content-container">
        <h1>Personal Info</h1>
        <!-- <form action="" method="post"> -->

        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">

            <!-- Personal Info Section -->
            <div class="form-group">
                <label for="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" placeholder="eg. John Smith " value="<?= $fullName ?? '' ?>" required>

                <label for="description">Description</label>
                <input type="text" id="description" name="description" placeholder="Enter a brief description here"  value="<?= $description ?? '' ?>" required>
            </div>

            <hr>

            <!-- Professional Info Section -->
            <h1>Professional Info</h1>
            <div class="form-group">
                
                 <label for="occupation">Your Occupation</label>
                <input type="text" id="occupation" name="occupation"  placeholder="eg. Digital Marketing " value="<?= $occupation ?? '' ?>" required>

                <label for="skills">Your Skills</label>
                <input type="text" id="skills" name="skills" placeholder="eg. Voice Talent " value="<?= $skills ?? '' ?>" required>

                <div class="relative inline-block w-full">
                        <select class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-500">
                            <option disabled selected>Experience Level</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Expert</option>
                        </select>
                        </div>


                <label for="education">Education</label>
                <input type="text" id="title" name="title" placeholder="Title " value="<?= $education ?? '' ?>" required>
                <input type="text" id="education" name="education" placeholder="Major " value="<?= $education ?? '' ?>" required>

                <label for="certification">Certifaction</label>
                <input type="text" id="certification" name="certification" placeholder="Certification or Award " value="<?= $certification ?? '' ?>" required>
                <input type="text" id="certifiedFrom" name="certifiedFrom" placeholder="Certified From (e.g. Google ) " value="<?= $certifiedFrom ?? '' ?>" required>
          
                <label for="personal-website">Personal Website</label>
                <input type="text" id="personal-website" name="personal-website" placeholder="Provide a link to your own professional website " value="<?= $personalwebsite ?? '' ?>" required>

        
                
         
            <hr>

          
            
           <button type="submit" name="action" value="continue">Save and Continue</button>
            </div>
        </form>

        
    </div>
</body>

</html>
