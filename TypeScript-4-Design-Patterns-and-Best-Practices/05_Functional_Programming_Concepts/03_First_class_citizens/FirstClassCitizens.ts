/**
 * The first-class citizen concept treats certain types of values or
 * types as native counterparts that can be used in different operations.
 * For example, treating functions as first-class citizens means that we
 * can use functions as parameters, as return values, and we can assign them
 * to variables or store and retrieve them from data structures. Think of this
 * as having the functions treated as values and used as data.
 */

const mod = function (a: number, b: number): number {
  return a % b;
};

function calculateMod(
  a: number,
  b: number,
  modFun: (a: number, b: number) => number
): number {
  return modFun(a, b);
}
console.log(calculateMod(10, 3, mod)); // 1

function mulByTwo(a: number): () => number {
  return () => {
    return a * 2;
  };
}

mulByTwo(4)(); // 8
