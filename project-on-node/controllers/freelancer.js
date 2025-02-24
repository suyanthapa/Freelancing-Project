import { catchAsync } from "../helpers/catchAsync.js";
import { createJWT, findGroupByName, findUserbyemail } from "../services/user.js";
import User from '../models/user.js';
import bcrypt from 'bcrypt'
import generateUserId from "../services/createRandom.js";
import jwt from 'jsonwebtoken'
import { sendRecoveryEmail } from "../services/forgot-password.js";
import multer from "multer";
import ProfessionalInfo from "../models/professionalInfo.js";


// account setting
const accountSetting = catchAsync(async function (req, res) {

  const loggedInUser = req.user; // Logged-in user (admin)
  const userId = loggedInUser._id; // Get logged-in user's ID
  const user = await User.findById(userId);

 
  // Find the user's professional info in the database
  const professionalInfo = await ProfessionalInfo.findOne({ userId: userId });

  // Check if the user is a freelancer
  if (user.profile === "freelancer") {
    // If professional info exists, pass it to the view, otherwise, set showSetupMessage to true
    res.render('freelancerLogin/accountSetting', { 
      user, 
      professionalInfo: professionalInfo || null, 
      showSetupMessage: !professionalInfo // true if professional info is not found
    });
  } else {
    res.render('userLogin/profile/accountSetting', { 
      user, 
      message: "" 
    });
  }
});

// ----new content
const editProfessionalInfo =  catchAsync (async  function (req, res) {
  try {
    const loggedInUser = req.user;  
    if (!loggedInUser) {
      return res.status(401).json({ success: false, message: "User not authenticated" });
    }

    const userId = loggedInUser._id;
    const { skills,language, education, certifications, portfolio, website, linkedIn } = req.body;

    // Update or insert professional info in one step
    const updatedProfessionalInfo = await ProfessionalInfo.findOneAndUpdate(
      { userId }, // Search by userId
      { $set: { skills,language, education, certifications, portfolio, website, linkedIn } }, // Update fields
      { new: true, upsert: true } // Return updated document, create if doesn't exist
    );

    console.log('Updated professional info:', updatedProfessionalInfo); // Debugging  

    return res.json({ success: true, message: "Professional info updated successfully!", data: updatedProfessionalInfo });
  } catch (error) {
    console.error("Error saving professional info:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
});




// GET handler to render the professional info setup page
// const getSetProfessionalInfo = async (req, res) => {
//   const loggedInUser = req.user;  // Get logged-in user
//   const userId = loggedInUser._id; // Get logged-in user's ID
//   const user = await User.findById(userId);

//  console.log("Hello suyan")
//   // Find the user's professional info in the database
//   const professionalInfo = await ProfessionalInfo.findOne({ userId: userId });

//   userLogin/profile/changePassword
//     res.render('freelancerLogin/setProfessionalInfo', { 
//       user, 
//       message: "" 
//     });
  
// };

const getSetProfessionalInfo = async (req, res) => {
  console.log('hel')
  try {
    const loggedInUser = req.user;  // Get logged-in user
    if (!loggedInUser) {
      console.log("No user logged in!");
      return res.redirect("/login");  // Redirect to login if not logged in
    }

    const userId = loggedInUser._id; // Get logged-in user's ID
    const user = await User.findById(userId);
    
    if (!user) {
      console.log("User not found in database");
      return res.status(404).send("User not found");
    }

    console.log("Rendering setProfessionalInfo page for user:", user.first_name);

    return res.render('freelancerLogin/setProfessionalInfo', { user, message: "" });
  } catch (error) {
    console.error("Error in getSetProfessionalInfo:", error);
    return res.status(500).send("Something went wrong!");
  }
};

// POST handler to save professional info to the database
const postSetProfessionalInfo = async (req, res) => {

  const loggedInUser = req.user;  // Get logged-in user
  const userId = loggedInUser._id;  // Get logged-in user's ID
  const { skills,language, education, certifications, portfolio, website, linkedIn } = req.body;
  console.log("Received data:", req.body);  // Log the received data

   const user = await User.findById(userId);
  try {
    // Check if professional info already exists for this user
    let professionalInfo = await ProfessionalInfo.findOne({ userId });

    if (!professionalInfo) {
      // If no professional info exists, create a new record
      professionalInfo = new ProfessionalInfo({
        userId : userId.toString(),
        skills : skills,
        language : language,
        education : education,
        certifications : certifications,
        portfolio : portfolio,
        website : website,
        linkedIn : linkedIn
      });
    } else {
      // If professional info exists, update it
      professionalInfo.skills = skills;
      professionalInfo.language = language;
      professionalInfo.education = education;
      professionalInfo.certifications = certifications;
      professionalInfo.portfolio = portfolio;
      professionalInfo.website = website;
      professionalInfo.linkedIn = linkedIn;
    }

    // Save the professional info
    await professionalInfo.save();

    // Redirect to account setting page after saving
    // res.redirect('/accountSetting');
    res.render('freelancerLogin/accountSetting', {user, professionalInfo, message: "" }); 
  } catch (error) {
    console.error("Error saving professional info:", error);
    res.status(500).send("Something went wrong!");
  }
};


//render change password
const changePassword = catchAsync( async function (req,res) {
  const loggedInUser = req.user;  // Logged-in user (admin)
        const userId = loggedInUser._id;  // Get logged-in user's ID
        const user = await  User.findById(userId);
        if(user.profile === "freelancer"){
          res.render('freelancerLogin/changePassword', {user, message: "" }); 
        }
        else{
          res.render('userLogin/profile/changePassword', {user, message: "" }); 
        }
 
});

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
   
     return res.render('userLogin/profile/changePassword', { user: existingUser, message: 'Passwords do not match.' });

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



const freelancerController = {  getSetProfessionalInfo,postSetProfessionalInfo,editProfessionalInfo ,accountSetting, editProfessionalInfo,changePassword , forgotPassword}
export default freelancerController