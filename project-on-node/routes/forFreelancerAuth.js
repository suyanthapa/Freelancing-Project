import { Router } from "express";

import validate from "../middlewares/validate.js"
import authValidation from '../validation/user.js';
import authController from '../controllers/auth.js'
import userAuthController from "../controllers/userAuth.js";
import { restrictToLoggedinUserOnly } from "../middlewares/auth.js";


const freelancerRouter = Router();


//render user dashboard
freelancerRouter.get("/freelancerDashboard", restrictToLoggedinUserOnly, async function (req,res) {

  return res.render('freelancerLogin/fDashboard', {message: ""});
}  )

//render Account setting
// freelancerRouter.get("/accountSetting",restrictToLoggedinUserOnly ,(authController.accountSetting))

freelancerRouter
  .get("/accountSetting", restrictToLoggedinUserOnly, (authController.accountSetting))
  .post("/accountSetting", restrictToLoggedinUserOnly, (authController.editProfessionalInfo))

  // In freelancerRouter.js

// GET and POST routes for setting professional info
freelancerRouter.route("/setProfessionalInfo")
  .get(restrictToLoggedinUserOnly, authController.getSetProfessionalInfo)  // Render the form
  .post(restrictToLoggedinUserOnly, authController.postSetProfessionalInfo); // Handle form submission


//render graphics feature
freelancerRouter.get("/f-graphic",restrictToLoggedinUserOnly, (userAuthController.fgraphic))




export default freelancerRouter