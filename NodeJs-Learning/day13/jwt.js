import jwt  from "jsonwebtoken";
const token = jwt.sign({name:" hello world"}, 'secretKey');
console.log(token)


let isVerified = false;
let payload = null;

try{
payload = jwt.verify ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJIZWxsbyB3b3JsZCBmcm9tIE5lcGFsICwgS3Jpc2huYSIsImlhdCI6MTczNjQxMjcwNX0.1fcTJSFoCDRuzsGEYGvc5xhoWEFkcDn_cbXw3P5gNuw", 'secretKey');

console.log("Founnd",payload);
isVerified= true;
}
catch (e){

}

console.log({isVerified, payload})