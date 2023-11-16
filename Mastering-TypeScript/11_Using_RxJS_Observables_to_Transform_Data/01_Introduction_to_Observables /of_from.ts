
/**
 To begin the discussion on Observables, let's first install the RxJS library as follows:
 ```
   npm install rxjs
 ```
 The RxJS library already includes the declaration files that are needed by TypeScript,
 so there is no need to install them separately using @types.
 */

import { of, from, Observable } from "rxjs";

// To generate an Observable, we can use the of function as follows:
const emitter: Observable<number> = of(1, 2, 3, 4);

// We can now create an Observer as follows:
// The subscribe function takes a function as a parameter,
// and this function will be called once for each value that
// is emitted by the Observable.
emitter.subscribe((value: number) => {
    console.log(`value: ${value}`)
});

// The `of` function has a partner function named `from`, which
// uses an array as input into the Observable, as follows:
const emitArray = <Observable<number>> from([1, 2, 3, 4]);

// Here, we can see that the from function has created an Observable
// stream from the array input, and that the function we provided to
// the subscribe function is being called once for each value that is
// emitted by the Observable.
emitArray.subscribe((value: number) => {
    console.log(`arr: ${value}`);
});
/*
arr: 1
arr: 2
arr: 3
arr: 4
 */
