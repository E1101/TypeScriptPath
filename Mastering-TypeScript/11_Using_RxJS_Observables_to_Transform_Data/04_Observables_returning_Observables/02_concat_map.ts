
import { of } from "rxjs";
import { delay, concatMap, mergeMap } from "rxjs/operators";

// When an Observable emits values, the values emitted may arrive at
// a subscriber out of order. Let's assume that an Observable takes
// three seconds to emit a single value, and then two seconds to emit
// another value, and finally one second to emit the third value.
// This can be simulated as follows:

const emitTreeTwoOne = of(3, 2, 1);

const delayedEmit = emitTreeTwoOne.pipe(
    mergeMap((value: number) => {
        console.log(
            `>> emit >> 
            ${new Date().toLocaleTimeString()} 
            value : ${value}, 
            delaying : ${1000 * value} ms`
        );

        // delaying the emission of these values by
        // 3 seconds, then 2 seconds, then 1 second.
        return of(value).pipe(delay(1000 * value))
    })
);

delayedEmit.subscribe(value => {
    console.log(`<< receive << 
        ${new Date().toLocaleTimeString()} 
        received value : ${value}`);
});
/*
>> emit >>
        11:05:26 PM
        value : 3,
        delaying : 3000 ms
>> emit >>
        11:05:26 PM
        value : 2,
        delaying : 2000 ms
>> emit >>
        11:05:26 PM
        value : 1,
        delaying : 1000 ms
<< receive <<
        11:05:27 PM
        received value : 1
<< receive <<
        11:05:28 PM
        received value : 2
<< receive <<
        11:05:29 PM
        received value : 3     <--- after 3 sec
 */

// If it is important to process the emitted values in order, no matter
// when they arrived, we can use the `concatMap` function instead of the
// `mergeMap` function. The concatMap function will only subscribe to the
// next Observable when the previous one completes.

const delayedEmitOrdered = emitTreeTwoOne.pipe(
    // mergeMap((value: number) => {
    concatMap((value: number) => {
        console.log(`>> emit >> 
        ${new Date().toLocaleTimeString()} 
        value : ${value}, 
        delaying : ${1000 * value} ms`);
        return of(value).pipe(delay(1000 * value))
    })
);

delayedEmitOrdered.subscribe(value => {
    console.log(`<< receive << 
        ${new Date().toLocaleTimeString()} 
        received value : ${value}`);
});
/*
>> emit >>
        11:10:03 PM
        value : 3,
        delaying : 3000 ms
<< receive <<
        11:10:06 PM          <--- 3 sec later
        received value : 3
>> emit >>
        11:10:06 PM
        value : 2,
        delaying : 2000 ms
<< receive <<
        11:10:08 PM
        received value : 2
>> emit >>
        11:10:08 PM
        value : 1,
        delaying : 1000 ms
<< receive <<
        11:10:09 PM
        received value : 1
 */
