import { catchAsync } from "../helpers/catchAsync.js";
import { createJWT, findGroupByName, findUserbyemail } from "../services/user.js";
import User from '../models/user.js';
import Job from "../models/job.js";
import Hired from "../models/hired.js";


//graphic feature
const fgraphic = catchAsync( async function (req,res) {
  res.render('freelancerLogin/f-graphic', { message: "" }); 
})

// Fetch jobs and render graphic.ejs
const getGraphicDesignJobs = async (req, res) => {

  try {
   
      const jobs = await Job.find({jobTitle: "Graphics & Design"}); // Fetch all jobs (or apply filters if needed)

    const jobsWithProfiles = await Promise.all(jobs.map(async (job) => {
      const freelancer = await User.findById(job.userId); // Fetch freelancer based on userId
      const profileImage = freelancer ? freelancer.profileImage : null; // Get freelancer's profileImage or null if not found
      job.profilePicture = profileImage; // Attach profileImage to job object
      return job; // Return modified job
    }));
    
    res.render('userLogin/graphic', { jobs : jobsWithProfiles }); // Pass the jobs to the graphic.ejs template
  } catch (err) {
    console.error('Error fetching graphic design jobs:', err);
    res.status(500).send('Error retrieving jobs');
  }
};

// Fetch jobs and render graphic.ejs
const getprogrammingTechJobs = async (req, res) => {

  try {
      const jobs = await Job.find({jobTitle: "Digital Marketing"});

    const jobsWithProfiles = await Promise.all(jobs.map(async (job) => {
      const freelancer = await User.findById(job.userId); // Fetch freelancer based on userId
      const profileImage = freelancer ? freelancer.profileImage : null; // Get freelancer's profileImage or null if not found
      job.profilePicture = profileImage; // Attach profileImage to job object
      return job; // Return modified job
    }));
    
    res.render('userLogin/programming&Tech', { jobs : jobsWithProfiles }); // Pass the jobs to the graphic.ejs template
  } catch (err) {
    console.error('Error fetching graphic design jobs:', err);
    res.status(500).send('Error retrieving jobs');
  }
};

// Fetch jobs and render graphic.ejs
const getDigitalMarketingJobs = async (req, res) => {

  try {
      const jobs = await Job.find({jobTitle: "Programming & Tech"}); // Fetch all jobs (or apply filters if needed)

    const jobsWithProfiles = await Promise.all(jobs.map(async (job) => {
      const freelancer = await User.findById(job.userId); // Fetch freelancer based on userId
      const profileImage = freelancer ? freelancer.profileImage : null; // Get freelancer's profileImage or null if not found
      job.profilePicture = profileImage; // Attach profileImage to job object
      return job; // Return modified job
    }));
    
    res.render('userLogin/digitalMarketing', { jobs : jobsWithProfiles }); // Pass the jobs to the graphic.ejs template
  } catch (err) {
    console.error('Error fetching graphic design jobs:', err);
    res.status(500).send('Error retrieving jobs');
  }
};


// Fetch jobs and render graphic.ejs
const getvideoAnimationJobs = async (req, res) => {

  try {
      const jobs = await Job.find({jobTitle: "Video & Animation"}); // Fetch all jobs (or apply filters if needed)

    const jobsWithProfiles = await Promise.all(jobs.map(async (job) => {
      const freelancer = await User.findById(job.userId); // Fetch freelancer based on userId
      const profileImage = freelancer ? freelancer.profileImage : null; // Get freelancer's profileImage or null if not found
      job.profilePicture = profileImage; // Attach profileImage to job object
      return job; // Return modified job
    }));
    
    res.render('userLogin/video&Animation', { jobs : jobsWithProfiles }); // Pass the jobs to the graphic.ejs template
  } catch (err) {
    console.error('Error fetching graphic design jobs:', err);
    res.status(500).send('Error retrieving jobs');
  }
};
const viewDetails = catchAsync(async function (req, res) {
  try {
    const jobId = req.params.id; // Get job ID from URL params
    const job = await Job.findById(jobId); // Fetch the job by ID
    
    if (!job) {
      return res.status(404).send("Job not found");
    }

    // Fetch freelancer details
    const freelancer = await User.findById(job.userId);

    if (!freelancer) {
      return res.status(404).send("Freelancer not found");
    }

    res.render('userLogin/viewDetails', {
      job,
      freelancer,
      message: "", // Optional if needed
    }); // Pass job and freelancer data to the viewDetails.ejs
  } catch (err) {
    console.error("Error fetching job details:", err);
    res.status(500).send("Error retrieving job details");
  }
});

// Function to hire a freelancer
const hireFreelancer = async (req, res) => {
  try {
    const { jobId } = req.params; // Job ID from URL
    //logged in user
    const loggedInUser = req.user;  // Logged-in user (admin)
    const userId = loggedInUser._id;  // Get logged-in user's ID
    const user = await  User.findById(userId);
  
    
    // Find the job to update
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).render("error", { message: "Job not found!" });
    }

    const freelancer = await User.findById(job.userId);
    console.log(freelancer)
    if (!freelancer) {
      return res.status(404).send('Freelancer not found');
    }

    // Update job status to 'hired' and link the client
    job.status = 'hired';
    job.hiredBy = user._id; // Assuming you store the client/user who hired
    await job.save();

     // Create a new Hired record
    const hired = new Hired({
      freelancer: freelancer._id,
      paymentAmount: job.hourlyRate,
      job: job._id,
      hiredBy: user._id,
      paymentStatus: 'Pending', // Or use your own status
      message: 'Freelancer hired successfully'
    });
     await hired.save();  // Save the new record

     // Redirect to the success page with query parameters
     res.redirect("/hired-freelancer")
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while hiring the freelancer.');
  }
};

const hireMessage = async (req, res) => {
  try {
console.log(" Helllo worlds")
   // Get the latest hired record for the logged-in user
   const loggedInUser = req.user;
   const latestHired = await Hired.findOne({ hiredBy: loggedInUser._id })
                                  .sort({ createdAt: -1 }) // Sort by createdAt in descending order to get the latest hire
                                  .populate('freelancer') // Populate freelancer details
                                  .populate('job'); // Populate job details
   if (!latestHired) {
      return res.status(404).send('No recent hire found.');
    }
 

    const { freelancer, job } = latestHired; // Extract freelancer and job from the populated hire record
    const freelancerObj = await User.findById(freelancer);
    const jobObj = await User.findById(job)

    res.render('userLogin/hired-freelancer', {
      freelancer: freelancerObj ,
      job ,
      message: latestHired.message,
      paymentStatus: latestHired.paymentStatus,
    });
  } catch (error) {
    console.error('Error fetching freelancer or job details:', error);
    res.status(500).send('An error occurred while processing your request.');
  }
};

////
const paymentPage = async (req, res) => {
  const { jobId, freelancerId } = req.query;

  // Fetch job and freelancer details from DB (Replace with your actual DB query)
  const job = await Job.findById(jobId);
  const freelancer = await User.findById(freelancerId);

  res.render("userLogin/payment", { job, freelancer });
}


 const userAuthController = { fgraphic, getGraphicDesignJobs,getprogrammingTechJobs, getDigitalMarketingJobs,getvideoAnimationJobs,viewDetails, hireFreelancer, hireMessage, paymentPage}
export default userAuthController