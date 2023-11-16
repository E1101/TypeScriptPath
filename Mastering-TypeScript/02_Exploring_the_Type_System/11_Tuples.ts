
/**
 * Tuples are a method of defining a type that has a finite
 * number of unnamed properties, with each property having an
 * associated type. When using a tuple, all of the properties
 * must be provided.
 */

let tuple1: [string, boolean];
tuple1 = ["test", true];
// This last line will generate an error as follows:
//   error TS2741: Property '1' is missing in type '[string]' but required in type '[string, boolean]'
tuple1 = ["test"];

/**
 * Tuple destructuring
 *
 * As tuples use the array syntax, they can be destructured or disassembled in two ways.
 */

// The first way of destructuring a tuple uses the simple array syntax, as follows:
console.log(`tuple1[0] : ${tuple1[0]}`);
console.log(`tuple1[1] : ${tuple1[1]}`);

// Another way of destructuring a tuple is to use the array syntax to create an
// array of named elements and then assign the value of the tuple to this variable:
let [tupleString, tupleBoolean] = tuple1;
console.log(`tupleString = ${tupleString}`);
console.log(`tupleBoolean = ${tupleBoolean}`);

/**
 * Optional tuple elements
 */

let tupleOptional: [string, boolean?];
tupleOptional = ["test", true];
tupleOptional = ["test"];

console.log(`tupleOptional[0] : ${tupleOptional[0]}`);
console.log(`tupleOptional[1] : ${tupleOptional[1]}`);

/**
 * Tuples and spread syntax
 */

let tupleRest: [number, ...string[]];
tupleRest = [1];
tupleRest = [1, "string1"];
tupleRest = [1, "string1", "string2"];
