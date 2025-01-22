import { catchAsync } from "../helpers/catchAsync.js";
import { createJWT, findGroupByName, findUserbyemail } from "../services/user.js";
import User from '../models/user.js';

//graphic feature
const graphic = catchAsync( async function (req,res) {
  res.render('userLogin/graphic', { message: "" }); 
})

// account setting
const accountSetting = catchAsync( async function (req,res) {
  res.render('userLogin/accountSetting', { message: "" }); 
})




const userAuthController = { graphic, accountSetting}
export default userAuthController