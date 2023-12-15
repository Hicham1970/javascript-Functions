

function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}

// default parameter:
/**
 * If a function is called with missing arguments (less than declared), the missing values are set to undefined.
Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter:

 */
function myFunction(x, y) {
  if (y === undefined) {
    y = 2;
  }
  return x * y;
}
let s = myFunction(4);
console.log(s); 

// If y is not passed or undefined, then y = 10.
function myFunction(x, y = 10) {
  return x + y;
}
let r = myFunction(5);
console.log(r); 
/*
Function Rest Parameter
The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:*/
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);   
/**
The Arguments Object
JavaScript functions have a built-in object called the arguments object.
The argument object contains an array of the arguments used when the function was called (invoked).
This way you can simply use a function to find (for instance) the highest value in a list of numbers:     */
x = findMax(1, 123, 500, 115, 44, 88);
console.log(x); 

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

//Or create a function to sum all input values:
x = sumAll(1, 123, 500, 115, 44, 88);
console.log(x); 

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
//If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.

