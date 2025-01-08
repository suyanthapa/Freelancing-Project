import { read, readFileSync, writeFileSync } from "fs";
import { json } from "stream/consumers";

function getCurrentViews(){

  const content = readFileSync("views.json" , {
    encoding: "utf-8" })

    const parsedContent = JSON.parse(content);
    return parsedContent;

}

console.log(getCurrentViews());


function increasingViews(){
  //read the views
  let currentViews = getCurrentViews();

  let views = currentViews.views;

  //increment by 1

  views = views + 1;

  //update view variable

  currentViews['views'] = views;

  //save the updated views in the file
  const jsonStrin = JSON.stringify(currentViews);

  writeFileSync("views.json", jsonStrin, {encoding: "utf-8"});
  return currentViews;

}

export {getCurrentViews,increasingViews }