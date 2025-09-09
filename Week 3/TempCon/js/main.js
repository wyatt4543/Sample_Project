/*let a = 5;
console.log(a);
let b = a;
console.log(b);
a = 10;
console.log(a)
console.log(b)*/

let theNumber = Number(prompt("Enter a number"))
if (!Number.isNaN(theNumber))
    console.log("your number is the square root of " + theNumber * theNumber)
else
    console.log("Hey, please enter a number");