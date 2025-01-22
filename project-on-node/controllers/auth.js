import { catchAsync } from "../helpers/catchAsync.js";
import { createJWT, findGroupByName, findUserbyemail } from "../services/user.js";
import User from '../models/user.js';
import bcrypt from 'bcrypt'
import generateUserId from "../services/createRandom.js";

const signup = catchAsync( async function (req,res) {
  res.render('beforeLogin/signup', { message: "" }); 
})
const handleSignup = catchAsync( async  function (req,res) {

  const { firstName, lastName, newUsername, newPassword, confirmPassword, userType } = req.body;
 
  let table = userType === 'freelancer' ? 'freelancer' : 'users';
  let profile = userType === 'freelancer' ? 'freelancer' : 'user';

    // Validate inputs
    if (!firstName || !lastName || !newUsername || !newPassword || !confirmPassword) {
      return res.render('beforeLogin/signup', { message: 'All fields are required.' });
  } else if (newPassword !== confirmPassword) {
    return res.render('beforeLogin/signup', { message: 'Password donot match' });
  }

  // Check if username exists
  const existingUser = await User.findOne({ username: newUsername })

      if (existingUser) {
        return res.render('beforeLogin/signup', { message: 'Username already exists.' });
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
          password: hashedPassword,
          profile: profile,
      });

      newUser.save();
    
     // Redirect to login page
       return res.redirect('login');       
    })

const login = catchAsync ( async function  (req, res) {
  res.render('beforeLogin/login',  { message: '' }); // Render the login page with no errors
  
})

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
  
    // Store the user ID in the session
    req.session.user_id = user.user_id;
  
    // Redirect to the appropriate dashboard
    if (user.profile === 'freelancer') {
      return res.redirect('/signup'); // Freelancer dashboard
    } else {
      return res.redirect('userDashboard'); // User dashboard
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
  })

  const newPassword = catchAsync( async function (req,res) {

    const { email, otp , NewPassword} = req.body;

    const existingUser = await findUserbyemail(email);
    if(!existingUser){
      throw new Error ("User not found with this email" );
    }

    if (!existingUser.otp || !existingUser.otpExpiresAt) {
      throw new Error("OTP not found. Please request a new OTP.");
   }

   if (new Date() > existingUser.otpExpiresAt) {
    throw new Error("OTP has expired. Please request a new OTP.");
    }

    const otpValid = await bcrypt.compare(otp,existingUser.otp);
    if(!otpValid){
      throw new Error("OTP isnot valid")
    }
  
    //Hashing new password
    const newHashedPassword= await bcrypt.hash(NewPassword,10);
    await User.findOneAndUpdate(
      { email },
      {
          otp: null, 
          otpExpiresAt: null,
          password: newHashedPassword
      }
  );
    return res.json("Updated New Password !!!")
  })


const authController = { signup,handleSignup,handleLogin ,login }
export default authController