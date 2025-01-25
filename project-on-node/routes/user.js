import { Router } from "express";

import validate from "../middlewares/validate.js"
import authValidation from '../validation/user.js';
import authController from '../controllers/auth.js'
import userAuthController from "../controllers/userAuth.js";

import { restrictToLoggedinUserOnly } from "../middlewares/auth.js";


const heroRouter = Router();

//render the dashboard
heroRouter.get("/dashboard", async function (req,res) {
  return res.render('beforeLogin/dashboard', {message: ""});
}  )
//handle signup
heroRouter.route("/signup").get(authController.signup).post(authController.handleSignup)

// Handle login routes
heroRouter.route("/login").get(authController.login).post(authController.handleLogin)

heroRouter.get("/", function(req,res){
  res.redirect("/dashboard")
})

//render Account setting
heroRouter.get("/accountSetting",restrictToLoggedinUserOnly ,(authController.accountSetting))


// Forgot password
heroRouter
  .route("/changePassword")
  .get(restrictToLoggedinUserOnly, authController.changePassword)
  .post(restrictToLoggedinUserOnly, authController.forgotPassword);


//for logout
heroRouter.get("/logout",function( req,res){
  res.clearCookie("uid");
  res.redirect("login");
} )


export default heroRouter