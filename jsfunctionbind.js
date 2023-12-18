//With  the function bind() an object can borrow a method from another object/
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Helga",
  lastName: "Nils",
};

let fullName = person.fullName.bind(member);
console.log(fullName()); // Helga Nils</s>