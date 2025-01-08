import express from 'express';

const server = new express();

server.get("/", function(req,res){

  res.send("Hello there");
})

server.listen(8000, function (){
  console.log("Server is running on port 8000 !!")
})