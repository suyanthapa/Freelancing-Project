import mongoose  from "mongoose";
import connectToDB from "./connect.js";
import { carRouter } from "./routes/operation.js";
import express from "express";

connectToDB().then( function( connectMessage){
    console.log(connectMessage);

    const server =  express();
    server.use(express.json());

    server.use(carRouter);


    const port = process.env.PORT || 9000;

    server.listen(port, function(){
        console.log("Server is running on ", port)
    })

    }).catch (function(err){
    console.error(err);
})