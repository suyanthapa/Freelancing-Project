const path = require('path');

const filePath = "./../file/newFile.txt";
 
const filename= path.basename(filePath); // gives filename
console.log(filename);

console.log(path.dirname(filePath)); // gives directory

console.log(path.extname(filePath)); // gives extension like txt , pdf , jpg

const joinedPath= path.join(__dirname, "suyan");
console.log(joinedPath);

const os = require('os');

console.log(os.platform()); // gives window

console.log(` Window Version : ${os.platform}`); 
console.log(`Cpu details: ${JSON.stringify(os.cpus(), null,2)}`); // details of cpu


console.log(os.totalmem()); // shows total memory
console.log(os.freemem());

console.log(os.uptime()); 