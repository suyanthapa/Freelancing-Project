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



//render graphics feature
freelancerRouter.get("/graphic",restrictToLoggedinUserOnly, (userAuthController.graphic))

//change password



export default freelancerRouter