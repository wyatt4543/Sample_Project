const professor = {
    name: "Sam",
    location: "FHSU",
    email: "sam@gmail.com",
};

console.log(professor.name);
console.log(professor["name"]);

let keys = Object.keys(professor);
console.log(keys);

let values = Object.values(professor);
console.log(values);

let entries = Object.entries(professor);
console.log(entries);

keys.forEach((key) => {
    console.log(key);
});

for (x in professor) {
    console.log(`${x}: ${professor[x]}`);
}

const vehicle = new Object();

vehicle.wheels = 4;
vehicle.doors = 4;
vehicle.color = "Red";

console.log(vehicle.doors);

const eVehicle = {
    wheels: 4,
    doors: 2,
    engine() {
        return "Silent";
    },
    color: "Blue",
};

const car = Object.create(eVehicle);

console.log(car.wheels);
car.color = "Red";
console.log(car.color);
console.log(eVehicle.color);

for (key in car) {
    console.log(`${key} ${car[key]}`);
}

let { wheels, doors } = eVehicle;

console.log(wheels);
console.log(doors);