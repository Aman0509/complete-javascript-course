/* this alone*/

console.log(this);

/* this in a function without strict mode*/
function test() {
  console.log(this);
}
test();

/* this in a function with strict mode*/
function test1() {
  "use strict";
  console.log(this);
}
test1();

/* this in an object method binding*/
person = {
  fname: "ABC",
  lname: "XYZ",
  age: 27,
  job: "IT",
  email: function () {
    return `Email - ${this.fname}.${this.lname}@test.com`;
  },
};
console.log(person.email());

/*this in arrow function. Since arrow function have their own 'this' keyword, it will 
use the parent scope's 'this' keyword*/
const thisExample = function () {
  "use strict";
  const test = () => {
    console.log(this);
  };
  test();
};

thisExample();

// It will give more idea about arrow function and this keyword

const obj1 = {
  fname: "ABC",
  lname: "XYZ",
  email: function () {
    return this.fname + "." + this.lname + "@test.com";
  },
  greet: () => console.log("Hello " + this.fname + " " + this.lname),
};

obj1.greet();

/* Regular Function vs Arrow Function */

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();
