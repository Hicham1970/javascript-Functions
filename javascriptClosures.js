//A function can access variables defined inside the function:
function myFunction() {
  let a = 4;
  return a * a;
}
// console.log(myFunction());

// And also the function can access a variable outside the function like/
let x = 4;
myFunction();
function myFunction() {
    return x * x ;
}
console.log(myFunction());

//Variables created without a declaration keyword (var, let, or const) are always global,
// even if they are created inside a function.:

myFunc(); 
let q = s * s; 
console.log(q); 

function myFunc() {
    s = 3; 
}

// Counter Dilemma:

// Initiate counter
let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

// Call add() 3 times
add();
add();
add();

// Log counter after calling add() 3 times
console.log("Counter value now is " + counter);
// The counter should now be 3
//There is a problem with the solution above: Any code on the page can change the counter, without calling add().
// The counter should be local to the add() function, to prevent other code from changing it:
// Initiate counter
let compt  = 0;

// Function to increment counter
function ad() {
  let compt = 0;
  compt += 1;
}

// Call add() 3 times
ad();
ad();
ad();
console.log(compt); 
// the output now is 0 cause the add function display the global variable instead of the local.
//  It did not work because we display the global counter instead of the local counter.
//We can remove the global counter and access the local counter by letting the function return it:
// Function to increment counter
function add() {
  let count = 0;
  count += 1;
  return count;
}

// Call add() 3 times
add();
add();
add();

console.log(add())
//The counter should now be 3. But it is 1.
//It did not work because we reset the local counter every time we call the function.
//  A JavaScript inner function can solve this.


