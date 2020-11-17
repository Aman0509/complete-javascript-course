"use strict";

if (true) {
  let a1 = "NOT";
  const a2 = "NOPE";
  var a3 = "YES";
}

// console.log(a1);
// console.log(a2);
console.log(a3);

function first() {
  console.log("Hello First");
  function second() {
    console.log("Hello Second");
    second();
  }
}

first();

// console.log(d);
// let d = 2;

//ex();   If uncomment, will throw error

let ex = function () {
  console.log("Hello World!");
};
