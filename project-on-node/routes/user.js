import { Router } from "express";

import validate from "../middlewares/validate.js"
import authValidation from '../validation/user.js';
import authController from '../controllers/auth.js'



const heroRouter = Router();

//render the dashboard
heroRouter.get("/dashboard", async function (req,res) {
  return res.render('beforeLogin/dashboard', {message: ""});
}  )
//handle signup
heroRouter.route("/signup").get(authController.signup).post(authController.handleSignup)

// Handle login routes
heroRouter.route("/login").get(authController.login).post(authController.handleLogin)




export default heroRouter