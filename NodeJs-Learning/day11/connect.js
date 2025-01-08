import {config} from 'dotenv'
import mongoose from "mongoose"

config();

const connection = () => mongoose.connect(process.env.db_url).then (async () =>{

  return Promise.resolve("Database connection successfully")
})
.catch ( function (e){
  return Promise.reject("Error connecting to database")
})

export default connection