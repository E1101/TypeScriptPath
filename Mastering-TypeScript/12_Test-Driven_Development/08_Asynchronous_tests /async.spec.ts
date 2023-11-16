

// We might write a test for this class as follows:
//
describe("failing async tests", () => {
    xit("should wait for callback to complete", () => {
        let mockAsync = new MockAsync();

        // This function takes a callback function named complete as
        // its only parameter, and then invokes it after 1 second.
        console.log(`1. calling executeSlowFunction`);
        let returnedValue !: string;
        mockAsync.executeSlowFunction((value: string) => {
            console.log(`2. complete called`);
            returnedValue = value;
        });

        // Our test is also failing, as the expected value of the returnedValue
        // variable should be "completed", but is, in fact, undefined.
        // What is causing this test to fail is the fact that the test itself is
        // not waiting for 1 second for the executeSlowFunction function to call
        // the complete callback.
        console.log(`3. checking return value`);
        expect(returnedValue).toBe("completed")
    });
});

// Jest provides a method named `done` to signify that the test run should
// wait for an asynchronous call to complete. The done function can be
// passed in as an argument in any beforeAll, beforeEach, or it function,
// and will allow our asynchronous test to wait for the done function to
// be called before continuing.
describe("async test with done ", () => {
    // to hold the value that is returned by our asynchronous callback
    let returnedValue!: string;

    beforeEach((done: jest.DoneCallback) => {
        let mockAsync = new MockAsync();
        console.log(`1. calling executeSlowFunction`);

        mockAsync.executeSlowFunction((value: string) => {
            console.log(`2. executeSlowFunction returned`);
            returnedValue = value;

            // When using done, the beforeEach function will wait until the done
            // function is actually called before continuing with the test run.
            done();
        })
    });

    it("should return value after 1 second", () => {
        console.log(`3. checking returnedValue`);
        expect(returnedValue).toEqual("completed");
    })
});
/*
Our test now succeeds with the following messages being logged to the console:

  console.log
    1. calling executeSlowFunction
    2. executeSlowFunction returned
    3. checking returnedValue
 */

class MockAsync {
    executeSlowFunction(complete: (value: string) => void) {
        setTimeout(() => {
            complete(`completed`);
        }, 1000);
    }
}
