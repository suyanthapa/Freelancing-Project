function print (){

  let token = parseInt(Math.random(10)*1000000);


  if(token.toString().length === 6){
    
    return token

  }
  else{
    
  return print()

  }

}

for (let i=0; i<20; i++){
 console.log(print () )}