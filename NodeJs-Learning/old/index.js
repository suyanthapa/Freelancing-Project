
const fs= require("fs");

// read, write , append and delete
 const content = " content passed from variable"
fs.writeFileSync("example.txt", content);
console.log("File Written");


const text = fs.readFileSync("example.txt", "utf-8");


fs.appendFileSync("example.txt", "\nappend added");
// console.log(text2);
console.log( "Succesfully appended")

fs.unlinkSync("example.txt")

