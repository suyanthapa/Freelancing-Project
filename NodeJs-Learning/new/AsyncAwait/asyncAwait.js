// Create a promise inside which a random number between 1 and 100 is generated.
// And, if that number has '0' at the end, reject with error, else resolve the promise with the random number after 1 second.
// Show this number in console with the promise's .then and .catch construct 
// and also with async/await construct.


const assign = () =>new Promise (function (resolve,reject){
  let num = parseInt(Math.random()*100);

  
  console.log(num);

  setTimeout(()=>{
  
    if((num %10) ===0){
      return reject("The number has 0 at end")
    }
    else {
      return resolve("The number has no 0 at end");
    }
  }, 2000)
})
  async function replay() {
    for (let i=0; i<10; i++){
      console.log("Iteration: "+ (i+1))

      try {
        const number = await assign();
        console.log(number)
      
      } 
      catch (e){
      console.error(e);
   
      }
    }
 
  
}
replay();
 



// const loop = setTimeout(() =>{
//   for(i=0;i<10;i++){
//     console.log(replay);
//   }
// },20000)


// assign.then(function(value){
//   console.log("The result is :" + value);
// })
// .catch(function(e){
//   console.log("The result is :" +value);
// })

