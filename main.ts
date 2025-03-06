import * as readlineSync from "readline-sync";

// Identify if a Number is Even or Odd
// You are given a variable num Check whether the number is even or odd, without using a function.
let num:number=parseInt(readlineSync.question("Enter Number: "));
if(num%2==0){
    console.log(`${num} is even \n`)
}else{
    console.log(`${num} is odd \n`)
}



// Filter Expensive Products from an Array :
// You are given an array of product prices. print out  all prices that are higher than a given threshold price, without using a function.
let arr:number[]=[10, 25, 60, 100, 150, 200, 5, 80];
let threshold: number = parseInt(readlineSync.question("Enter threshold price: "));
let expensivePrices:number[]=[];
arr.forEach(element => {
    if(element>threshold){
        expensivePrices.push(element);
    }  
});
console.log(`Prices higher than ${threshold}: `,expensivePrices,`\n`);



// Sum All Elements in an Array
// You are given an array of numbers. Iterate through the array and print the sum of all elements , without using a function.
let numbers:number[]=[10, 25, 60, 100, 150, 200, 5, 80];
let sum:number=0;
arr.forEach(element => {
    sum+=element;
});
console.log(`the sum of all elements is: ${sum}`);