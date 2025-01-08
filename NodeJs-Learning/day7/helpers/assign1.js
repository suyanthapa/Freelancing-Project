// 1. /views/reset
//   Reset the count to 0.

// 2. /views/increaseBy10
//   Increase the count by 10

// 3. /views/decreaseBy10
//   Decrease the count by 10. Be careful that the view count should not be less than 0 even after decreasing. For example, if count is 8 and this endpoint is called, the count should be 0



import { read, readFileSync, writeFileSync } from "fs";
import { json } from "stream/consumers";

function getCountValue (){

  const data = readFileSync("views.json", {encoding: "utf-8"})

  const parsedData = JSON.parse(data);
  return parsedData;
}

// console.log(getCountValue())


function reset(){
  //read the views
    let data2 = getCountValue();
  
    let count = data2.count;
  
    count = 0 ;
  
    //update view variable
    data2['count'] = count;
  
    //save the updated views in the file
    const jsonStrin = JSON.stringify(data2);
  
    writeFileSync("views.json", jsonStrin, {encoding : "utf-8"});
    return data2;
  }

function increaseBy10(){
//read the views
  let data1 = getCountValue();

  let count = data1.count;

  count = count + 10;

  //update view variable
  data1['count'] = count;

  //save the updated views in the file
  const jsonStrin = JSON.stringify(data1);

  writeFileSync("views.json", jsonStrin, {encoding : "utf-8"});
  return data1;
}

function decreaseBy10()
{
  let value = getCountValue();

  let currentValue = value.count;

  //decrease the count by 10;

  
  if (currentValue <= 10){
    return `The current value is ${currentValue}The value can't be subtracted more`;
    
  }
  else{
    currentValue = currentValue-10;
    value['count'] = currentValue;
  
  }
  const jsonStrin = JSON.stringify(value);

  writeFileSync("views.json", jsonStrin, {enconding: 'utf-8'});

  return value;
}



export {getCountValue, reset, increaseBy10, decreaseBy10}
