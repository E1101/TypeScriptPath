
import { of, Observable, interval } from "rxjs";
import { map, take } from "rxjs/operators";

// When writing functions that are used by the RxJS operator functions,
// we need to be careful that we continue to return values, and do not
// swallow them unexpectedly.
// Consider the following code:
const emitOneTwo = of(1, 2);
const swallowedValues = emitOneTwo.pipe(
    map((value: number) => {
        console.log(`swallowing ${value}`);
        // not returning a value;
    })
);

swallowedValues.subscribe((value: void) => {
    console.log(`subscriber received value: ${value}`)
});

/*
swallowing 1
subscriber received value: undefined
swallowing 2
subscriber received value: undefined
 */

// If we truly do want to not return a value, then a better
// option is to make this decision explicitly, as follows:
const swallowedValuesIntentionally: Observable<number | null> =
    emitOneTwo.pipe(
        map((value: number) => {
            if (value < 2) {
                return null;
            }

            return value;
        })
    );
swallowedValuesIntentionally.subscribe((value: number | null) => {
    console.log(`subscriber received value: ${value}`)
});
/*
subscriber received value: null
subscriber received value: 2
 */
