
/**
 * Function overloading
 */

// Declaration files allow for function overloads, where the same
// function can be declared with different arguments, as follows:
declare function trace(arg: string | number | boolean);
declare function trace(arg: { id: number; name: string });

/**
 * Nested namespaces
 */

// This declaration will result in all three namespaces needing to
// referenced in order to call the log function, as follows:
//   FirstNamespace.SecondNamespace.ThirdNamespace.log("test");
declare module FirstNamespace {
    module SecondNamespace {
        module ThirdNamespace {
            function log(msg: string);
        }
    }
}

/**
 * Interfaces
 */

declare interface IIdName {
    id: number;
    name: string;
}

/**
 * Classes
 */

// Here, we have declared a class named MyModuleClass that has a public print
// function that returns void. This class definition can then be used as follows:
//   let myClass = new MyModuleClass();
//   myClass.print();
declare class MyModuleClass {
    public print(): void;
    private id: number;
}

// static classes properties
//

// We can use these static properties and functions as follows:
//   MyModuleStatic.id = 10;
//   MyModuleStatic.print();
declare class MyModuleStatic {
    static print(): void;
    static id: number;
}

// abstract classes
//

declare abstract class MyModuleAbstract {
    abstract print(): void
}

/**
 * Generics
 */

// Here, we are declaring a function named sort that is using generic syntax
// to specify the type of T to be either a number or a string, or both.
// This sort function has a single parameter named input that is an array
// of type T and returns an array of type T. This declaration will allow
// the following usage:
//   let sortedStringArray: Array<string> = sort(["first", "second"]);
//   let sortedNumericArray: Array<number> = sort([1, 2, 3]);
declare function sort<T extends number | string>(input: Array<T>): Array<T>{ }

/**
 * Conditional types
 */

// We can use this distributed conditional type as follows:
//   type myNever = stringOrNumberOrBoolean<[string,number]>;
declare type stringOrNumberOrBoolean<T> =
    T extends string ? string :
    T extends number ? number :
    T extends boolean ? boolean : never;

/**
 * Conditional type inference
 */

// As the type of the id property is a string in the first line of this code,
// then myString will be of type string. The type of the id property in the
// second line of code is of type number, and therefore myNumber will be of type number.
//   type myString = inferFromPropertyType<{ id: string }>;
//   type myNumber = inferFromPropertyType<{ id: number }>;
declare type inferFromPropertyType<T> = T extends { id: infer U } ? U : never;
