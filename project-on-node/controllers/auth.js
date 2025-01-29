import { catchAsync } from "../helpers/catchAsync.js";
import { createJWT, findGroupByName, findUserbyemail } from "../services/user.js";
import User from '../models/user.js';
import bcrypt from 'bcrypt'
import generateUserId from "../services/createRandom.js";
import jwt from 'jsonwebtoken'
import { sendRecoveryEmail } from "../services/forgot-password.js";
import multer from "multer";


// export const uploadMiddleware = upload.single('profileImage');  

const signup = catchAsync( async function (req,res) {
  res.render('beforeLogin/signup', { message: "" }); 
})
const handleSignup = catchAsync( async  function (req,res) {

  const { firstName, lastName, email, newUsername, newPassword, confirmPassword, userType } = req.body;
  const profileImage = req.file; // Handle uploaded profile image


  let table = userType === 'freelancer' ? 'freelancer' : 'users';
  let profile = userType === 'freelancer' ? 'freelancer' : 'user';

    // Validate inputs
    if (!firstName || !email ||!lastName || !newUsername || !newPassword || !confirmPassword) {
      return res.render('beforeLogin/signup', { message: 'All fields are required.' });
  } else if (newPassword !== confirmPassword) {
    return res.render('beforeLogin/signup', { message: 'Password donot match' });
  }

  // Check if username exists
  const existingUser = await User.findOne({ email : email})

      if (existingUser) {
        return res.render('beforeLogin/signup', { message: 'Email  already exists.' });
      }

      // Hash the password
      const hashedPassword = bcrypt.hashSync(newPassword, 10);

     
      // Create new user object
      const userId = generateUserId();
      const newUser = new User({
          user_id: userId,
          first_name: firstName,
          last_name: lastName,
          username: newUsername,
          email : email,
          password: hashedPassword,
          profile: profile,
          profileImage: profileImage ? '/profile/' + profileImage.filename : '/images/default-image.jpg', // Save image path

      });

      newUser.save();
    
     // Redirect to login page
       return res.redirect('login');       
    })

//render login
const login = catchAsync ( async function  (req, res) {
  res.render('beforeLogin/login',  { message: '' }); // Render the login page with no errors
  
})

// handle login
const handleLogin = catchAsync(async function (req, res) {

  const { password, username } = req.body;

  try {
    let message = ''; // Use message for error messages
      
    // Validate input
    if (!username || !password) {
      message = 'Please enter a valid username and password'; // Set message here
      return res.render('beforeLogin/login', { message }); // Pass message to the view
    }
  
    // Check if the user exists in the freelancer collection
    let user = await User.findOne({ username, profile: 'freelancer' });
    
    // If not a freelancer, check the `users` collection
    if (!user) {
      user = await User.findOne({ username, profile: 'user' });
    }
  
    if (!user) {
      // User not found in either collection
      message = 'Invalid Username or Password'; // Set message here
      return res.render('beforeLogin/login', { message }); // Pass message to the view
    }
  
    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      message = 'Invalid Username or Password'; // Set message here
      return res.render('beforeLogin/login', { message }); // Pass message to the view
    }
  
    const token= jwt.sign({_id: user._id,
     profile: user.profile 
    },process.env.Secret_key)
  
    res.cookie("uid", token,{httpOnly: true, secure: true});
    // user._id.toString()
    
    // Redirect to the appropriate dashboard
    if (user.profile === 'freelancer') {
      res.redirect('/freelancerDashboard');
      // return res.redirect('/freelancerDashboard');
      
    } else {
      return res.redirect('/userDashboard'); // User dashboard
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
  })

// account setting
const accountSetting = catchAsync( async function (req,res) {
  const loggedInUser = req.user;  // Logged-in user (admin)
        const userId = loggedInUser._id;  // Get logged-in user's ID
        const user = await  User.findById(userId);
      
        if(user.profile === "freelancer"){
          res.render('freelancerLogin/accountSetting', {user, message: "" }); 
        }
        else{
          res.render('userLogin/accountSetting', {user, message: "" }); 
        }
})


//render change password
const changePassword = catchAsync( async function (req,res) {
  const loggedInUser = req.user;  // Logged-in user (admin)
        const userId = loggedInUser._id;  // Get logged-in user's ID
        const user = await  User.findById(userId);
        if(user.profile === "freelancer"){
          res.render('freelancerLogin/changePassword', {user, message: "" }); 
        }
        else{
          res.render('userLogin/changePassword', {user, message: "" }); 
        }
 
})

//forgot password
  const forgotPassword = catchAsync(async function (req,res) {
  
   const {email, firstName, newPassword , confirmNewPassword} = req.body;
   console.log(newPassword)
   console.log(email)
    const existingUser = await findUserbyemail(email)
  
   
    if (!existingUser) {
      throw new Error("User not found.");
    }
    if(newPassword != confirmNewPassword){
    
      return res.render('userLogin/changePassword', { user: existingUser, message: 'Passwords do not match.' });

    }
    
    const hashedPassword = bcrypt.hashSync(newPassword, 10);
       // Update 
     const data =  await User.findOneAndUpdate(
        { email },
        {
          first_name:firstName ,
            password: hashedPassword, 
            
        }
    );
    console.log(data)
    return res.redirect('changePassword'); // Redirect user to login page after password reset.

      // Respond to the client once the email is sent successfully
      return res.status(200).json({
          message: "Recovery email sent successfully.",
          emailInfo,
      });  
    })

 
  


const authController = { signup,handleSignup,handleLogin ,login, accountSetting, changePassword,forgotPassword }
export default authController