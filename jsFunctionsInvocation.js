// function myFunction(a, b) {
//     console.log(a + b) ;
// }
// myFunction(2, 4);
 
// this.myFunction(1, 2);


let x = myFunction(); // x will be the window object
console.log(x); 

function myFunction() {
  return this;
}

/**Invoking a function as a global function, causes the value of this to be the global object.
Using the window object as a variable can easily crash your program.

 */

/*
Invoking a Function as a Method
In JavaScript you can define functions as object methods.
The following example creates an object (myObject), with two properties (firstName and lastName), and a method (fullName):*/
const myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
myObject.fullName();         // Will return "John Doe"
// here the function belong to the owner which is myObject, so this represent myObject
/**The fullName method is a function. The function belongs to the object. myObject is the owner of the function.
The thing called this, is the object that "owns" the JavaScript code. In this case the value of this is myObject.
Test it! Change the fullName method to return the value of this: */
const myObj = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this;
  },
};

// This will return [object Object] (the owner object)
console.log(myObj.fullName()); // { firstName: 'John', lastName: 'Doe', fullName: [Function: fullName] }

/*------------Invoking a Function with a Function Constructor
If a function invocation is preceded with the new keyword, it is a constructor invocation.

It looks like you create a new function, but since JavaScript functions are objects you actually create a new object:------------------- */
// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}

// This creates a new object
const myOb = new myFunction("John", "Doe");

// This will return "John"
console.log(myOb.firstName);