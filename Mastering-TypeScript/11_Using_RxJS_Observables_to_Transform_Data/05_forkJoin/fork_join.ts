
/**
 When we have a number of Observable streams that need to all complete before we
 do something, we can use the forkJoin function. This situation occurs quite often
 when dealing with REST requests at the start of a page load, where the page may
 need to load data from a number of different REST APIs before displaying the page.
 */

import { interval, forkJoin, of, Observable } from "rxjs";
import { take, map, mergeAll, zip, toArray } from "rxjs/operators";

// To illustrate this concept, let's examine a few Observable streams, as follows:

const onePerSecond = interval(1000);

const threeNumbers: Observable<number[]> = onePerSecond.pipe(
    take(3),
    map((value: number) => {
        console.log(`>> threeNumbers emitting : ${value}`);
        return value;
    }),
    // combine all emitted values into an array and emit
    // this array as a single Observable value.
    toArray()
);

const twoStrings: Observable<string[]> = onePerSecond.pipe(
    take(2),
    map((value: number) => {
        console.log(`>> twoStrings emitting : value_${value}`);
        return `value_${value}`;
    }),
    toArray()
);

// What is interesting about this example is that the `twoStrings` Observable
// will emit its string array before the `threeNumbers` Observable completes.
// This gives us a timing issue if we are trying to wait for both Observables
// to complete before we continue processing.

// Let's see how the forkJoin function helps in this case as follows:
// Here, we are using the `forkJoin` function, which accepts an array of
// Observables that must all complete before it will execute the subscribe function.

forkJoin([
    threeNumbers,
    twoStrings
]).subscribe((values) => {
    console.log(`<< threeNumbers returned : ${values[0]}`);
    console.log(`<< twoStrings returned : ${values[1]}`);
});
/*
>> threeNumbers emitting : 0
>> twoStrings emitting : value_0
>> threeNumbers emitting : 1
>> twoStrings emitting : value_1
>> threeNumbers emitting : 2
<< threeNumbers returned : 0,1,2
<< twoStrings returned : value_0,value_1
 */

// We can also use array syntax to destructure these array
// values into named variables as follows:

forkJoin([
    threeNumbers,
    twoStrings
]).subscribe(([threeNumbersOutput, twoStringsOutput]) => {
    console.log(`<< threeNumbersOutput : ${threeNumbersOutput}`);
    console.log(`<< twoStringsOutput : ${twoStringsOutput}`);
});
