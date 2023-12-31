const personal = {
    firstName: "Hicham", 
    secondName: "Gar", 
    getFullName: function () {
        return `${this.firstName} ${this.secondName}`; 
    }
}
console.log(personal.getFullName()); // Hicham Gar

/**
The JavaScript call() Method
The call() method is a predefined JavaScript method.
It can be used to invoke (call) a method with an owner object as an argument (parameter).
With call(), an object can use a method belonging to another object.
This example calls the fullName method of person, using it on person1: */
const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};
const person2 = {
  firstName: "Mary",
  lastName: "Doe",
};

// This will return "John Doe":
let x = person.fullName.call(person1);
let y = person.fullName.call(person2);
console.log(x); 
console.log(y); 

//The call() Method with Arguments
// The call() method can accept arguments:

const per = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const per1 = {
  firstName: "John",
  lastName: "Doe",
};

let r = per.fullName.call(per1, "Oslo", "Norway");
console.log(r); 