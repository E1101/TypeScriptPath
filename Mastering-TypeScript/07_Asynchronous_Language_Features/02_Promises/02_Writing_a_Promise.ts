
// A Promise is an instance of a new Promise class whose constructor
// requires a function signature that accepts two callback functions,
// generally named resolve and reject. Consider the following function definition:

function fnDelayedPromise(resolve: () => void, reject: () => void) {
    function afterTimeout() {
        resolve();
    }

    setTimeout(afterTimeout, 1000);
}

// We can now use this function to construct a Promise object, as follows:

function delayedResponsePromise(): Promise<void> {
    return new Promise<void>(fnDelayedPromise);
}

// Let's take a look at how these two steps are combined in general practice, as follows:

function delayedPromise(): Promise<void> {
    // return new Promise object
    return new Promise<void>
        ( // start constructor
            (
                resolve: () => void, // resolve function
                reject: () => void   // reject function
            ) => {
                // start of function definition
                function afterTimeout() {
                    resolve();
                }

                setTimeout(afterTimeout, 1000);
                // end of function definition
            }
        ); // end constructor
}

delayedPromise().then(() => {
    console.log(`delayed promise returned`);
}).catch(() => {
    console.log(`an error occurred`);
})
