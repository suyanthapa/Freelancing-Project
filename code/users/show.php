<?php
// Include database connection
include('../connection.php');

// Fetch all jobs from the database
$sql = "SELECT * FROM jobs"; // Query to get all jobs from the jobs table
$result = $con->query($sql);

// Check if there are any jobs in the database
if ($result->num_rows > 0) {
    // Loop through each job and display it in a box model
    while ($job = $result->fetch_assoc()) {
        // Extract data from the current job
        $jobTitle = isset($job['job_title']) ? $job['job_title'] : 'No Title';
        $hourlyRate = isset($job['hourly_rate']) ? $job['hourly_rate'] : 'N/A';
        $rating = isset($job['rating']) ? $job['rating'] : 'N/A';
        $jobsCompleted = isset($job['jobsCompleted']) ? $job['jobsCompleted'] : '0';
        $skills = isset($job['skills']) ? $job['skills'] : 'No skills listed';
        $profileImage = isset($job['profileImage']) ? $job['profileImage'] : null; // Blob data

        // Convert skills from comma-separated string to a list
        $skillsList = implode(", ", explode(",", $skills));

        // Handle the image
        $imageSrc = $profileImage ? 'data:image/jpeg;base64,' . base64_encode($profileImage) : 'default-image.jpg';

        echo "
        <div style='border: 1px solid #ddd; border-radius: 10px; padding: 20px; margin: 10px; text-align: center; width: 250px; display: inline-block;'>
            <div style='width: 100px; height: 100px; overflow: hidden; margin: 0 auto; border-radius: 50%;'>
            
                <img src='{$imageSrc}' alt='{$jobTitle}' style='width: 100%; height: 100%; object-fit: cover;'>
            </div>
            <h3>{$jobTitle}</h3>
            <p><strong>\${$hourlyRate}/hr</strong></p>
            <p>⭐ {$rating}/5.0 ({$jobsCompleted} jobs)</p>
            <p>Skills: $skillsList</p>
        </div>
        ";
    }
} else {
    echo "<p>No jobs found in the database.</p>";
}
?>
