<?php
session_start();

// Include the functions and database connection
include("connection.php");
include("function.php");

// Check if the user is logged in
$user_data = check_login($con);

// Fetch the profile from the database
$user_id = $user_data['user_id']; // Get the logged-in user's user_id
$query = "SELECT profile FROM users WHERE user_id = '$user_id' LIMIT 1"; // Query to get the profile data

// Execute the query
$result = mysqli_query($con, $query);

// Check if the query was successful and fetch the result
if ($result && mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $_SESSION['profile'] = $row['profile']; // Set the profile from the database
} else {
    // Handle case where profile is not found (set a default profile if needed)
    $_SESSION['profile'] = 'Seller'; // You can change this logic as needed
}

// Handle profile switch
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['switch_profile'])) {
    // Toggle the profile
    $_SESSION['profile'] = ($_SESSION['profile'] === 'Seller') ? 'Freelancer' : 'Seller';

    // Update the database with the new profile
    $new_profile = $_SESSION['profile'];
    $query = "UPDATE users SET profile = '$new_profile' WHERE user_id = '{$user_data['user_id']}'";
    mysqli_query($con, $query);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Settings</title>
</head>
<body>
    <h1>User Profile</h1>
    <h3>Hi!  <?php echo htmlspecialchars($user_data['first_name']) ?></h3>

    <!-- Display Current Profile -->
    <p>Current Profile: <strong><?php echo htmlspecialchars($_SESSION['profile']); ?></strong></p>

    <!-- Profile Switch Button -->
    <form method="POST">
        <button type="submit" name="switch_profile">
            Switch to <?php echo ($_SESSION['profile'] === 'Seller') ? 'Freelancer' : 'Seller'; ?>
        </button>
    </form>

    <!-- Other Profile Settings -->
    <h2>Update Profile</h2>
    <form method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value="<?php echo htmlspecialchars($user_data['first_name']); ?>" required>
        <button type="submit" name="update_name">Update Name</button>
    </form>



    
   <!-- Profile Switch Button -->
   <form method="POST">
        <button type="submit" name="switch_profile">
            Switch to <?php echo ($_SESSION['profile'] === 'Seller') ? 'Freelancer' : 'Seller'; ?>
        </button>
    </form>

    <!-- Conditional Redirect Buttons -->
    <?php 
    if ($_SESSION['profile'] === "Seller"): 
    ?>
        <a href="dashboardL.php">
            <button id="backToSignup" class="back-button">← Back</button>
        </a><br>
    <?php 
    else: 
    ?>
        <a href="login.php">
            <button id="backToSignup" class="back-button">← Back</button>
        </a><br>
    <?php 
    endif; 
    ?>

</body>
</html>
