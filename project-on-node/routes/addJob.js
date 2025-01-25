import { Router } from "express";

import validate from "../middlewares/validate.js"
import authValidation from '../validation/user.js';
import authController from '../controllers/auth.js'
import userAuthController from "../controllers/userAuth.js";
import { restrictToLoggedinUserOnly } from "../middlewares/auth.js";
import jobController from "../controllers/job.js";


const jobRouter = Router();

// Route to fetch and display jobs
jobRouter.get('/show', jobController.getJobs);



// Route to render the add job form (GET)
jobRouter.get('/addJob', (req, res) => {
  res.render('userLogin/addJob'); // Renders the form
});


export default jobRouter