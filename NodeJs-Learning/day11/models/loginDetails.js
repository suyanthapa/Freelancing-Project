import mongoose, { model, Schema } from "mongoose";

const detailsSchema = new Schema ({

  name : {
    type: String,
    required: true,
  },
  email : {
    type: String,
    required: true,
  },
  password : {
    type: String,
    required: true,
  },
  phone : {
    type: Number,
    required: true,
  },
  password : {
    type: String,
    required: true
  },
})

const  details = mongoose.model ("details", detailsSchema)



export {details}