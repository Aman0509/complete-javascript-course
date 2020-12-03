"use strict";

let planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Neptune",
  "Pluto",
];

let [a, b, ...rest] = ["Mercury", "Venus", ...planets, "Pluto"];
console.log(a); // Mercury
console.log(b); // Venus
console.log(rest); // "Earth", "Mars", "Jupiter", "Saturn", "Neptune", "Pluto", "Pluto"

function test(a, b, c) {
  console.log(arguments);
  console.log(a, b, c);
}

test(1, 2, 3, 4, 5);
