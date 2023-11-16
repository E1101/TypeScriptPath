
/**
 If an asynchronous function is using Promises, then we can use the
 async await syntax to run tests, in the same way that we would normally.
 */

describe("async test", () => {
    // Note how our test function is prefixed with the async keyword.
    // Using async await syntax within a unit test is exactly the same as
    // using it in normal code. As long as we mark the test function with
    // the async keyword, the test will pause when it encounters the await
    // keyword and continue when the asynchronous code completes.
    it("should wait 1 second for promise to resolve", async () => {
        let asyncWithPromise = new AsyncWithPromise();

        console.log(`1. calling delayedPromise`);
        let returnValue = await asyncWithPromise.delayedPromise();

        console.log(`3. after await`);
        expect(returnValue).toEqual("success");
    })
});

class AsyncWithPromise {
    delayedPromise(): Promise<string> {
        return new Promise<string>((resolve: (str: string) => void, reject: (str: string) => void) => {
            setTimeout(() => {
                console.log(`2. returning success`);
                resolve("success");
            }, 1000)
        })
    }
}
