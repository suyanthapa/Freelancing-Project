import { Router} from 'express';
import Crypto, {addCrypto}from '../modules/crypto.js';
import { Schema } from '../validation/validate.js';
// import { func,  } from 'joi';

const cryptoRouter = Router();

//get all crypto
cryptoRouter.get("/", async function (req,res) {

  const cryptoInDb = await Crypto.find({});
  return res.json(cryptoInDb);
})
// add crypto currrency
cryptoRouter.post("/", async function (req,res) {
  console.log("Request Body:", req.body);
  try{
    console.log("Request Body:", req.body);

    const validatedResult = Schema.validate(req.body , {abortEarly: false});
    if(validatedResult.error){
      throw new Error ("The error is : " + validatedResult.error.message)
    }
    else{
      const newCrypto = await addCrypto(validatedResult.value)
      res.status(200).json({crypto})
    }
  }
  catch (e){
    return res.status(400).json({error:e.message})
  }
    
})

export { cryptoRouter}