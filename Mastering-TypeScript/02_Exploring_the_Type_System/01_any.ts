
// Consider the following JavaScript code:
// This is valid JavaScript code, and therefore, if we are using TypeScript
// to generate JavaScript, we will need to be able to mimic this functionality.
var item1 = { id: 1, name: "item1" }
item1 = { id: 2 };

// TypeScript introduces the `any` type for such occasions. Specifying that an
// object has a type of any will, in essence, remove the TypeScript strict
// type checking and is used for backward compatibility with JavaScript,
// its usage should be limited as much as possible.
var item2: any = { id: 1, name: "item1" }
item2 = { id: 2 };
// ---------------------------------------------------------------------------------------------------------------------

/**
 * Explicit casting
 */

// In essence, this syntax is equivalent to our earlier example,
// and specifies that the type of the variable is `any`.
var item3 = <any>{ id: 1, name: "item1" }
// Another variant of this casting technique is to use the `as` keyword, as follows:
var item3 = { id: 1, name: "item1" } as any;
item3 = { id: 2 };
