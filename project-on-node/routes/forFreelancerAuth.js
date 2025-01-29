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
freelancerRouter.get("/accountSetting",restrictToLoggedinUserOnly ,(authController.accountSetting))

//render graphics feature
freelancerRouter.get("/f-graphic",restrictToLoggedinUserOnly, (userAuthController.fgraphic))




export default freelancerRouter