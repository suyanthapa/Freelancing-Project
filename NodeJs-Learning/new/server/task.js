// question check Assignment folder ----- assignmetn5.js


import express from 'express';

const server = new express();

server.get("/", function(req,res){
  const firstnum =  parseInt(req.query.first_num);
  const lastnum = parseInt(req.query.last_num);
  const operation = req.query.operation;

  let result;
  if(operation === 'addition'){
     result = firstnum + lastnum;
  }
  else if (operation === 'subtraction'){
     result = firstnum + lastnum;
  } 
  else if (operation === 'multiply'){
     result = firstnum * lastnum;
  } 
  else if (operation === 'division'){
     result = firstnum / lastnum;
  } 
  else{
    result= " ERROR OCCURED"
  }
   res.send(`${result}`)
})

server.listen(9000,function(){
  console.log("Server is running on port 9000")
})