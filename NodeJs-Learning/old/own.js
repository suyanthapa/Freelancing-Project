const fs = require("fs");

const text = fs.writeFileSync("file.txt" , "new file created");
// console.log(text);

const result= fs.readFileSync("file.txt", "utf-8")
console.log(result);

fs.appendFileSync("file.txt" , " new text added");


// fs.writeFile("./files/tgb.txt", " new file created" , (error) =>{
//   if (error) throw error;
//   console.log(" file written");

// })


//read file using async
fs.readFile("./files/tgb.txt" , "utf-8",(err, data) =>{
  if (err) throw error;
  console.log(data);
})

fs.appendFile("./files/tgb.txt" , 'new data appended' , (err)=>{
  if(err) throw error;
})

fs.unlink("./files/tgb.txt" , (err) =>{
  if (err) throw error;
  console.log(" file deleted");
})