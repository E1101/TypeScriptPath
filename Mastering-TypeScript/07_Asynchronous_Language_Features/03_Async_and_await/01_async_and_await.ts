
/**
 * The async and await language features of JavaScript were adopted in the
 * ES2017 language specification, meaning that only JavaScript runtimes that
 * support this version can use the new async and await keywords. TypeScript,
 * however, has incorporated support for these features for ES target versions
 * all the way back to ES3. This means that we can safely use async and await
 * within any body of TypeScript code, and it will behave as if the runtime
 * was running ES2017.
 *
 * The async and await technique really helps us when writing code that is
 * sequential in nature. If we have many steps in our code that must be
 * executed one after the other, then this technique is invaluable in
 * producing easy-to-read and easy-to-maintain code.
 */

// First up, a Promise that will delay for a second as follows:
export function delayedPromise(): Promise<void> {
    return new Promise<void>(
        (
            resolve: () => void,
            reject: () => void) => {
            setTimeout(() => {
                console.log(`2. calling resolve()`)
                resolve();
            }, 1000);
        }
    )
}

// Let's now examine how we can call this function using
// the async and await keywords, as follows:

// the compiler knows that the code inside this function will be
// executed asynchronously. Functions that are marked as `async`
// always return a Promise.
async function callDelayedPromise() {
    console.log(`1. before calling delayedPromise`);
    await delayedPromise();
    console.log(`3. after calling delayedPromise`)
}

callDelayedPromise();
