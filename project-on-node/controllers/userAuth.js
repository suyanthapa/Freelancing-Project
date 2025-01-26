import { catchAsync } from "../helpers/catchAsync.js";
import { createJWT, findGroupByName, findUserbyemail } from "../services/user.js";
import User from '../models/user.js';
import Job from "../models/job.js";


//graphic feature
const graphic = catchAsync( async function (req,res) {
  res.render('userLogin/graphic', { message: "" }); 
})




// Fetch jobs and render graphic.ejs
const getGraphicDesignJobs = async (req, res) => {

  try {
    const jobs = await Job.find({jobTitle: "Graphics & Design"}); // Fetch all jobs (or apply filters if needed)
    console.log(" jooooooooooooooooooooobbbbbbb:"+ jobs)
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

 


const userAuthController = { graphic, getGraphicDesignJobs}
export default userAuthController