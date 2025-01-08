import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const connectToDB = () => 
    mongoose.connect(process.env.MONGODB_URL).then ( async () =>{
        return Promise.resolve (" Database Connected Succesfully")
    })
    .catch( function(err){
        return Promise.reject(err)
    })

    export default connectToDB;