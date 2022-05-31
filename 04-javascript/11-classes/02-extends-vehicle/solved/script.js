// Start by copying and pasting your Vehicle class from the last activity below
// Create 2 child classes that extend the Vehicle class. Examples: Car, Bike, Boat, Airplane
// Give each child class at least 2 properties and 1 method
// Use the super() to pass information back to the parent class
// create 2 objects from each child class

class Vehicle {
    constructor(type, hasMotor, color, weight){
        this.type = type;
        this.hasMotor = hasMotor;
        this.color = color;
        this.weight = weight;
    }

    checkForEngine(){
        return this.hasMotor ? 'Vroom Vroom' : "Flintstones Time!"
    }

    aboutVehicle(){
        return `This is a ${this.color} ${this.type}, and it weights ${this.weight}`
    }
}

class Car extends Vehicle {
constructor(type, hasMotor, color, weight, numOfDoors, numOfTires){
    // passes information back to the parent, to be set on the properties.
    super(type, hasMotor, color, weight);
    // properties specific to child class, "Car"
    this.numOfDoors = numOfDoors;
    this.numOfTires = numOfTires;
}

// methods
checkForCoupe(){
    return this.numOfDoors === 2 ? "This car is a coupe" : "This car is not a coupe";
}
}

// instance of a class is an object
const hondaCivic = new Car("coupe", true, "blue", 1200, 2, 4);

let jetSki = new Vehicle("water sport vehicle", true, 'white/blue', 2000);

console.log(jetSki);

console.log(hondaCivic);


