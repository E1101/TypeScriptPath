/**
 * Function composition is a mathematical concept where you apply
 * one function to the results of another.
 */

import * as R from "ramda";

// The result type of the substring function is string, which
// matches with the input parameter type of the toLowerCase
// function. This means that they can be composed together.

function toLowerCase(input: string): string {
  return input.toLocaleLowerCase();
}

function substring(input: string, index: number): string {
  return input.substr(0, index);
}

console.log(toLowerCase(substring('«ADQdasd 1edasd»', 4)));
// ---------------------------------------------------------------------------------------------------------------------

// However, the simplest case is not always attainable because many
// functions take more than one parameter. This makes it unwieldy when
// trying to propagate the parameters to the right and you will have to
// either modify the functions to match the signature or not use function
// composition at all.

function partitionAt(input: string, index: number): [string, string?] {
  if (index < 0 || index > input.length) {
    return [input];
  }

  return [input.substr(0, index), input.substr(index)];
}

console.log(
    // The correct way to combine it is by lowercasing the input string first:
    partitionAt(toLowerCase("aAJu234AA*AUHF"), 4)
);

toLowerCase(partitionAt("aAJu234AA*AUHF"), 4) // return type does not match with input type
// ---------------------------------------------------------------------------------------------------------------------

// Ideally, you want to have functions that are easily composed to take only
// one argument at a time. We can achieve that composability by currying the
// functions. Currying means that we take a function that accepts more than one
// parameter and turn it into a function that accepts one parameter at a time.
//   const add = (a: number) => (b: number) => a + b;

const addTwoNumbers = (a: number, b: number) => a + b;
const addTwoNumbersC = R.curry(addTwoNumbers);
const f = addTwoNumbersC(4);
console.log(f(3)); //7

// Ramda also offers some additional utilities that make it easier to
// compose functions together:
// The compose utility method accepts a list of functions that are composed
// from right to left. This is similar to the original compose example we
// saw in this section, but a bit easier to read and to use.
const message = R.compose(toLowerCase, substring);
console.log(message("aAJu234AA*AUHF", 4));
