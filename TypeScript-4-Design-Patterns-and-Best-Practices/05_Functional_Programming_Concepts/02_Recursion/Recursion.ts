/**
 * Recursion, in simple terms, is having a function call itself on the
 * original body, often with various parameters. Instead of using for
 * or while loops, you call the function itself passing along the context
 * of the current computation. If you implemented the function as pure and
 * did not use side effects, for example, calling an external API or mutating
 * a global variable, then you could still solve the problem but with less complexity.
 */

function factorial(num: number): number {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorial(num - 1);
  }
}

// Recursion is used in functional programming because it's a basis for
// breaking a problem down into smaller functions. You create smaller
// helper functions that accept all the parameters they need to perform
// a calculation and then return the result.

function sum(numbers: number[]): number {
  function recur(numbers: number[], currentSum: number): number {
    if (numbers.length === 0) {
      return currentSum;
    }

    let [first, ...rest] = numbers;
    return recur(rest, currentSum + first);
  }

  return recur(numbers, 0);
}

console.log(sum([1, 2, 3, 4, 5])); // 15


// Hopefully, for us, the runtime offers a technique to avoid stack overflow
// errors related to recursion. This is called Tail Call Optimization and
// happens whenever you change the recursive function to make sure the last
// call always returns a function instead of an expression. In our case, the
// recur function is already tail-recursive and does not depend on another computation.

// There is only one call at the end that passes on all the information to the recursive
// function, so in this case, the runtime engine can delete the stack by forcing it to create
// a new one where the initial values are stored. With the tail call, you can safely invoke
// thousands of recursive calls without blowing up the call stack.
function factorialTail(num: number, result: number = 1): number {
  if (num === 0) {
    return result;
  }

  return factorialTail(num - 1, num * result);
}
