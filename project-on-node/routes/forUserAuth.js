import { Router } from "express";

import validate from "../middlewares/validate.js"
import authValidation from '../validation/user.js';
import authController from '../controllers/auth.js'
import userAuthController from "../controllers/userAuth.js";
import { restrictToLoggedinUserOnly } from "../middlewares/auth.js";
import jobController from "../controllers/job.js";
import multer from "multer";



const userRouter = Router();

//render user dashboard
userRouter.get("/userDashboard", restrictToLoggedinUserOnly, async function (req,res) {
  return res.render('userLogin/uDashboard', {message: ""});
}  )

//render graphics feature
userRouter
  .get("/graphic", restrictToLoggedinUserOnly, userAuthController.getGraphicDesignJobs)
  .post("/graphic", restrictToLoggedinUserOnly, userAuthController.getGraphicDesignJobs);


//change password



export default userRouter