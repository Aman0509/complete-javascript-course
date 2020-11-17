"use strict";

let tempArr = [];

// Array Creation

let arr1 = [12, 34, "a", "c"];
console.log(arr1);

let arr2 = new Array(56, "x", "y", 234);
console.log(arr2);

// Finding length of an Array

console.log("Length of arr2 - ", arr2.length);

// Looping over an array and Simultaneously creating an array on fly. See how an empty array is getting filled

for (let i = 0; i < arr1.length; i++) {
  console.log(i);
  tempArr[i] = 12;
}

console.log(tempArr);
// Add an item to the end of an Array

arr2.push("Hello");
console.log("arr2.push('Hello')", arr2);

// Remove an iten from the end of the array

arr2.pop();
console.log("arr2.pop()", arr2);

// Remove an item from the beginning of an array

arr1.shift();
console.log("arr1.shift()", arr1);

// Add an item to the beginning of an array

arr1.unshift("Batman");
console.log("arr1.unshift('Batman')", arr1);

// Find the index of an item in the array
console.log("arr1.indexOf('a') - ", arr1.indexOf("a"));

// Splice method
// Remove elements at index 2
console.log("arr2 - ", arr2);
arr2.splice(2, 1);
console.log("arr2.splice(2,0) - ", arr2);

// Remove 1 element at index 1 and add 'ola', 34
arr2.splice(1, 1, "ola", 34);
console.log(arr2);

// includes method to find out whether a element is present in an array or not
// It returns the boolean value

console.log("arr2.includes('ola') - ", arr2.includes("ola"));
