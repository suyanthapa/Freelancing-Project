import { Router } from "express";

import validate from "../middlewares/validate.js"
import authValidation from '../validation/user.js';
import authController from '../controllers/auth.js'
import userAuthController from "../controllers/userAuth.js";
import { restrictToLoggedinUserOnly } from "../middlewares/auth.js";
import jobController from "../controllers/job.js";
import multer from "multer";
import freelancerController from "../controllers/freelancer.js";



const userRouter = Router();

//render user dashboard
userRouter.get("/userDashboard", restrictToLoggedinUserOnly, async function (req,res) {
  return res.render('userLogin/uDashboard', {message: ""});
}  )
//render Account setting
userRouter.get("/accountSetting",restrictToLoggedinUserOnly ,(freelancerController.accountSetting))

//render graphics feature
userRouter
  .get("/graphic", restrictToLoggedinUserOnly, userAuthController.getGraphicDesignJobs)
  .post("/graphic", restrictToLoggedinUserOnly, userAuthController.getGraphicDesignJobs);

//render viewDetails for job
userRouter.get("/job/:id", restrictToLoggedinUserOnly, userAuthController.viewDetails);

//render programming and tech feature
userRouter
  .get("/programmingTech", restrictToLoggedinUserOnly, userAuthController.getprogrammingTechJobs)
  .post("/programmingTech", restrictToLoggedinUserOnly, userAuthController.getprogrammingTechJobs);
  
//render Digital Marketing feature
userRouter
  .get("/digitalMarketing", restrictToLoggedinUserOnly, userAuthController.getDigitalMarketingJobs)
  .post("/digitalMarketing", restrictToLoggedinUserOnly, userAuthController.getDigitalMarketingJobs);
  
  //render Video & Animation feature
userRouter
.get("/videoAnimation", restrictToLoggedinUserOnly, userAuthController.getvideoAnimationJobs)
.post("/videoAnimation", restrictToLoggedinUserOnly, userAuthController.getvideoAnimationJobs);


  //render Video & Animation feature
  userRouter
  .get("/hire/:jobId", restrictToLoggedinUserOnly, userAuthController.hireFreelancer)
  .post("/hire/:jobId", restrictToLoggedinUserOnly, userAuthController.hireFreelancer)


  //hire message
  userRouter
  .get("/hired-freelancer", restrictToLoggedinUserOnly, userAuthController.hireMessage)
  .post("/hired-freelancer", restrictToLoggedinUserOnly, userAuthController.hireMessage);



// route for payment after hiring a freelancer
// userRouter
//   .get("/payment/:jobId", restrictToLoggedinUserOnly, userAuthController.initiatePayment)
//   .post("/payment/:jobId", restrictToLoggedinUserOnly, userAuthController.processPayment);


export default userRouter