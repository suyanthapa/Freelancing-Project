import { catchAsync } from "../helpers/catchAsync.js";
import { createJWT, findGroupByName, findUserbyemail } from "../services/user.js";
import User from '../models/user.js';
import Job from "../models/job.js";


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


 const userAuthController = { fgraphic, getGraphicDesignJobs, viewDetails}
export default userAuthController