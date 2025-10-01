//Before ES6
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

let john = new Person("John Doe");
console.log(john.getName());

//After ES6
class Rectangle {
    constructor(height, width) {
        (this.height = height), (this.width = width);
    }

    calArea() {
        return this.height * this.width;
    }
}

let square = new Rectangle(10, 10);
console.log(square.calArea());

// Pizza example
class Pizza {
    constructor(size, type) {
        (this.size = size), (this.type = type), (this.crust = "Original"), (this.toppings = []);
    }

    get pizzaCrust() {
        return this.crust;
    }

    set pizzaCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }


    getToppings() {
        return this.toppings;
    }

    setToppings(toppings) {
        this.toppings.push(toppings);
    }

    bake() {
        console.log(`Baking a ${this.size} size pizza with a ${this.crust} ${this.type} crust`);
    };
}

const myPizza = new Pizza("small", "cheese");
myPizza.bake();
myPizza.pizzaCrust = "Traditional";
myPizza.bake();

myPizza.setToppings("pepperoni");
myPizza.setToppings("olives");

console.log(myPizza.getToppings());

// Inheritance
class SpecialtyPizza extends Pizza {
    constructor(size, type) {
        super(size, type);
        this.crust = "The Special";
    }

    slice() {
        console.log(`${this.type} ${this.size} ${this.crust}`)
    }
}


class Pizza2 {
    crust = "original";
    #sause = "traditional";
    #size;

    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }

    getToppings() {
        return this.toppings;
    }

    setToppings() {
        this.toppings.push(toppings);
    }

    order() {
        console.log(`Your order is ${this.#size} ${this.crust} crust with ${this.#sause}`);
    }
}