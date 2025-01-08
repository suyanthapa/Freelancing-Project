
//  Add a "tasks" Array for To-Do Management**

// **Route:** `/views/tasks/add/:task`

// - Add a `"tasks"` key to the JSON object (an array) to store to-do items.
// - Append the task from the route parameter to the array.
// - **Example:** After calling `/views/tasks/add/CompleteAssignment`, the JSON object should look like:
//   ```json
//   {
//     "count": 34,
//     "tasks": ["CompleteAssignment"]
//   }
//   ```

// ---

// **Route:** `/views/tasks/remove/:task`

// - Remove the specified task from the `"tasks"` array if it exists.

// --- 

// Let me know if you need further assistance!

import { read , readFileSync, writeFileSync} from "fs";

function getFile (){

  const data = readFileSync("views.json", {encoding: "utf-8"})

  const parsedData = JSON.parse(data);
  return parsedData;
}

function addTask(name){

  console.log("The name of task given by URL :",name);
  console.log("Adding into the array ")

  let data = getFile();
  

  // let added = value.push(name);
  data['tasks'].push(name) ;

  const jsonStrin = JSON.stringify(data);
  
  writeFileSync("views.json", jsonStrin, {encoding : "utf-8"});
  return data;

}

function removeTask(name){

  console.log("The name of task given by URL :",name);
  console.log("Adding into the array ")

  let data = getFile();
  

  // let added = value.push(name);
  // data['tasks'].push(name) ;
  
  let indexNum = data['tasks'].indexOf(name);

  if( indexNum === -1){
    return "There is no such element in the array"
  }
  else {
    data['tasks'].splice(indexNum,1);
  }
  const jsonStrin = JSON.stringify(data);
  
  writeFileSync("views.json", jsonStrin, {encoding : "utf-8"});
  return data;

}

export { addTask, removeTask}