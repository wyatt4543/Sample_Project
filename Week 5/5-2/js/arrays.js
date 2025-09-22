//using array literal
let fruits = ["apple", "banana", "orange"]

console.log(fruits);
//Array constructor
let numbers = new Array(1, 2, 3, 45, 6);

let mixData = ["string", 32, null, ["test 1", "test 2"]];

console.log(mixData[3][0])

console.log(fruits[2]);

fruits[3] = "berry";
console.log(fruits);

console.log(fruits.length);

fruits.push("dates");
fruits.pop("dates");

console.log(fruits);

fruits.unshift("watermelon");
console.log(fruits);

console.log(fruits.indexOf("banana"));

//For loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//for of loop
for (let fruit of fruits) {
    console.log(fruit);
}

fruits.forEach(function (fruit) {
    console.log(fruit);
});