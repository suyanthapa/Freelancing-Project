import multer from 'multer';
import Job from '../models/job.js';
import { catchAsync } from '../helpers/catchAsync.js';





// Get all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find(); // Fetch all jobs from MongoDB
    res.render('show', { jobs });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching jobs');
  }
};



// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify where to save the uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Ensure unique filenames for each upload
  }
});
const upload = multer({ storage: storage });



// Controller to render the add job page (GET)
async function renderAddJobPage(req, res) {
  res.render('freelancerLogin/addJob'); // Render the job creation form
}

// Controller to handle the form submission (POST)
const submitJob = async function (req, res) {
  const { jobTitle, hourlyRate, skills, customLabel } = req.body;
 const profileImage = req.file; // Handle uploaded profile image

 try {
    // Create a new job with the provided details
    const newJob = new Job({
      jobTitle,
      hourlyRate,
    
      
      skills: skills.split(','), // Convert comma-separated skills into an array
      profileImage: profileImage ? '/uploads/' + profileImage.filename : '/images/default-image.jpg', // Save image path
      customLabel : customLabel
    });

    await newJob.save(); // Save the new job to the database

    // Redirect to a job listing page or confirmation page after adding the job
    res.redirect('/freelancerDashboard'); 
  } catch (error) {
    console.error('Error creating job:', error);
    res.status(500).send('Error adding job');
  }
}



const jobController = {getJobs, submitJob, renderAddJobPage};
export default jobController