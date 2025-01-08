import { details } from "../models/loginDetails.js";
//check user email input is unique or not 
const  checkDuplication =  async function (req,res,next) {

  try{
    const {email} =req.body;
    const exists = await details.findOne(
     {email: email}
    );

    if(exists){
      throw new Error ("Email already exists -- Please provide an unique email address")
    }
    else{
     return next();
    }
  }
  catch (e){
    return res.json({ error: e.message });

  }
}
export default checkDuplication;