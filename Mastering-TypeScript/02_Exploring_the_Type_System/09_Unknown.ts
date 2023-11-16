
/**
 * A variable marked as unknown can hold any type of value,
 * similar to a variable of type any. The difference between
 * the two, however, is that a variable of type unknown cannot
 * be assigned to a known type without explicit casting.
 */

// This is allowed, since we have defined the type of the variable `a`
// to be of type `any`. Even though we have assigned a string to the `a`
// variable, TypeScript assumes that we know what we are doing, and
// therefore will allow us to assign a string to a number.
let a: any = "test";
let aNumber: number = 2;
aNumber = a;

// Let's rewrite this code but use the `unknown` type instead:
let u: unknown = "an unknown";
u = 1;
let aNumber2: number;
aNumber2 = u;
// we must cast an unknown type to another primitive type before assignment:
aNumber2 = <number>u;
