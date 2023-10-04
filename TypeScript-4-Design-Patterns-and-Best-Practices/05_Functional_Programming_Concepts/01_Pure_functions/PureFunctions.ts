/**
 * functions are considered pure when the following occurs:
 */

/**
 * They produce the same output with the same arguments:
 *   The function may or may not accept an input, but for the same arguments,
 *   it must return the same output. For example, the following function returns
 *   the same result when called with the same parameter
 */
function add1(num: number): number {
  return num + 1;
}

console.log(add1(1)); // 2
console.log(add1(1)); // 2

/**
 * They do not introduce side effects:
 *   A side effect is something that interfaces with the system and is not part of
 *   the program. For example, printing to the console and opening a file are both
 *   considered side effects because the screen or the file itself is not part of
 *   the program. Those interfaces are part of the system that is used to interact
 *   with the user or the filesystem. This is an example of a function that breaks
 *   this rule:
 *
 *   Some cases where side effects can be introduced include using static variables,
 *   returning mutable objects, opening files or calling APIs, and so on.
 */
function printNumber(num: number): void {
  console.log(num);
}

function toZero(num: number): 0 {
  return 0;
}

/**
 * Instead of directly printing onto the screen or modifying a file,
 * you wrap these operations into a function that deals with interactions
 * with the system. We call this an IO action, which is a special function
 * that is a result of the side-effect operation.
 *
 * For example, the following interface represents a generic IO effect:
 */
export interface IO<A> {
  (): A;
}

// This is how you use it in practice:
// Notice that now every call with a side effect will have a return type of IO<T>,
// which gives us a hint that this call interfaces with the system. However,
// because it's wrapped under this type, we can enhance it with methods that make
// it easier to compose, even if those methods do not do anything meaningful.

export const log = (s: unknown): IO<void> =>
  () => console.log(s);

const now: IO<string> = () => new Date().toISOString();

log("Hello")();
console.log(now());
