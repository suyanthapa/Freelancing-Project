const number = new Promise(function(resolve,reject){

  //ony one of resolve or reject will be called
  const start  =setTimeout(() => {
    resolve("resolve call vayo")
    clearTimeout(start);
  }, 2000);
 
  const end = setTimeout(() => {
    reject("error call vayo")
    clearTimeout(end);
  }, 2200);
})

// number.then(function(valueCB){
//   console.log("value is " +valueCB);
// })

// .catch(function(e){
//   console.log("Value is "+ e)
// })

async function fun1() {
  console.log("code start vayo")

  try{
    console.log(await number);
  }
  catch (e){
console.log("Error", e)
  }
  
}
fun1();