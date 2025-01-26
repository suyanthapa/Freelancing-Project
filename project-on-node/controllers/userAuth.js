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
    console.log("The data is :"+jobs)
    res.render('userLogin/graphic', { jobs }); // Pass the jobs to the graphic.ejs template
  } catch (err) {
    console.error('Error fetching graphic design jobs:', err);
    res.status(500).send('Error retrieving jobs');
  }
};

 


const userAuthController = { graphic, getGraphicDesignJobs}
export default userAuthController