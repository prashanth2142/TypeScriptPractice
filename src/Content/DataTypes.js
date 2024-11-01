"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.absolute = exports.RandomNumberGenerator = exports.phi = exports.squareTwo = exports.pi = void 0;
exports.pi = 3.14;
exports.squareTwo = 1.41;
exports.phi = 1.61;
var RandomNumberGenerator = /** @class */ (function () {
    function RandomNumberGenerator() {
    }
    return RandomNumberGenerator;
}());
exports.RandomNumberGenerator = RandomNumberGenerator;
function absolute(num) {
    if (num < 0)
        return num * -1;
    return num;
}
exports.absolute = absolute;
var DataTypes = /** @class */ (function () {
    function DataTypes() {
        this.num = 42; // Number
        this.str = "Hello, World!"; // String
        this.isActive = true; // Boolean
        this.undefVar = undefined; // Undefined
        this.nullVar = null; // Null
        this.sym = Symbol("unique"); // Symbol
        this.bigInt = 1234567890123456789012345678901234567890n; // BigInt
        this.person = {
            name: "John",
            age: 30,
        }; // Object
        this.numbers = [1, 2, 3, 4, 5]; // Array
    }
    DataTypes.prototype.greet = function () {
        console.log("Hello!");
    }; // Function
    return DataTypes;
}());
// Create an instance of the TypesExample class
var example = new DataTypes();
// Access and print the values
console.log("num:", example.num);
console.log("str:", example.str);
console.log("isActive:", example.isActive);
console.log("undefVar:", example.undefVar);
console.log("nullVar:", example.nullVar);
console.log("sym:", example.sym);
console.log("bigInt:", example.bigInt);
console.log("person:", example.person);
console.log("numbers:", example.numbers);
// Call the greet function
example.greet();
console.log(exports.pi);
var absPhi = absolute(exports.phi);
