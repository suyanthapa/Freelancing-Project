import { catchAsync } from "../helpers/catchAsync.js";
import { createJWT, findUserbyemail } from "../services/user.js";
import User from '../models/user.js';
import bcrypt from 'bcrypt'


const register = catchAsync( async  function (req,res) {

const {  email, password} = req.body

  const exisitingUser = await findUserbyemail(email);
  if(exisitingUser){
    throw new Error (`User already exists with this email`)
  }
  //to ask ========== how to check username duplication
 const hashedPassword = await bcrypt.hash(req.body.password, 10);
 const newUser = await User.create({...req.body, password: hashedPassword})

 return res.send({ New_User: { ...newUser, password: undefined } })

})

const login = catchAsync(async function (req, res) {

  const { email, password } = req.body;
  const existingUser = await findUserbyemail(email);

  if (!existingUser) {
      throw new Error("User not found.");
  }

  const hasedPassword = existingUser.password;

  const matched = await bcrypt.compare(password, hasedPassword)

  if (matched) {
      const token = createJWT(existingUser._id);
      return res.send({ user: { ...existingUser, password: undefined, token } })
  } else throw new Error("Email or password invalid.")

})

const authController = { register,login }
export default authController