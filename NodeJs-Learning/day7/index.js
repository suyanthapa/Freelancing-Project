import express from 'express';
import {config} from 'dotenv';
import { getCurrentViews} from './helpers/views.js';
import { increasingViews} from './helpers/views.js';
import { getCountValue, reset } from './helpers/assign1.js';
import { increaseBy10, decreaseBy10 } from './helpers/assign1.js';
import { addTask ,removeTask} from './helpers/assign2.js';
import { getSpecificCarDetails , getFile,addCar, deleteCar, editCar} from './helpers/assign3.js';
import { error } from 'console';


config();
  
// console.log(process.env.PORT);

const server =  express();
server.use(express.json());


server.get("/" , function(req,res){
  res.send("Views.app")
})

server.get("/views", function(req,res){
  res.send(getCurrentViews())
})

server.get("/views/increase", function(req,res){
  res.send(increasingViews())
})

server.get("/views/increaseBy10", function(req,res){
  res.send(increaseBy10())
})

server.get("/views/decreaseBy10", function(req,res){
  res.send(decreaseBy10())
})
server.get("/views/reset", function(req,res){
  res.send(reset())
})

server.get("/views/tasks/add/:task", function(req,res){

  const taskName = req.params.task;

  res.send(addTask(taskName));

})


server.get("/views/tasks/remove/:task", function(req,res){

  const taskName = req.params.task;
  // res.send("REMOVED ", taskName);/
  res.send(removeTask(taskName));

})

//assign3.js
server.get("/cars/find/:car" , function(req,res){

  const carName = req.params.car;
  
  let output = getSpecificCarDetails(carName);
  res.send(output);
})

//assign3.js
server.get("/cars" , function(req,res){
  // res.send(getAllCars());
  res.send(getFile());
})

server.post("/cars", function(req,res){
  const data = req.body;
  console.log(data);
  // res.send(getAllCars());
  // res.json({ message: 'Data received susccessfully', receivedData: data });
 
  try{
    res.json(addCar(data));
  }
  catch (e){
    res.status(400).json({
      error:e.message
    });
  }
})

server.delete("/cars/:index", function(req,res)
{
  const index = req.params.index;
  res.send(deleteCar(index));
})

server.put("/cars/:index", function(req,res)
{
  const index = req.params.index;
  const data = req.body;
 
    res.send(editCar(index, data));
  
})





const port = process.env.PORT || 8000;

server.listen(port, function(){
  console.log(" Serveer is running on" , port)
})