// 1. Class Declaration and Object Instantiation:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
    Car.prototype.drive = function () {
        console.log("Driving the ".concat(this.make, " ").concat(this.model));
    };
    return Car;
}());
var myCar = new Car("Toyota", "Camry");
myCar.drive();
// 2. Inheritance:
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(make, model, batteryCapacity) {
        var _this = _super.call(this, make, model) || this;
        _this.batteryCapacity = batteryCapacity;
        return _this;
    }
    ElectricCar.prototype.charge = function () {
        console.log("Charging the ".concat(this.make, " ").concat(this.model, " with a ").concat(this.batteryCapacity, " kWh battery."));
    };
    return ElectricCar;
}(Car));
var myElectricCar = new ElectricCar("Tesla", "Model 3", 75);
myElectricCar.drive();
myElectricCar.charge();
// 3. Encapsulation (Private Members):
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
var person = new Person("Alice");
//console.log(person.name); // Error, 'name' is private
person.greet();
// 4. Getters and Setters:
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this._balance = 0;
    }
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (amount) {
            if (amount >= 0) {
                this._balance = amount;
            }
            else {
                console.log("Invalid balance.");
            }
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
var account = new BankAccount();
account.balance = 1000;
console.log(account.balance);
account.balance = -500; // Invalid balance.
// 5. Polymorphism (Method Overriding):
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.area = function () {
        return 0;
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var circle = new Circle(5);
var rectangle = new Rectangle(4, 6);
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
