import mongoose from 'mongoose';

const hiredSchema = new mongoose.Schema({
  freelancer: { 
    type: String, 
     required: true
    },

  paymentAmount : {
    type: String, 
    required: true
  },

  job: {
     type: String, 
     ref: 'Job', 
     required: true 
  },

  hiredBy: { 
    type: String, 
    ref: 'User', 
    required: true 
  },

  hiredAt: { type: Date, default: Date.now },
  paymentStatus: { type: String, default: 'Pending' },
  message: { type: String, default: '' },
}, { timestamps: true }); // Timestamps will allow us to get the latest hire


const Hired = mongoose.model('Hired', hiredSchema);

export default Hired;
