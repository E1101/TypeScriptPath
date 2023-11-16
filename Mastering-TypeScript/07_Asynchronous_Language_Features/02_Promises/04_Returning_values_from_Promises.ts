
/**
 * Most Promises will, in fact, return some sort of information when called,
 * and we use the generic syntax when we construct a Promise, in order to
 * indicate what type it will return.
 */

function promiseReturningString(throwError: boolean): Promise<string> {
    return new Promise<string>(
        (
            resolve: (outputValue: string) => void,
            reject: (errorCode: number) => void
        ) => {
            if (throwError) {
                // The reject callback signature can return something other than a string.
                reject(101);
            }

            // So, if we define a Promise<string>, then the resolve function
            // signature must have a single parameter of type string.
            resolve(`resolve with message`);
        }
    )
}

// Let's take a look at how we can use this Promise, as follows:

console.log(`1. calling promiseReturningString`)
promiseReturningString(false)
    .then((returnValue: string) => {
        console.log(`2. returnedValue : ${returnValue}`);
    }).catch((errorCode: number) => {
        console.log(`this is not called`);
    });

console.log(`1. calling promiseReturningString (force error)`)
promiseReturningString(true)
    .then((returnValue: string) => {
        console.log(`this is not called`);
    })
    .catch((errorCode: number) => {
        console.log(`2. caught : ${errorCode}`);
    });
