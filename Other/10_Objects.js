"use strict";

// While defining key in object, there is no compulsion to write key name within quotes
let bag = {
  apples: 6,
  banana: 12,
  peach: 5,
};
console.log(bag.apple, bag.banana, bag.peach);
console.log(bag["apple"], bag["banana"], bag["peach"]); //Inside square brackets, you need to write exact
// key name within quotes.

// In video challenge

let jonas = {
  fname: "Jonas",
  lname: "Miller",
  friends: ["Michael", "Peter", "Steven"],
  best_friend: "Michael",
};

console.log(
  `${jonas.fname} has ${jonas.friends.length} friends and his best friend is ${jonas.best_friend}`
);

for (let key in jonas) {
  console.log(jonas[key]);
}

// Class Exercise

let mark = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
  markBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

let john = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
  johnBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.markBMI();
john.johnBMI();

console.log(mark.BMI, john.BMI);
if (mark.BMI > john.BMI) {
  console.log(
    "Mark's BMI (" + mark.BMI + ") is higher than John's BMI(" + john.BMI + ")"
  );
} else if (mark.BMI < john.BMI) {
  console.log(
    "Mark's BMI (" + mark.BMI + ") is lower than John's BMI(" + john.BMI + ")"
  );
} else {
  console.log(
    "Mark's BMI (" + mark.BMI + ") is equal to John's BMI(" + john.BMI + ")"
  );
}
