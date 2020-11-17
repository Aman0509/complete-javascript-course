"use strict";

let printForecast = function (arr) {
  let s = "";
  for (let i = 0; i < arr.length; i++) {
    s += `${arr[i]}° in ${i + 1} days...`;
  }
  console.log("..." + s);
};

printForecast([17, 21, 23]);
