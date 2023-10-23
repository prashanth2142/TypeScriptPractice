// In TypeScript, both namespaces and modules are used for organizing and encapsulating code, but they have distinct purposes and syntax.

// 1. **Namespaces** (formerly called internal modules):

// Namespaces are used to group related code into a single, globally accessible namespace. 
// They are typically used to avoid naming conflicts and provide organization within your TypeScript code.

// Example of a namespace:

// ```typescript
// namespace MyNamespace {
//   export class MyClass {
//     constructor(private value: number) {}
//     getValue(): number {
//       return this.value;
//     }
//   }
// }

// const myObject = new MyNamespace.MyClass(42);
// console.log(myObject.getValue()); // Output: 42
// ```

// 2. **Modules** (formerly called external modules):

// Modules are used to encapsulate code and to manage dependencies between different parts of your application. 
// Modules help you break down your code into smaller, reusable pieces and are widely used in modern TypeScript and JavaScript development.

// Example of a module:

// ```typescript
// // math.ts
// export function add(a: number, b: number): number {
//   return a + b;
// }

// // app.ts
// import { add } from './math';

// const result = add(5, 3);
// console.log(result); // Output: 8
// ```

// In this example, we have a module `math.ts` that exports a function `add`, and in the `app.ts` file, we import and use that function.

// It's important to note that, in modern TypeScript and JavaScript, modules are often implemented using the ES6 module system (with `import` and `export` statements)
// or using CommonJS (with `require` and `module.exports`) when targeting Node.js. The usage of namespaces for organizing code is less common
// in modern TypeScript projects.

// However, namespaces can still be useful for legacy code and for scenarios where you need to organize code without relying on ES6 or CommonJS module systems.
// Namespaces are often used in the context of older TypeScript codebases and may be less prevalent in newer projects.

// In new projects or when working with third-party libraries, it is recommended to use modules and ES6-style module syntax for a cleaner 
//and more maintainable code organization.