/**
 * It is best practice to identify constant variables within our code
 * and explicitly mark them as const. The use of const and let clearly
 * indicates to the reader of the code the intent of the variable. A variable
 * marked as `const` cannot be changed, and a variable declared with `let` is
 * a block-scoped temporary variable.
 */


// Consider the following TypeScript code:

var index: number = 0;
if (index == 0) {
    var index: number = 2;
    console.log(`index = ${index}`); // 2
}
console.log(`index = ${index}`); // 2

// Here, we can see that modifying the variable named index inside
// of our if code block does not affect the variable named index
// that is defined outside of the code block. They are seen as
// two separate variables.
let index2: number = 0;
if (index2 == 0) {
    let index2: number = 2;
    console.log(`index = ${index2}`); // 2
}

console.log(`index = ${index2}`); // 0
// ---------------------------------------------------------------------------------------------------------------------

/**
 * const values
 */

const constValue = "this should not be changed";
constValue = "updated";
