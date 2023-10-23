// 1. Class Declaration and Object Instantiation:

class Car {
    make: string;
    model: string;
    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    drive() {
        console.log(`Driving the ${this.make} ${this.model}`);
    }
}

const myCar = new Car("Toyota", "Camry");
myCar.drive();


// 2. Inheritance:

class ElectricCar extends Car {
    batteryCapacity: number;
    constructor(make: string, model: string, batteryCapacity: number) {
        super(make, model);
        this.batteryCapacity = batteryCapacity;
    }

    charge() {
        console.log(`Charging the ${this.make} ${this.model} with a ${this.batteryCapacity} kWh battery.`);
    }
}

const myElectricCar = new ElectricCar("Tesla", "Model 3", 75);
myElectricCar.drive();
myElectricCar.charge();



// 3. Encapsulation (Private Members):

class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const person = new Person("Alice");
//console.log(person.name); // Error, 'name' is private
person.greet();

// 4. Getters and Setters:

class BankAccount {
    private _balance: number = 0;

    get balance() {
        return this._balance;
    }

    set balance(amount: number) {
        if (amount >= 0) {
            this._balance = amount;
        } else {
            console.log("Invalid balance.");
        }
    }
}

const account = new BankAccount();
account.balance = 1000;
console.log(account.balance);
account.balance = -500; // Invalid balance.


// 5. Polymorphism (Method Overriding):

class Shape {
    area(): number {
        return 0;
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }

    area(): number {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

console.log(circle.area()); // 78.53981633974483
console.log(rectangle.area()); // 24




// 1. Three classes are defined:
//    - `Shape`: This is a base class that serves as a blueprint for shapes. It contains a method `area()` that returns 0. 
// This method represents the default behavior for finding the area of an unspecified shape.

//    - `Circle`: This is a derived class that extends the `Shape` class. It represents a specific shape, a circle. 
//The constructor takes a `radius` parameter. It overrides the `area()` method to calculate and return the area of a circle
// using the formula for the area of a circle: π * radius^2.

//    - `Rectangle`: Similar to the `Circle` class, this class also extends the `Shape` class and represents a rectangle.
// It has a constructor that takes `width` and `height` parameters and overrides the `area()` method to calculate 
//and return the area of a rectangle as `width * height`.

// 2. Two instances of shape objects are created:
//    - `circle`: An instance of the `Circle` class with a radius of 5.
//    - `rectangle`: An instance of the `Rectangle` class with a width of 4 and a height of 6.

// 3. Finally, the code calls the `area()` method on both the `circle` and `rectangle` objects and logs the results to the console:
//    - `circle.area()`: This calls the overridden `area()` method in the `Circle` class, which calculates the area of a circle with a radius of 5 and returns the result (approximately 78.54).

//    - `rectangle.area()`: This calls the overridden `area()` method in the `Rectangle` class, which calculates the area of a rectangle with a width of 4 and a height of 6 and returns the result (24).

// In essence, this code demonstrates the use of polymorphism, where objects of different classes (Circle and Rectangle) can be treated as instances of their 
//common base class (Shape). The base class defines a method that can be overridden in the derived classes to provide specialized behavior for different shapes, 
//allowing you to call `area()` on different shape objects, and the appropriate overridden method is executed based on the actual class of the object.


