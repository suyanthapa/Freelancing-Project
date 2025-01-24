import Job from "../models/job";


// Fetch all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find(); // Use your ORM or database query to fetch jobs
    res.render('jobs', { jobs }); // Render EJS template and pass jobs data
  } catch (error) {
    res.status(500).send('Error fetching jobs');
  }
};

// Add a new job
const addJob = async (req, res) => {
  const { jobTitle, hourlyRate, rating, jobsCompleted, skills, profileImage } = req.body;
  try {
    const newJob = new Job({
      jobTitle,
      hourlyRate,
      rating,
      jobsCompleted,
      skills: skills.split(',').map((skill) => skill.trim()), // Convert comma-separated skills to array
      profileImage,
    });
    await newJob.save(); // Save to the database
    res.redirect('/jobs');
  } catch (error) {
    res.status(500).send('Error adding job');
  }
};

const jobController = { addJob, getJobs}
export default jobController;