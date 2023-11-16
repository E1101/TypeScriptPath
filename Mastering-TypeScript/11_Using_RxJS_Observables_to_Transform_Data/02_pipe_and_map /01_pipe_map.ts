
import { of, Observable, interval } from "rxjs";
import { map, take } from "rxjs/operators";

const emitter: Observable<number> = of(1, 2, 3, 4);

// This pipe function takes a variable number of functions as parameters and
// will execute these functions on each value that is emitted by the Observable.
// The functions that are provided to the pipe function are generally known as
// Observable operators, which all accept an Observable as input, and return an
// Observable as output.
// The `pipe` function emits an Observable stream.
// (!) Typing Observables is not strictly necessary, as the TypeScript compiler
// will determine the correct return types when working with Observables.
const modulus: Observable<number> = emitter.pipe(
    map((value: number) => {
        console.log(`received : ${value}`);
        return value % 2;
    })
);

modulus.subscribe((value: number) => {
    console.log(`modulus : ${value}`);
});
/*
received : 1
modulus : 1
received : 2
modulus : 0
received : 3
modulus : 1
received : 4
modulus : 0
 */
