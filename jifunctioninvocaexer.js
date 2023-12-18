// function showUsers(userOne, userTwo) {
//     console.log(Array.from(arguments));
//     return `The user 1 is ${userOne} and the user 2 is ${userTwo}`
// }
// console.log(showUsers("Islam", "Dev"));

// it is better to use the Rest args:

function showUsers(...args) {
  console.log(Array.from(arguments));
  return `The user 1 is ${args[0]} and the user 2 is ${args[1]}`;
}
console.log(showUsers("Islam", "Dev"));

//there is 7 ways to invoke or call a function:the differences are in : the context , Attribute and the Timing . C A T
//1 / Basic calling:
function add(a, b) {
    return a + b; 
}
add(1, 2) // C= undefined, A = in the bracket (difficult to invoke them), T = executed immediately.

//2 Object method: 
[1, 2, 3].map(i => 2 ** i) // the array is an object of the method
// [2, 4, 6]
console.log('method call')
// C= undefined, A = in the bracket (difficult to invoke them), T = executed immediately.
//3 Callbacks: the methods call(), bind () are methods used to functions
// that means that we can play : function.call() and add some arguments , cause functions are objects and they can have methods.
//adventages : we can define a context: the 1st arg.,

//4/ using te new key word:
// When we call a function with the new key word , we create a new object,

// 5 / Array prototype Map and friends: map, filter, find, findIndex, some, every, foreach, flat map . we pass a callback to them and executed on each item of the array.
const arr = [1, 2, 3]; 

arr.map(fn, context)
arr.filter(fn, context)
arr.find(fn, context)
arr.findIndex(fn, context)
arr.some(fn, context)
arr.very(fn, context)
arr.foreach(fn, context)
arr.flatMap(fn, context)

// 6/ 2 functions setTime out and set interval
// Context=undefined on strict mode       A= 1st arg is the function, 2nd the timing in millisc, and all after that is an argu for the function ,  T= scheduled here.

const add = (a, b) => console.log(a + b); 

setTimeout(add, 1000, 2, 2)
// wait 1 s
// logs 4


// 7 / template:
