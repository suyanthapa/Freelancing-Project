const http = require("http"); 

const server= http.createServer((req,res) =>{
 res.end(" srver responsed back by syan"); // shows on browser
})

server.listen(8000, ()=>{
  console.log("Server is running");
});

const server1 = http.createServer((req,res) =>{
  if(req.url==="/")
    res.end("This is home page");
  else if(req.url ==="/about")
    {
    res.end("Else function callled")
  }
})

server1.listen(9000, () =>{
  console.log("Server is running on 9000");
})
