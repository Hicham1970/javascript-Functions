const vessel = {
  callSign: "Ark",
  imo: 9866236,
  flag: "Spain",
  type: function (lpb, loa, beam) {
    console.log(`This vessel with the callSign of ${this.callSign}  is from  ${this.flag} ,
        and a length bpp of ${lpb} m  an loa of ${loa} m and a beam of ${beam} m`);
  },
};

let ship1 = {
  callSign: "Venus",
  imo: 9252762,
  flag: "Morocco",
};

let ship2 = {
  callSign: "Urus",
  imo: 9632262,
  flag: "English",
};

// call():

// let callShip1type = vessel.type.call(ship1, 99.84, 101.25, 15.8);
// console.log(callShip1type); // undefined
//? We don't need to  console.log(applyShip1type); cause we call directly the function or the method type 
//? when we create the variable applyShip1type

// apply():
// let applyShip1type = vessel.type.apply(ship2, [109.84, 121.85, 19.87]);
//? We don't need to  console.log(applyShip1type); cause we call directly the function or the method type
//? when we create the variable applyShip1type /
//! the difference between call() and apply() is the Second argument: call() we give args One by One,
//! and with apply(), the Second argument is given as an array or list [].

// bind():
let boundTypeMethod = vessel.type.bind(ship1, 99.84, 101.25, 21);
//? bind() method create an image of the function or the method type and keep it in memory 
//? until we call it as a function 

boundTypeMethod();
/* This vessel with the callSign of Venus   is from Morocco ,
and a length bpp of 99.84 m  an loa of 101.25 m and a beam of
21 m */