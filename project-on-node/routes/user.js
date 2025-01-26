import { Router } from "express";
import { restrictToLoggedinUserOnly } from "../middlewares/auth.js";
import authController  from '../controllers/auth.js'
import multer from "multer";

const heroRouter = Router();



//render the dashboard
heroRouter.get("/dashboard", async function (req,res) {
  return res.render('beforeLogin/dashboard', {message: ""});
}  )

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'profile/'); // Specify where to save the uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Ensure unique filenames for each upload
  }
});
const upload = multer({ storage: storage });

// Signup route
heroRouter.route("/signup")
  .get(authController.signup) // Handle GET request for signup page
  .post(upload.single('profileImage'), authController.handleSignup); // Handle POST request with multer middleware


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