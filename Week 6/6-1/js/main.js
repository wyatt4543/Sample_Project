/*
jan - 0
april - 1
may - 2
june - 3
*/

const months = ["jan", "june", "april", "may", "june"];
console.log(months);

months.splice(1, 0, "feb", "mar");

console.log(months);

console.log(months.slice(2, 5));

console.log(months.reverse());

console.log(months);

console.log(months.indexOf("jan"));
console.log(months.indexOf("june"));
console.log(months.lastIndexOf("june"));

console.log(months.sort());

const numbers = [12, 45, 3, 11, 99, 467];
console.log(numbers.sort((a, b) => a - b));

const newArray = [...months, ...numbers];
console.log(newArray);

console.log(months.join("-"));

let str = "HelloWorld!";
let chr = [...str];
console.log(chr);

for (i = 0; i < months.length; i++) {
    console.log(months[i]);
}

months.forEach((index, element) => {
    console.log(`index of ${index} is ${element}`);
});

let a = numbers.forEach((item) => item * 3);
console.log(a);


let b = numbers.map((item) => item * 3);
console.log(b);

console.log(numbers);

let num = [1, 2, 3, 4, 5];
let evenNum = num.filter((num) => num % 2 == 0);
console.log(evenNum);