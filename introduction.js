
// Function Declaration: 
function salutation() {
    console.log('Hello!')
}                             
salutation(); 
salutation(); 

//Function Expression: stored in a variable
// here a constant called greeting have as value the return of the function 
const greeting = function() {
    console.log("Hello World!");
}
greeting(); 

// Example 2:
const x = function (a, b) {
  return a * b;
};
let z = x(2, 4)
console.log(z); // Output : 8
/*
The function above is actually an anonymous function (a function without a name).
Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
The function above ends with a semicolon because it is a part of an executable statement.
*/
/**----------------------------------------------- */
/**
The Function() Constructor
As you have seen in the previous examples, JavaScript functions are defined with the function keyword.
Functions can also be defined with a built-in JavaScript function constructor called Function(). */
const myFunction = new Function("a", "b", "return a * b");
let s = myFunction(4, 3);
console.log(s); // Output : 12
//You actually don't have to use the function constructor. The example above is the same as writing:
const myFunc = function (a, b) {
  return a * b;
};
let q = myFunc(4, 3);
console.log(q); //Output:12</s>


// Self invoked function
/** 
Self-Invoking Functions
Function expressions can be made "self-invoking".
A self-invoking expression is invoked (started) automatically, without being called.
Function expressions will execute automatically if the expression is followed by ().
You cannot self-invoke a function declaration.
You have to add parentheses around the function to indicate that it is a function expression: */

(function () {
  let x = "Hello!! I Will Invoke myself"; // I will invoke myself
})();

// Arrow functions:
// ES5
var g = function(x, y) {
  return x * y;
}

// ES6
const h = (x, y) => x * y; 