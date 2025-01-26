import { Router } from "express";

import validate from "../middlewares/validate.js"
import authValidation from '../validation/user.js';
import authController from '../controllers/auth.js'
import userAuthController from "../controllers/userAuth.js";
import { restrictToLoggedinUserOnly } from "../middlewares/auth.js";
import jobController from "../controllers/job.js";
import multer from "multer";


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
const jobRouter = Router();


// Use route() to handle both GET and POST requests for '/addJob'
jobRouter.route('/addJob')
  .get(jobController.renderAddJobPage)  // Handle GET request to render the add job page
  .post(upload.single('profileImage'), jobController.submitJob);  // Handle POST request to save the job

 


export default jobRouter