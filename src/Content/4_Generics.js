// Generics in TypeScript provide a way to create flexible and reusable code components while maintaining strong type safety.
// Here are examples of using generics with functions, classes, types, arrays, and constraints:

// **1. Generic Functions:**

// A generic function allows you to create functions that work with a variety of types. Here's an example of a generic function to swap two values:

// ```typescript
// function swap<T>(a: T, b: T): [T, T] {
//   return [b, a];
// }

// const result = swap(1, 2);
// console.log(result); // Output: [2, 1]
// ```

// **2. Generic Classes:**

// You can create generic classes to work with a variety of data types. Here's an example of a simple generic stack class:

// ```typescript
// class Stack<T> {
//   private items: T[] = [];

//   push(item: T) {
//     this.items.push(item);
//   }

//   pop(): T | undefined {
//     return this.items.pop();
//   }
// }

// const numberStack = new Stack<number>();
// numberStack.push(1);
// numberStack.push(2);

// const poppedNumber = numberStack.pop();
// console.log(poppedNumber); // Output: 2

// const stringStack = new Stack<string>();
// stringStack.push("Hello");
// stringStack.push("World");

// const poppedString = stringStack.pop();
// console.log(poppedString); // Output: 'World'
// ```

// **3. Generic Types:**

// You can define generic types using the `type` keyword to create reusable type definitions. Here's an example of a generic type:

// ```typescript
// type Pair<T, U> = {
//   first: T;
//   second: U;
// };

// const pair: Pair<number, string> = { first: 42, second: "Hello" };
// console.log(pair); // Output: { first: 42, second: 'Hello' }
// ```

// **4. Generic Arrays:**

// You can use generics to define arrays of specific types. TypeScript's built-in array type is generic. Here's an example:

// ```typescript
// const numbers: Array<number> = [1, 2, 3];
// const words: Array<string> = ["apple", "banana", "cherry"];
// ```

// **5. Generic Constraints:**

// Generic constraints allow you to restrict the types that can be used with generics. Here's an example of a generic function with a constraint:

// ```typescript
// class Person {
//   constructor(public name: string) {}
// }

// function getPersonName<T extends Person>(person: T): string {
//   return person.name;
// }

// const alice = new Person("Alice");
// console.log(getPersonName(alice)); // Output: 'Alice'
// ```

// In this example, the `getPersonName` function takes an argument of a generic type `T`, 
//but it is constrained to types that extend the `Person` class. This ensures that you can only pass objects with a `name` property of type string.

// Generics in TypeScript are a powerful way to write reusable and type-safe code, and they are commonly used in many libraries 
//and frameworks to provide flexibility and maintain strong typing.