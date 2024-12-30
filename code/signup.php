<?php
session_start();
include_once "connection.php";
include_once "function.php";

$error_message = "";
$table = "users"; // Default table

// Handle signup form submission
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['formType']) && $_POST['formType'] === 'signup') {
    $firstName = mysqli_real_escape_string($con, $_POST['firstName']);
    $lastName = mysqli_real_escape_string($con, $_POST['lastName']);
    $username = mysqli_real_escape_string($con, $_POST['newUsername']);
    $password = mysqli_real_escape_string($con, $_POST['newPassword']);
    $confirmPassword = $_POST['confirmPassword'];
    $userType = $_POST['userType'] ?? 'users'; // Get user type from form input

    // Validate input fields
    if (!empty($firstName) && !empty($lastName) && !empty($username) && !empty($password) && !is_numeric($username)) {
        if ($password !== $confirmPassword) {
            $error_message = "Passwords don't match.";
        }

        // Determine table and profile based on user type
        $table = ($userType === 'freelancer') ? 'freelancer' : 'users';
        $profile = ($userType === 'freelancer') ? 'freelancer' : 'user';

        // Check if the username already exists in the selected table
        $checkUserQuery = "SELECT * FROM $table WHERE username = '$username' LIMIT 1";
        $checkResult = mysqli_query($con, $checkUserQuery);

        if ($checkResult && mysqli_num_rows($checkResult) > 0) {
            $error_message = "Username already exists!";
        }

        // If no errors, insert the new user into the selected table
        if (empty($error_message)) {
            $user_id = random_num(20); // Generate a random user ID
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT); // Hash password

            $query = "INSERT INTO $table (user_id, first_name, last_name, username, password, profile) 
                      VALUES ('$user_id', '$firstName', '$lastName', '$username', '$hashedPassword', '$profile')";

            if (mysqli_query($con, $query)) {
                header("Location: freelancer.php"); // Redirect to login page after successful signup
                die;
            } else {
                $error_message = "Error: " . mysqli_error($con);
            }
        }
    } else {
        $error_message = "Please fill out all fields correctly.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <link rel="stylesheet" href="css/styles.css">
    <style>
        /* General Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body, html {
            min-height: 100vh;
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #4e54c8, #8f94fb);
            display: flex;
            justify-content: center;
            overflow-y: auto;
        }

        .signup {
            width: 100%;
            max-width: 500px;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            padding: 30px;
            text-align: center;
            margin: 50px 20px;
            position: relative;
        }

        .back-button {
            position: absolute;
            top: 10px;
            left: 10px;
            background: none;
            border: none;
            font-size: 16px;
            color: #ffffff;
            background-color: #4e54c8;
            cursor: pointer;
            padding: 5px 10px;
            border-radius: 4px;
        }

        .back-button:hover {
            background-color: rgb(157, 161, 227);
        }

        .signup h2 {
            font-size: 28px;
            color: #333;
            margin-bottom: 10px;
        }

        #signIn {
            font-size: 16px;
            color: #666;
            margin-bottom: 20px;
        }

        #signIn a {
            color: #4e54c8;
            text-decoration: none;
            font-weight: bold;
        }

        .createForm label {
            display: block;
            text-align: left;
            margin: 10px 0 5px;
            font-size: 14px;
            color: #333;
        }

        .createForm input[type="text"],
        .createForm input[type="password"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 6px;
            outline: none;
        }

        .createForm input:focus {
            border-color: #4e54c8;
        }

        #signup {
            width: 100%;
            padding: 10px;
            margin-top: 20px;
            background: linear-gradient(135deg, #4e54c8, #8f94fb);
            border: none;
            border-radius: 6px;
            color: #fff;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }

        #signup:hover {
            background: linear-gradient(135deg, #6c72e9, #a3a8f0);
        }

        .user-type-buttons button {
            margin: 5px;
            padding: 10px;
            background: #ddd;
            border: none;
            border-radius: 6px;
            cursor: pointer;
        }

        .user-type-buttons button:hover {
            background: #bbb;
        }
    </style>
</head>

<body>
    <div class="signup">
        <a href="index.php"><button id="backToSignup" class="back-button">← Back</button></a><br>
        <h2>Create a new Account</h2>
        <p id="signIn">Already have an account? <a href="login.php">Sign in</a></p>

        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
            <input type="hidden" name="formType" value="signup">

            <div class="createForm">
                <label for="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" required><br>

                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" required><br>

                <label for="username">Username</label>
                <input type="text" name="newUsername" id="newUsername" required><br>

                <label for="password">Password</label>
                <input type="password" name="newPassword" id="newPassword" required><br>

                <label for="confirmPassword">Confirm Password</label>
                <input type="password" name="confirmPassword" id="confirmPassword" required><br>

                <div class="user-type-buttons">
                    <button type="button" onclick="document.getElementById('userType').value='users'">As User</button>
                    <button type="button" onclick="document.getElementById('userType').value='freelancer'">As Freelancer</button>
                </div>
                <input type="hidden" name="userType" id="userType" value="users">

                <?php if (!empty($error_message)): ?>
                    <p style="color: red; font-size: small;"><?php echo $error_message; ?></p>
                <?php endif; ?>

                <input type="submit" value="Signup as User" id="signup">
                <p id="terms">By joining, you agree to the Terms of Service and occasionally receive emails from us.</p>
            </div>
        </form>
    </div>
</body>

</html>
