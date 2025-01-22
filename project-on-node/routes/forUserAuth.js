import { Router } from "express";

import validate from "../middlewares/validate.js"
import authValidation from '../validation/user.js';
import authController from '../controllers/auth.js'
import userAuthController from "../controllers/userAuth.js";


const userRouter = Router();

//render user dashboard
userRouter.get("/userDashboard", async function (req,res) {
  return res.render('userLogin/uDashboard', {message: ""});
}  )

//render graphics feature
userRouter.get("/graphic", (userAuthController.graphic))



export default userRouter