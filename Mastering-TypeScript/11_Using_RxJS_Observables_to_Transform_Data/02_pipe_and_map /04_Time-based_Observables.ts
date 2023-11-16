
/**
 One of the main features of using RxJS Observables is that they are able to
 work seamlessly with asynchronous events. In other words, if you subscribe
 to an Observable, and the Observable only emits a value after 10 seconds,
 you will still be notified of this event when it happens.

 This ability to handle asynchronous events with Observables is very handy and is
 used extensively in some libraries for making requests to an API. We do not know
 how long the server may take to respond, so we can therefore create an Observable
 out of a REST request and then simply subscribe to it.
 */

import { interval } from "rxjs";
import { map, take } from "rxjs/operators";

// To illustrate time-based events, we can use another
// function made available by the RxJS library name
// `interval`, as follows:

const sourceInterval = interval(1000);
const fiveNumbers = sourceInterval.pipe(
    // We have set this value to 5, and therefore, the map function will be
    // provided with five values, one per second. Once we have received all
    // five values, the Observable stream will stop.
    take(5),
    map((value: number) => {
        console.log(`map received : ${value}`)
        return `string_${value * 2}`;
    })
);

fiveNumbers.subscribe((value: string) => {
    console.log(`${new Date().toLocaleTimeString()} ${value}`);
});
/*
map received : 0
5:06:20 PM string_0
map received : 1
5:06:21 PM string_2
map received : 2
5:06:22 PM string_4
map received : 3
5:06:23 PM string_6
map received : 4
5:06:24 PM string_8
 */
