
// We can use the reject callback in the case where
// we want to report an error, as follows:

function errorPromise(): Promise<void> {
    return new Promise<void>(
        (   // constructor
            resolve: () => void,
            reject: () => void
        ) => {
            // function definition
            console.log(`2. calling reject()`);
            reject();
        }
    )
}

// Although we can write Promise-based code without a catch clause,
// it is always good practice to ensure that we do, and to handle errors properly.

console.log(`1. calling errorPromise()`);
errorPromise()
    .then(() => { })
    .catch(() => { console.log(`3. caught an error`) });
