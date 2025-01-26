
import { model, Schema } from "mongoose";

const userSchema = new Schema ({
  user_id: { type: String, required: true },
  email: { type: String, required: true},
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: { type: String, required: true },
  profileImage: {
    type: String, // Store the image path (could be a URL or file path)
    default: '/profile/default-profile.jpg'
  },
  otp:{
    type:String,
  },
  otpExpiresAt:{
    type: Date
  }
}, { timestamps: true })




const User = model( "user", userSchema);

export default User;