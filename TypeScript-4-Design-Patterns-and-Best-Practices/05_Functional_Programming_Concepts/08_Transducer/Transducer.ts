/**
 * A reducer is a simple function that accepts an input of type T,
 * which is typically a collection. It is a function that accepts the
 * current value in the collection, the current aggregated value, and
 * a starting value. The job of the reducer is to iterate over the collection
 * starting from the initial value, calling the function that accepts the
 * current aggregate and the current iteration and returns the end result.
 */

const collection = [1, 2, 3, 4, 5];

function addReducer(curr: number, acc: number): number {
  return curr + acc;
}

console.log(
    collection.reduce(addReducer, 0)
);

// Once you use reducers, you will find two potential problems with them:
// They are not very composable: Having to accept two parameters in the
// reducer makes it not very composable. What if you wanted to add another
// reducer into the mix for filtering the odd numbers in the previous example?
// This would mean that you would have to use a different technique to filter
// first and reduce afterward:
console.log(
    collection.filter((n: number) => (n & 1) === 1).reduce(addReducer)
);

// With transducers, you get all of those benefits plus a cleaner API
// for working with chaining operators. Here is the basic type of Transducer:
type Transducer<T, K> = (reducerFn: Reducer<any, T>) => Reducer<any, K>;

// This is a type that declares two generic parameters, T and K, as a function
// that accepts a Reducer type and returns another Reducer type. We'll show
// another type of Reducer next:
type Reducer<T, K> = () => T | ((acc: T) => T) | ((acc: T, curr: K) => T);

// This type of Reducer is a union type that can be either a
// thunk function (a function that accepts no arguments and -
// returns a value), an accumulation function, or a function
// that takes two arguments – one for the accumulator and one
// for the current value. Because it's quite delicate to implement
// a function for Transducer type and ensure type safety, you can
// leverage the third-party library Ramda to perform the implementation
// of the transducer for you.

// This is how you can use transducers using Ramda:

import * as R from "ramda";

const transducer = R.compose(R.map(R.add(1)));
const result = R.transduce(
  transducer,
  R.flip<number, readonly number[], number[]>(R.append),
  [],
  collection
);

console.log(result); // [2, 3, 4, 5, 6]
