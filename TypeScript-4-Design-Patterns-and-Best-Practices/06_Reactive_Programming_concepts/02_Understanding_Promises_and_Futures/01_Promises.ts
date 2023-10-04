/**
 * Let's start with the most popular Reactive programming structure,
 * which is the Promise. A Promise is a container for single future computations.
 * A future computation is a result of a function call that will finish in future
 * time and not immediately. The way that Promises work is by creating a container
 * that can either resolve to a value in the future or reject with a message.
 *
 * Simply speaking, a Promise is when you call a function and instead of returning
 * an actual value, it returns an object that promises you that a value will be
 * returned at some point. The creator of the Promise object will have to get this
 * value by checking on the outcome of this computation at a later time, be it
 * successful by resolving, or unsuccessful by rejecting.
 */

// Let's see a typical example of how you will use Promises in the real world:

const fetch = require("node-fetch");
const pullFromApi = new Promise(async (resolve, reject) => {
  return
  fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => resolve(json));
});

// Because the fetch call is also a Promise, this call can be simplified as follows:

const fetcher = require("node-fetch");
const pullFromApi = fetcher(
  "https://jsonplaceholder.typicode.com/todos/1"
).then((response) => response.json());

pullFromApi.then((result) => {
  console.log(result);
});

// The Promise API offers a few helper methods for chaining promises together. Here are some examples:
// Here, we have defined two utility functions, delay and failAfter, that return promises after a
// set timeout delay. Those could represent calls to a different API or asynchronous operation.

function delay(ms: number = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function failAfter(ms: number = 1000) {
  return new Promise((_, reject) => setTimeout(reject, ms));
}

// We can put them all in a list and call Promise.race the first helper
// function that will resolve as long as the first Promise is either
// resolved or rejected.
const races = Promise.race([delay(1000), failAfter(500)]);

// will resolve only if all Promises are resolved, otherwise it will reject.
const all = Promise.all([delay(1000), failAfter(1500)]);

// There is one more method added as part of the ECMAScript 2020 standard called Promise.allSettled,
// which will return a list of all Promises together with their resolution status. You will have to
// add the following declaration package to the lib section in `tsconfig.json` to use this method:
// lib": [
//    "dom",
//    "es2015",
//    "es2020"
//  ],
// This is very useful for triggering asynchronous tasks that do not depend on each other.
const settled = Promise.allSettled([delay(1000), failAfter(500)]);


(async () => {
  races
    .then((value) => {
      console.log(value);
    })
    .catch((_) => {
      console.log("Error");
    });
})();

(async () => {
  all
    .then((value) => {
      console.log(value);
    })
    .catch((_) => {
      console.log("Error");
    });
})();

(async () => {
  settled
    .then((value) => {
      console.log(value);
    })
    .catch((_) => {
      console.log("Error");
    });
})();
/*
[
  { status: 'fulfilled', value: undefined },
  { status: 'rejected', reason: undefined }
]
 */
