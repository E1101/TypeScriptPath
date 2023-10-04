/**
 * Referential transparency is another name for consistency and determinism.
 * This means that once you define some functions that accept parameters and
 * you call them, then you are allowed to replace those functions with their
 * value without changing the results. This means that you regard your functions
 * as data and vice versa.
 */

function sortList(list: number[]): number[] {
  // The highlighted section shows the part of the code that breaks
  // referential transparency. The sort method of the Array object is
  // mutating the original array, thus introducing side effects. This
  // means that anywhere in the program where the original list was
  // expected to be unsorted, it is now sorted and it could break
  // some assumptions.
  list.sort();

  return list;
}

let list = [42, 1, 4, 5];
let l = [...sortList(list)];
let m = [...list];
console.log(l);
console.log(m);
