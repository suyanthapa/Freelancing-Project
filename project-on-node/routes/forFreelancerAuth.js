import { Router } from "express";

import validate from "../middlewares/validate.js"
import authValidation from '../validation/user.js';
import authController from '../controllers/auth.js'
import userAuthController from "../controllers/userAuth.js";
import { restrictToLoggedinUserOnly } from "../middlewares/auth.js";
import freelancerController from "../controllers/freelancer.js";



const freelancerRouter = Router();


//render user dashboard
freelancerRouter.get("/freelancerDashboard", restrictToLoggedinUserOnly, async function (req,res) {

  return res.render('freelancerLogin/fDashboard', {message: ""});
}  )

//render Account setting
// freelancerRouter.get("/accountSetting",restrictToLoggedinUserOnly ,(authController.accountSetting))

freelancerRouter
  .get("/accountSetting", restrictToLoggedinUserOnly, (freelancerController.accountSetting))
  .post("/accountSetting", restrictToLoggedinUserOnly, (freelancerController.editProfessionalInfo))

  // In freelancerRouter.js

// GET and POST routes for setting professional info
// freelancerRouter.route("/setProfessionalInfo")
//   .get(restrictToLoggedinUserOnly, freelancerController.getSetProfessionalInfo)  // Render the form
//   .post(restrictToLoggedinUserOnly, freelancerController.postSetProfessionalInfo); // Handle form submission


freelancerRouter
  .get("/setProfessionalInfo", restrictToLoggedinUserOnly, (freelancerController.getSetProfessionalInfo))
  .post("/setProfessionalInfo", restrictToLoggedinUserOnly, (freelancerController.postSetProfessionalInfo))


//render graphics feature
freelancerRouter.get("/f-graphic",restrictToLoggedinUserOnly, (userAuthController.fgraphic))




export default freelancerRouter