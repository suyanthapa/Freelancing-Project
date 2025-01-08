//Database connection

import mongoose from "mongoose";
import {config} from 'dotenv';
config();

const connection = () => mongoose.connect(process.env.database_url).then (async function () {

  return Promise.resolve("Database connected successfully")
  
})
.catch( function(e){
  return Promise.reject("Database Connection Failed !!!!!", e.message)
})

export default connection;