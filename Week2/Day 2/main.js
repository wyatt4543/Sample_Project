let score = 0;
score = 10;
console.log(score);

const pi = 3.14;
console.log(pi);

let firstName = "Jack";
let myAge = 32;
console.log(firstName, myAge);

// Numbers

let wholeNumber = 10;
let decimalNumber = 10.5;
let bigNumber = 2e3;

console.log(wholeNumber);
console.log(decimalNumber);
console.log(bigNumber);

// Arithmatic Operators
let a = 4;
let b = 5;

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);

console.log(100 + 4 * 11);
console.log((100 + 4) * 11);

console.log("1 / 0 = ", 1 / 0);
console.log("-1 / 0 = ", -1 / 0);
console.log("0 / 0 = ", 0 / 0);
console.log(parseInt("Hi"));

// Strings
let greeting1 = "Hello";
let greeting2 = "World";
let greeting3 = 'Hi There';

console.log(greeting1 + greeting2 + greeting3);

let score2 = 50;
console.log(`Half of 100 is ${100 / 2}`);
console.log(`your score is ${score2}`);

// Escape Sequences
console.log("Line1\nLine2");
console.log("Line1\tLine2");

// String Methods
let text = "JavaScript";
console.log(text.length);
console.log(text.charAt(0));
console.log(text.concat(" is fun"));
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log("a,b,c".split(","));
console.log(text.slice(0, 4));

// Boolean
console.log("3 > 2:", 3 > 2);
console.log("3 < 2:", 3 < 2);

// Equal
console.log(5 == "5");
console.log(5 === "5");

// Logical Operators
console.log("true && false", true && false);
console.log("true && true", true && true);
console.log("false && false", false && false);
console.log("true || false", true || false);
console.log("true || true", true || true);
console.log("false || true", false || true);
console.log("false || false", false || false);

let age = 20;
let hasId = true;

if (age >= 18 && hasId) {
    console.log("You can enter the club");
} else {
    console.log("Entry Denied");
}

// ternary
let myAge2 = 18;
let result = myAge2 >= 18 ? "Adult" : "Minor";
console.log("You are:", result);

console.log("Pi: ", Math.PI);
console.log("Round of 3.6:", Math.round(3.6));
console.log("Floor of 3.9:", Math.floor(3.9));
console.log("Ceil of 3.1:", Math.ceil(3.1));
console.log("2 power of 4:", Math.pow(2, 4));
console.log("Min of 3,7,1:", Math.min(3, 7, 1));
console.log("Max of 3,7,1:", Math.max(3, 7, 1));
console.log("Random number", Math.random());

let dice = Math.floor(Math.random() * 6) + 1
console.log("Roll dice:", dice);