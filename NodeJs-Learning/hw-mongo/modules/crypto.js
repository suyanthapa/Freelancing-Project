import { Schema, model } from "mongoose";

const cryptoSchema = new Schema ({

 /
  name:{
    type: String,
    required: true,
  },

  exchangeRate: {
    type: Number,
    required: true,
  },

  foundIn: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
 
},{ timestamps: true})

//date is an object or string.
//currencies is an array of objects.
//Inside currencies, name and exchangeRate are properties (keys) of each object.

const Crypto =model("Crypto", cryptoSchema );

async function addCrypto({name,exchangeRate,foundIn}) {
  return Crypto.create({name,exchangeRate,foundIn})
  
}

export { addCrypto};
export default Crypto;