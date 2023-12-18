// create a function that display a result:
function display(result) {
  console.log(result);
}

// create a sum function with 3 args.
function add(x, y, myCallBack) {
  let sum = x + y; // add the 2 values and store the result in a variable sum
  myCallBack(sum); // to display the result we will add the display function as 3rd arg.
}

// the display function needs one argument , which is the sum
add(2, 3, display); // call the function add by calling back the display function;

//? So a Callback function is a function used as argument.
