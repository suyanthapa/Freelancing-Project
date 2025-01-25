import { model, Schema } from "mongoose"


const jobSchema = new Schema({
  jobTitle: { type: String, required: true },
  hourlyRate: { type: Number, required: true },
  rating: { type: Number, required: true },
  jobsCompleted: { type: Number, required: true },
  skills: { type: [String], required: true },
  profileImage: { type: String, default: '/images/default-image.jpg' }, // Default image path
});


const Job = model( "Job", jobSchema);

export default Job;