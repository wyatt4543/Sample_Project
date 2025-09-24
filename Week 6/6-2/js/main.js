const person = {
    firstName: "John",
    lastName: "Doe",
    height: "6'2",
    hobbies: ['eat', 'sleep', 'code'],
    beverages: {
        morning: "coffee",
        evening: "Tea",
    },

    greeting() {
        console.log(`Hi this is ${this.firstName} welcome to the course. I take ${this.beverages.evening} in the evening`);
    },
};

console.log(person.firstName);
console.log(person["firstName"]);
person.greeting();

const human = person;
console.log(human.firstName);

console.log(person.hobbies[0]);

console.log(this);