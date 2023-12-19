// lexical scope defines how variables names are resolved in nested functions.
// 1** / Nested (child) functions have access to the scope of their parent functions.
// we can say that the childFunction have a closure over the scope of the parentFunc, and have the closure over the global scope ,
// This often confused with closure is only an important part of closure.
// according to W3school : "A closure is function having access to to the parent scope, even after the parent function has closed ".
//! A closure is created when we define a function, not when a function is executed.
//




// global scope/
// let x = 1; 
// const parentFunction = () =>{
//     //local scope:
//     let myValue = 2; 
//     console.log(x); 
//     console.log(myValue);
    
//     // 1**
//     const childFunction = () => {
//         console.log(x += 5); 
//         console.log(myValue += 2); 
//     }
    // to access the parent scope after the parentFunc has been closed we have to return the child function
    //inside the parent function
    // return childFunction; 
    // childFunction();
// }
// const result = parentFunction(); 
// to call the childFunction 
// console.log(result); // [Function: childFunction] cause it an anonymous func.
// and now we can access the parent scope even the function has been closed :
// result(); 
// result();
// console.log(x); 
// console.log(myVariable);// RefError 


// IIFE : (Immediately invoked function expression)

// const privateCounter = (() => {
//     let count = 0; 
//     console.log(`initial value : ${count}`);// returned one time
//     return () => { count += 1; console.log(count)} // run each time we call the privateCounter function
// })(); 

// //? This function is immediately invoked , the line 44 run once
// // privateCounter is equal to this function, like what we did with result = parentFunction
// privateCounter();// 1
// privateCounter();// 2
// privateCounter();// 3
// privateCounter();// 4

// we have access to the local variable count via the lexical scope of the  child function line 45 (anonymous)
// who have scope over the privateCounter scope

// Example 2:
const credits = ((num) => {
    let credits = num; 
    console.log(`Initial Credits Value :${credits}`); 
    return () => {
        credits -= 1; 
        if (credits > 0) console.log(`Playing game, ${credits} credit (s) remaining`); 
        if(credits <= 0) console.log(`You do not have enough credits`)
    }
    
})(3);
// Initial Credits Value :3 (Immediately invoked)
credits(); // Playing game, credits 2 credit (s) remaining
credits(); // Playing game, credits 1 credit (s) remaining
credits(); // You do not have enough credits

// Credits is a local variable and we can access it by the anonymous function that have closure to the scope of the parent function