// Decorators in TypeScript are a powerful feature that allows you to add metadata or modify the behavior of classes, properties, methods, 
//or function parameters at design time. Decorators are often used in various TypeScript frameworks and libraries, such as Angular and NestJS.
// Here are some examples of decorators in TypeScript:

// 1. **Class Decorators:**

//    Class decorators are used to modify or add metadata to classes. They are applied just before a class declaration. Here's a simple example:

//    ```typescript
//    function MyDecorator(target: Function) {
//      target.prototype.customProperty = 'Hello, World!';
//    }

//    @MyDecorator
//    class MyClass {}

//    const instance = new MyClass();
//    console.log(instance.customProperty); // Output: 'Hello, World!'
//    ```

// 2. **Property Decorators:**

//    Property decorators are applied to class properties. They can be used to modify or add metadata to a class property. Here's an example:

//    ```typescript
//    function MyPropertyDecorator(target: any, propertyKey: string) {
//      // Modify the property
//      target[propertyKey] = 'New Value';
//    }

//    class MyClass {
//      @MyPropertyDecorator
//      myProperty: string;
//    }

//    const instance = new MyClass();
//    console.log(instance.myProperty); // Output: 'New Value'
//    ```

// 3. **Method Decorators:**

//    Method decorators are used to modify or add metadata to class methods. Here's an example:

//    ```typescript
//    function MyMethodDecorator(target: any, methodName: string, descriptor: PropertyDescriptor) {
//      // Modify the method
//      const originalMethod = descriptor.value;
//      descriptor.value = function (...args: any[]) {
//        console.log(`Calling ${methodName} with arguments: ${args}`);
//        return originalMethod.apply(this, args);
//      };
//    }

//    class MyClass {
//      @MyMethodDecorator
//      greet(name: string) {
//        console.log(`Hello, ${name}`);
//      }
//    }

//    const instance = new MyClass();
//    instance.greet('Alice'); // Output: 'Calling greet with arguments: Alice', 'Hello, Alice'
//    ```

// 4. **Parameter Decorators:**

//    Parameter decorators are applied to parameters within a method or constructor. They can be used to add metadata or modify the behavior of function parameters.
// Here's an example:

//    ```typescript
//    function MyParameterDecorator(target: any, methodName: string, parameterIndex: number) {
//      console.log(`Decorating parameter at index ${parameterIndex} of method ${methodName}`);
//    }

//    class MyClass {
//      greet(@MyParameterDecorator name: string) {
//        console.log(`Hello, ${name}`);
//      }
//    }

//    const instance = new MyClass();
//    instance.greet('Bob'); // Output: 'Decorating parameter at index 0 of method greet', 'Hello, Bob'
//    ```

// These are simple examples of TypeScript decorators. Decorators are extensively used in various frameworks and libraries to handle tasks like dependency injection,
// routing, authentication, and more. They offer a way to add additional functionality or behavior to your code in a clean and organized manner.