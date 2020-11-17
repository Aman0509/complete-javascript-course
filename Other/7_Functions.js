"use strict";

// Function Declaration

function myFirstFunc() {
  console.log("Hello World!!");
}

function mySecondFunc(msg) {
  console.log("Hello There!! " + msg);
}

myFirstFunc();
mySecondFunc("I am feeling good and positive :)");

// Function Expression

let varA = function () {
  console.log("Hello World Again!! :)");
};

varA();

// Arrow Function

let getResult = (num1, num2) => {
  return num1 + num2;
};
console.log(getResult(45, 95));

/* Example

let ask = (question, yes, no) => { confirm(question) ? yes() : no() };
ask("Do You Agree?", () => alert("Agree"), () => alert("Disagree"));
ask("Do You Agree?", () => alert("Agree"), () => alert("Disagree"));
*/

// Argument Object - This doesn't work with Arrow Function

const someFunc = function (x1, x2, x3) {
  console.log(arguments.length);
  return x1 + x2 + x3;
};

console.log("Argument length - ", someFunc(12, 34, 33, 67, 1, 23, 93));

// Rest Parameters - Works with Function Declaration, Function Expression and Arrow Function

const testFunc = (...args) => {
  console.log(args.length);
};

testFunc(12, 23, 34, 5, 67, 32, 12, 12, 23, 10);
