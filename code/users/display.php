<?php
function createFreelancerCard($name, $profession, $hourlyRate, $rating, $jobsCompleted, $skills, $imageURL) {
    $skillsList = implode(", ", $skills);
    return "
    <div style='border: 1px solid #ddd; border-radius: 10px; padding: 20px; margin: 10px; text-align: center; width: 250px; display: inline-block;'>
        <img src='$imageURL' alt='$name' style='width: 100px; height: 100px; border-radius: 50%; object-fit: cover; margin-bottom: 10px;'>
        <h3>$name</h3>
        <p>$profession</p>
        <p><strong>\$$hourlyRate/hr</strong></p>
        <p>⭐ $rating/5.0 ($jobsCompleted jobs)</p>
        <p>Skills: $skillsList</p>
    </div>
    ";
}

// Load data from the JSON file
$filePath = "../freelancer/freelancers.json";
$freelancers = file_exists($filePath) ? json_decode(file_get_contents($filePath), true) : [];

if (!empty($freelancers)) {
    foreach ($freelancers as $freelancer) {
        echo createFreelancerCard(
            $freelancer['name'],
            $freelancer['profession'],
            $freelancer['hourlyRate'],
            $freelancer['rating'],
            $freelancer['jobsCompleted'],
            explode(',', $freelancer['skills']),
            $freelancer['imageURL']
        );
    }
} else {
    echo "<p>No freelancers added yet.</p>";
}
?>
