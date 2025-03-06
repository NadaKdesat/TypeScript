"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
// Identify if a Number is Even or Odd
// You are given a variable num Check whether the number is even or odd, without using a function.
var num = parseInt(readlineSync.question("Enter Number: "));
if (num % 2 == 0) {
    console.log("".concat(num, " is even \n"));
}
else {
    console.log("".concat(num, " is odd \n"));
}
// Filter Expensive Products from an Array :
// You are given an array of product prices. print out  all prices that are higher than a given threshold price, without using a function.
var arr = [10, 25, 60, 100, 150, 200, 5, 80];
var threshold = parseInt(readlineSync.question("Enter threshold price: "));
var expensivePrices = [];
arr.forEach(function (element) {
    if (element > threshold) {
        expensivePrices.push(element);
    }
});
console.log("Prices higher than ".concat(threshold, ": "), expensivePrices, "\n");
// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements , without using a function.
var numbers = [10, 25, 60, 100, 150, 200, 5, 80];
var sum = 0;
arr.forEach(function (element) {
    sum += element;
});
console.log("the sum of all elements is: ".concat(sum));
