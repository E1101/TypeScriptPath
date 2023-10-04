// When adhering to good functional programming principles,
// you aim to eliminate the sources of mutability and undesired
// side effects in your code. It helps if you think of your
// programs as a composition of many small functions together.

// With referential transparency, we can replace any of those
// functions in the compose list with their value and still
// get the same result.

import { IO, log } from "../01_Pure_functions/PureFunctions";
import * as R from "ramda";

function main(): IO<void> {
  return R.compose(log, sumList, getArgs)(11, 4);
}

function sumList(number: number[]): number {
  return number.reduce((prev, curr) => prev + curr, 0);
}

function getArgs(a: number, b: number): number[] {
  return [a, b];
}

console.log(main()()); // 15
