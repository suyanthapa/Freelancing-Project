<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Job for Freelancer</title>
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
        
        <!-- Freelancer user_id is automatically populated -->
        <input type="hidden" name="freelancer_id" value="<?php echo $_SESSION['user_id']; ?>">

        <!-- Job-related fields -->
        <input type="text" name="jobTitle" placeholder="Job Title (e.g., Java Developer)" required>
        <input type="number" name="hourlyRate" placeholder="Hourly Rate (e.g., 50)" required>
        <input type="number" step="0.1" name="rating" placeholder="Rating (e.g., 4.5)" required>
        <input type="number" name="jobsCompleted" placeholder="Jobs Completed" required>
        <textarea name="skills" placeholder="Skills (comma-separated, e.g., Java, PostgreSQL Programming)" required></textarea>
        <input type="file" name="profileImage" accept="image/*" required>

        <button type="submit">Add Job</button>
    </form>
</body>
</html>