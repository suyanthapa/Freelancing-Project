function add(num1, num2){
  console.log(`The sum of ${num1} and ${num2} is : ${num1+num2}`);

}
function subtract(num1, num2){
  console.log(`The difference of ${num1} and ${num2} is : ${num1-num2}`);
}
function multiply(num1, num2){
  console.log(`The multiply of ${num1} and ${num2} is : ${num1*num2}`);
}
function divide(num1, num2){
  if (num2== 0)
    throw new Error("divide by 0 exception");
  console.log(`The division of ${num1} and ${num2} is : ${num1/num2}`);
}

const firstNumber =4;
const secondNumber =5;

// console.log(`The sum of ${firstNumber} and ${secondNumber} is : ${add(firstNumber,secondNumber)}.
// `)


function calculate( num1, num2, calculation){
  return calculation(num1, num2);


}
//passing callback function with predefined function names~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~```

calculate(firstNumber, secondNumber, add);

//anonymous fnction

calculate(firstNumber,secondNumber,function(a,b){
  console.log(`added 10 ${firstNumber} and ${secondNumber} is : ${a+b+10 }`)
})

//arrow function
