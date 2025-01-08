//TASK ------ 1

// Implement a custom callback function:
//  Write a function named modulus that calculates the remainder of two numbers and pass it as a callback to the calculate function.

function modulus(num1,num2,result){
  return console.log(result = num1%num2);
}
modulus(21,2);

//****************************************************************************************************************************************** */
//TASK ------ 2

// Use callback functions for conditional logic:
//  Write a function named isGreater that takes two numbers as arguments and logs which number is greater. 
// Pass this function as a callback to the calculate function.

function isGreater(a,b)
{
  if(a<b){
    console.log(`Task 2----`,b);
  }
  else{
    console.log(`Task 2-----`,a);
  }
}
let num1 = 10;
let num2 = 20;

function calculate(num1,num2,result)
{
  return result(num1,num2);
}

 calculate(num1,num2,isGreater);


 //*************************************************************************************************************************************** */
//TASK ------ 3

// Create an array processing callback:
//  Write a function named processArray that takes an array of numbers and a callback function.
//  Use the callback function to calculate the sum of all even numbers in the array.

function callBack(array){
  let sum = 0;
  for(let item of array){
     if((item % 2)===0){
      console.log(`Task 3 ------The even numbers are`,item);
      sum =sum + item;
    }
  }
  console.log(`Task 3-----The sum of even numbers are : `,sum)
}


let array = [1,2,4,7,8,22]
function processArray(array,result ){
  return result(array);
}


processArray(array,callBack);


 //*************************************************************************************************************************************** */
//TASK ------ 4

// Transform numbers using callbacks: 
// Create a function square that returns the square of a number.
//  Pass it as a callback to a new transform function that applies the callback to each number in an array and returns the transformed array.


function square(num){
  let num1 =  num.map(function(item){
    return item*item;
  })
  console.log(`Task4 ---`,num1)
 }


function transform(num,CB){
  return CB(num);
}
let num = [2,3,4]
transform(num,square);

 //*************************************************************************************************************************************** */
//TASK ------ 5

// Build a string manipulation callback:
//  Write a function concatenateStrings that takes two strings, concatenates them, and returns the result. Pass this as a callback to a generic function that takes two strings and a callback.

function concatenateStrings(str1,str2){
 return (`Task5 ----The concatenated string is:`+(str1+str2));
}

function generic(str1,str2,callBack){
  return callBack(str1,str2);
}
let str1 = "suyan";
let str2 = "Thapa";

console.log(generic(str1,str2,concatenateStrings))

 //*************************************************************************************************************************************** */
//TASK ------ 6

// Chain callbacks with mathematical operations:
//  Create a function chainCalculate that takes two numbers and two callbacks. The first callback performs an operation (e.g., addition), and the second callback uses the result to perform another operation (e.g., multiplication by 2).


function addition(num1,num2){
  return num1+num2;
}


function multiply(num1,num2,cbb){
  return cbb(num1,num2)*2;
}
function chainCalculate(num1,num2,cb1,cb2){
  // let add =" ";
  // console.log(add);
  // console.log(add*2);
  console.log(`Task 6----The addition is:`,cb1(num1,num2));
  console.log(`Task 6----The mult is:`,cb2(num1,num2,cb1));
}


  chainCalculate(20,10,addition,multiply);

   //*************************************************************************************************************************************** */
//TASK ------ 7


//Handle asynchronous callbacks:
 //Write a function delayedMultiply that takes two numbers and a callback function. Use setTimeout to simulate a delay, and after 2 seconds,
  //pass the result of multiplying the two numbers to the callback.

  function delayedMultiply(number1,number2,mm){
    
    setTimeout(() =>{
      let result = number1*number2;
      mm(result);
    },1000);
  }
function cb(result){
console.log(result);
}
  delayedMultiply(10,10,cb);


  //*************************************************************************************************************************************** */
//TASK ------ 8

// Pass callbacks dynamically: 
// Write a function chooseOperation that takes a string ('add', 'subtract', 'multiply', 'divide') and dynamically assigns one of your predefined calculation functions (like add or subtract) to a callback. 
// Use this callback to calculate the result for two numbers.
// Use higher-order functions: Create a function higherOrderOperation that takes two numbers and a callback function as arguments. The callback should calculate the average of the two numbers and log whether the result is greater than 10.





  //*************************************************************************************************************************************** */
//TASK ------ 9

// Design a validation callback:
//  Write a function validateAndCalculate that takes two numbers and a callback. Validate the numbers to ensure they are both positive before performing the callback operation.
//  If validation fails, log an error message.```


 function validateAndCalculate (num1,num2,cb){
  
  if(cb(num1,num2)){
    console.log("pos")
  }
  else{
    console.log("ng")
  }
 }

 function check( num1,num2){
  if(num1 > 0 &&  num2 >0){
    return true;
  }
  else{
    return false;
  }
 }
 validateAndCalculate(-10,11,check);




