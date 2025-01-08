import { details } from "../models/loginDetails.js";
//check user email input is unique or not 
const  checkLogin =  async function (req,res,next) {

  try{
    const {email,password} =req.body;
    const validRow = await details.findOne(
   {email: email});

   if(!validRow){
    throw new Error ("Email or Password is incorrect")
   }
    else if ( validRow.password === password){
  return next();
    }
    else{
      throw new Error("Password is incorrect")
    }
  }
  catch (e){
    return res.json({ error: e.message });

  }
}
export default checkLogin;