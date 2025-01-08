//Server Connection

import mongoose from "mongoose";
import express from "express";
import connection from "./connection.js";
import { cryptoRouter } from "./routes/operation.js";

// import dotenv from 'dotenv';
// import { addCrypto } from "./routes/operation.js";



connection().then(function(connectMsg){

  // console.log(connectMsg);

  const server = express();
  server.use(express.json()); // parse the req json file
  server.use(cryptoRouter);
  const port = process.env.PORT || 9000;

  server.listen(port,function(){
    console.log("Server is running on port", port)
  })
})

.catch(function(e){
  console.log("Server connection failed !!!")
})