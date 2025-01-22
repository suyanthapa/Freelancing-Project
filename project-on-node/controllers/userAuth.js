import { catchAsync } from "../helpers/catchAsync.js";
import { createJWT, findGroupByName, findUserbyemail } from "../services/user.js";
import User from '../models/user.js';

const graphic = catchAsync( async function (req,res) {
  res.render('userLogin/graphic', { message: "" }); 
})

const userAuthController = { graphic}
export default userAuthController