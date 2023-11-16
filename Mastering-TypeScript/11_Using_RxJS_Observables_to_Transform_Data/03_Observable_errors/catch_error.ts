
/**
 So what happens when something goes wrong within an Observable stream?
 Obviously, we will need a mechanism to catch these errors, so that we
 can do something sensible with them. As an example of a faulty Observable
 stream.
 */

import { of, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

// consider the following code:
// While this may seem a fairly contrived example, it can happen
// quite often when receiving data in a nested JSON structure.
interface INestedObj {
    id?: IValue;
}

interface IValue {
    value: number
}

const objEmit: Observable<INestedObj> = of(
    { id: { value: 1 } },
    {},
    { id: { value: 2 } }
);

const returnIdValue = objEmit.pipe(
    map((value: INestedObj) => {
        // TypeScript compiler will normally generate errors if we attempt
        // to access values that could be null or undefined.
        return value.id!.value;
    }),
    // Note, too, that the complete function is not called if an error
    // occurs with the Observable stream.
    // We can, however, use the catchError operator within an
    // Observable stream itself, in order to trap errors earlier,
    // but still maintain the integrity of the stream.
    catchError((error: unknown) => {
        console.log(`stream caught : ${error}`);
        return of(null);
    })
);

// In order to catch this error correctly, we can provide an
// error handling function when we subscribe to our Observable
// stream, as follows:

returnIdValue.subscribe(
    // called for each observable value
    (value: number | null) => {
        console.log(`received ${value} `);
    },
    // called if an error occurs
    (error: unknown) => {
        console.log(`error : ${error}`);
    },
    // complete function
    () => {
        console.log(`complete`);
    }
);
/*
received 1
stream caught : TypeError: Cannot read property 'value' of undefined
received null
complete
 */
