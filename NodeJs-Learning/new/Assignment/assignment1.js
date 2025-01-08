//learned file handling and event driven
//using eventt driven check whethere the file exists or not ( if exists print the data)

const eventEmitter = require("events");
const fs= require("fs");
const http = require("http");

const myEmitter= new eventEmitter();

myEmitter.on("checkFile", (path,res) =>{

//checks the  file exist or not
  if(!fs.existsSync(path)){ 
    console.log(" file doesnot exist");
    return;
  }

 //read the data from file
 fs.readFile(path ,"utf-8", (err,data) =>{  
      if(err) {
        console.error("An error occured while reading the file" , err);
        return;
      }
     
      res.writeHead(200, { "Content-Type": "text/plain" });
      console.log(`The content inside the assignmentFile.txt is : \n ${data}` ); // shows on terminal
      res.end(data);
    });
   })

// myEmitter.emit("checkFile" , "./files/assignFile.txt",res);

const server = http.createServer((req,res) =>{
  if(req.url === "/"){
  myEmitter.emit("checkFile" , "./files/assignFile.txt", res);
  }

  else{

  res.end("The route not found");
}
})

server.listen("9000", ()=>{
  console.log("Server is running on 9000");
})


// //SUMMARY FOR THIS CODE

// How It Works - Step by Step:

//    1)Server Starts:
//      The server is started using server.listen(9000) and listens for requests on port 9000.

//    2)Client Makes a Request:
//       A client (e.g., browser) makes an HTTP request to http://localhost:9000.

//    3) Check File Existence:
//       The server receives the request, and the URL is checked. Since it matches /file, the checkFile event is emitted.
//       The event handler checks if the file exists using fs.existsSync(path).

//    4)File Not Found (404):
//       If the file doesn't exist, a 404 Not Found response is sent back to the client using res.writeHead(404) and res.end("File          doesnot exist").

//    5)File Found:
//      If the file exists, fs.readFile() is used to read the file's contents asynchronously.
//      When the file is read, the server sends a 200 OK response with the file content using res.writeHead(200, { "Content-Type": "text/ plain" }) and res.end(data).

//    6)Error Handling:
//       If there is an error while reading the file (e.g., file is corrupted), a 500 Internal Server Error response is sent back using res.    writeHead(500) and res.end("An error occurred while reading the file").

//    7)Final Response:
//       The file content or error message is displayed in the browser as the final response.





