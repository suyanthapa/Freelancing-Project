
import { model, Schema } from "mongoose";

const professionalInfoSchema = new Schema ({
  userId: { type: String, required: true },
  skills: { type: String, required: true},
  education: { type: String, required: true },
  certifications: { type: String, required: true },
  portfolio: { type: String, required: true, unique: true },
  website: { type: String, required: true },
  linkedIn: { type: String, required: true },
 
}, { timestamps: true })




const ProfessionalInfo = model( "ProfessionalInfo", professionalInfoSchema);

export default ProfessionalInfo;