import { Router } from "express";

import validate from "../middlewares/validate.js"
import authValidation from '../validation/user.js';
import authController from '../controllers/auth.js'



const userRouter = Router();

//render the dashboard
userRouter.get("/dashboard", async function (req,res) {
  return res.render('beforeLogin/dashboard', {message: ""});
}  )
//handle signup
userRouter.route("/signup").get(authController.signup).post(authController.handleSignup)

// Handle login routes
userRouter.route("/login").get(authController.login).post(authController.handleLogin)


export default userRouter