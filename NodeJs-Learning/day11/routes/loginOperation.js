import { Router } from "express";
import { details } from "../models/loginDetails.js";
import { detailsValidation } from "../validations/loginDetails.js";
import { mongoose } from "mongoose";
import checkDuplication from "../middlewares/checkEmail.js";
import validate from "../middlewares/validate.js";
import checkLogin from "../middlewares/checkLogin.js";


const registerRouter = Router();

// registerRouter.post("/", async function(req,res){
  
// try{
//   const{ name,email,phone,password, address} = req.body;
//   console.log(req.body);
//   const add = await details.create(req.body);
//   return res.json({LoginDetails: add})
  
// }

// catch (e){
//   return res.json({error: e.message})
// }
// })

registerRouter.get("/", async function (req,res) {
  
  try{
    const data = await details.find({});
    return res.json({USERDETAILS:data})
  }
  catch (e){
      return res.status(400).json({error: e.message})
  }
})

registerRouter.post("/auth/register",validate(detailsValidation),checkDuplication, async function (req,res) {
 
  try{
    const{name,email,phone,address,password} = req.body;
   
    const add = await details.create(req.body);
  return res.json({LoginDetails: add})
  }
  catch{
    return res.status(400).json({error: e.message})
  }
})

registerRouter.post("/auth/login", checkLogin,async function (req,res) {
    try{
      return res.json({ message: "Successfully logged in------Welcome to the dashboard" });

    }
    catch (e){
      return res.status(400).json({error: e.message})
    }
})










export {registerRouter}