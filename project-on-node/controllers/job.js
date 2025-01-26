import multer from 'multer';
import Job from '../models/job.js';
import { catchAsync } from '../helpers/catchAsync.js';
import User from '../models/user.js';




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
  const loggedInUser = req.user;  // Logged-in user (admin)
  const userId = loggedInUser._id;  // Get logged-in user's ID
  const user = await  User.findById(userId);

  if(user.profile === "freelancer"){
    res.render('freelancerLogin/addJob', {user, message: "" }); 
  }
  else{
    res.render('beforeLogin/login', {user, message: "" }); 
  }
}

// Controller to handle the form submission (POST)
const submitJob = async function (req, res) {
  const loggedInUser = req.user;  // Logged-in user (admin)
  const userId = loggedInUser._id;  // Get logged-in user's ID
  const user = await  User.findById(userId);

  const { jobTitle, hourlyRate, skills, customLabel } = req.body;
 const profileImage = req.file; // Handle uploaded profile image

 try {
    // Create a new job with the provided details
    const newJob = new Job({
      userId : user._id,
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


const jobController = {submitJob, renderAddJobPage};
export default jobController