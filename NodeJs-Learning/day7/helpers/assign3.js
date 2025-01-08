// Day 8 HW:
// ```
// 1. Change the Request methods from GET to :
//  - POST for those routes in which new data is added
//  - PUT for those in which data is edited 
//  - DELETE for those in which existing data is delted

// 2. Create new route "/cars" with a new file cars.json to store information about cars. A single car entry should have name, model, manufacturer and price. All these properties should be editable. General Route Endpoints:
  
//   GET /cars => Get all cars list
//   POST /cars => add new car. Take name, model, manufacturer and price for new car from request body.
//   GET /cars/:index => Get single car details
//   DELETE /cars/:index => Delete a car at this index if exists.
//   PUT /cars/:index => Edit single car details. Accept the new car details from request's body.

// Be sure to validate request data and deal with error conditions as per the routes.

// Use JavaScript's Object destructuring and spread operators where needed.

// Also make sure express.json() middleware is used for reading JSON request body. Example:
// // server.use(express.json())

// // Sample Cars.json file
// {
//     "cars": [
//         {
//             "make": "2023",
//             "model": "S",
//             "manufacturer": "tesla"
//         },
//         {
//             "make": "2020",
//             "model": "X",
//             "manufacturer": "tesla"
//         }
//     ]
// }
// ```

// import express from ' express';
// const server = new  express();

// server.use(express.JSON());


import { read, readFileSync, writeFileSync} from "fs";

function getFile(){

   const data =readFileSync("cars.json", {enocoding : "utf-8"});
   let parsedData = JSON.parse(data);
   return parsedData;
}

function getSpecificCarDetails(inputCar){

          let data = getFile();
          let car= data['cars'];

            try{
               let index = car.findIndex( car => car.carName  === inputCar);
          
        let selectedCar = car[index];
        return{
              name:   selectedCar.carName,
              make:   selectedCar.make,
              model:    selectedCar.model,
              manufacturer:  selectedCar.manufacturer,
              price :  selectedCar.price
             
        };
        }
        catch (e){
        return `Car not found`;
        }
          }


// function getAllCars(){

//             let data = getFile().cars;
//             let result = [];
       
//             for(let car of data){
//               let name = car.carName;
//               let make = car.make;
//               let model = car.model;
//               let manufacturer = car.manufacturer;

//               result.push( {
//                 carNAME: name,
//                 MAKE: make,
//                 MODEL: model,
//                 MANUFACTURER: manufacturer
//               })
//             }
//             return result;
//           }


function addCar(details){

const {cars} = getFile();

for(let i=0; i< cars.length; i++)
{
  if(cars[i].name === details.carName ){
     throw new Error (" Car    Already exists")
  }
}
 cars.push(details);
const write = {cars};
const jsonStrin = JSON.stringify(write);

writeFileSync("cars.json", jsonStrin, {encoding: 'utf-8'});
return write;

}


function deleteCar(indexNum){

  const{cars} = getFile();
   cars.splice(indexNum,1);


   const write = {cars};
   const jsonStrin = JSON.stringify(write);
   
   writeFileSync("cars.json", jsonStrin, {encoding: 'utf-8'});
   return write;

}

function editCar(indexNum, data1){

  let {cars} = getFile();
  try {
    if(indexNum <= cars.length ){
      cars[indexNum]= data1;
      const saved = {cars};
      let jsonStrin = JSON.stringify(saved);
      writeFileSync("cars.json", jsonStrin, {encoding: 'utf-8'});
      return saved;
    }
   
  }
  catch (e){
 
    return "hhh";
  }

  
}



export { getSpecificCarDetails,getFile, addCar, deleteCar, editCar}