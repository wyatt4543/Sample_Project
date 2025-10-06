// "use strict";

variable = 10;

console.log(variable);

//Syntax Errors


/*
function sayHello() {
    console.log("Hello World";
}

sayHello();

const number = 5;
if ((number = 5)) {
    console.log("Number is five");
}
*/

//Reference Errors

/*
function myFun() {
    const j = 70;
    try {
        alert(`the value of j is ${j}`);
    } catch (error) {
        console.log(error);
    } finally {
        alert("finally is executed");
    }
}

myFun();
*/

// throw 23;
// throw "string";

//const myError = () => {
//    try {
//        const myName = "John Doe";
//        myName = "Jane Doe"
//    } catch (error) {
//        console.log(error);
//        console.error(error);
//        //console.message(error);
//        console.table(error);
//        //console.name(error);
//        console.warn(error);
//        //console.stack(error);
//    }
//}

//myError();

function customError(message) {
    this.message = message;
    this.name = "Custom Error";
    this.stack = `${this.name} ${this.message}`;
}

const myError = () => {
    try {
        throw new customError("This is a custom error")
    } catch ()
};

// console.log(nonExistingVar);
// const num = 10;
// num.toUpperCase();

// fetch("https://jsonplaceholder.typicode.come/user")
//    .then((response => response.json))
//    .then(((data) => console.log(data)));

//Logical Errors

// let count = 10;
// while (count > 0) {
//    console.log(count);
// }


function isEven(num) {
    if (num % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4));

/*
function calcDiscount(price) {
    let discount = 0.1;
    price = price - discount;
    return price;
}

console.log(calcDiscount(100));
*/