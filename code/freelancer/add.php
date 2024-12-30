<?php
session_start();

// Include database connection
include('../connection.php');

// Ensure the user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php"); // Redirect to login if not logged in
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $user_id = $_SESSION['user_id']; // Get user ID from session (this is the reference to the freelancer)
    $jobTitle = $_POST['jobTitle'];
    $hourlyRate = $_POST['hourlyRate'];
    $rating = $_POST['rating'];
    $jobsCompleted = $_POST['jobsCompleted'];
    $skills = $_POST['skills']; // Store as a comma-separated string
    $profileImage = $_FILES['profileImage'];

    // Check if freelancer exists in the freelancer table
    $sql = "SELECT COUNT(*) FROM freelancer WHERE user_id = ?";
    $stmt = $con->prepare($sql);
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $stmt->bind_result($count);
    $stmt->fetch();
    $stmt->close();

    // If freelancer doesn't exist, show an error message
    if ($count == 0) {
        echo "Freelancer not found. Please register as a freelancer.";
        exit();
    }

    // Check if file is uploaded
    if (isset($profileImage) && $profileImage['error'] == 0) {
        // Validate the image size
        if ($profileImage['size'] > 2 * 1024 * 1024) { // 2MB limit
            echo "Image size must be less than 2MB.";
            exit();
        }
    
        // Read the image file as binary
        $imageData = file_get_contents($profileImage['tmp_name']);
    
        // Prepare and execute the SQL query to insert job details into the database
        $stmt = $con->prepare("INSERT INTO jobs (user_id, job_title, hourly_rate, rating, jobsCompleted, skills, profileImage) VALUES (?, ?, ?, ?, ?, ?, ?)");

        $stmt->bind_param("isdiisb", $user_id, $jobTitle, $hourlyRate, $rating, $jobsCompleted, $skills, $imageData);

        // $stmt->bind_param("isdiisb", $user_id, $jobTitle, $hourlyRate, $rating, $jobsCompleted, $skills);
        $stmt->send_long_data(6, $imageData); // Send the binary data for the image
        $stmt->execute();
    
        if ($stmt->error) {
            echo "Error: " . $stmt->error;
        } else {
            // Redirect back to the display page (graphics.php)
            header("Location: graphics.php");
            exit();
        }
    
        $stmt->close();
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
    
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Freelancer Job</title>
    <style>
        form {
            max-width: 500px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 12px;
        }
        form input, form textarea, form select, form button {
            width: 100%;
            margin: 10px 0;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 8px;
        }
        form button {
            background: #4CAF50;
            color: white;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <form action="add.php" method="POST" enctype="multipart/form-data">
        <h2>Add Job for Freelancer</h2>
        <input type="text" name="jobTitle" placeholder="Job Title" required>
        <input type="number" name="hourlyRate" placeholder="Hourly Rate" required>
        <input type="number" step="0.1" name="rating" placeholder="Rating (e.g., 4.5)" required>
        <input type="number" name="jobsCompleted" placeholder="Jobs Completed" required>
        <textarea name="skills" placeholder="Skills (comma-separated)" required></textarea>
        <input type="file" name="profileImage" accept="image/*" required>
        <button type="submit">Add Job</button>
    </form>
</body>
</html>
