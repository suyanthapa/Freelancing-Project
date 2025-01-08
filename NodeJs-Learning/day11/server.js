import express from 'express'
import connection  from "./connect.js";
import { bookRouter } from './routes/operation.js';

connection().then(function (connectMsg){
  console.log(connectMsg)
  const server = express();
  server.use(express.json());
  server.use("/",bookRouter);

  const port = process.env.port || 9000

  server.listen(port,function(req,res){
      console.log("Server running successfully on ", port);
  })

  
})
.catch( function (e){
  console.error("Error connection to server")
})