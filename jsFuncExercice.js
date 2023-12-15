const name = "Hicham Gar";

function logger() {
  console.log(name);
  console.log("The party is Starting");
  console.log("The party is Starting");
  console.log("The party is Starting");
  console.log("The party is Starting");
}

function adder(num1, num2) {
  console.log(num1 + num2);
}
adder(23, 22);

function toupperCase(text) {
  const upperCased = text.toUpperCase();
  console.log(upperCased);
}
toupperCase(name);

function myFavGame(game) {
  console.log(`Ma favorite game is ${game}`);
}

myFavGame("Rambo");
myFavGame("Marvel");
myFavGame("Mrs America");

// in javascript we have a build-in function called argument , that gives an array
// of all the arguments of a function.

function add(num1, num2) {
  console.log(num1 + num2);
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[2]);
}
add(2, 3, 4, 44); // the 2 more argument are ignored the output is 5

/**Default parameter */

function favGame(game) {
  if (game === undefined) {
    console.log("Please provide your favorite game, Ex. Super Mario");
  } else {
    console.log(`My favorite game is ${game}`);
  }
}
favGame("FootBall");

function trimCorrection(dist,  trim, lbp, draft) {
    let correctionDist = (trim * dist) / lbp; 
    let draftCorrected = draft - correctionDist; 
    return [draftCorrected];
}
console.log(trimCorrection(1, 0.5, 88.90, 3.5));
// Todo adjust this function to the draft survey calculation;
