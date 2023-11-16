
/**
 When testing our code, we often have the situation where we want to
 ensure that a particular function was called, or that it was called
 with the correct parameters.
 */

describe("spies and mocks", () => {

    // test that the executeCallback method actually invokes
    // the callback function that we passed in as an argument.
    it("should mock callback function", () => {
        let mock = jest.fn();
        let myCallbackClass = new MyCallbackClass();

        myCallbackClass.executeCallback('test', mock);

        expect(mock).toHaveBeenCalled();
    });

    // the function that was passed in as an argument is
    // called with the correct arguments.
    it("should call testFunction with argument using mock", () => {
        let mock = jest.fn();
        let myCallbackClass = new MyCallbackClass();

        myCallbackClass.executeCallback("argument_1", mock);

        expect(mock).toHaveBeenCalledWith("argument_1");
    });

    // Jest also provides us with the ability to check whether
    // a particular class method has been called.
    it("should call testSpiedFunction", () => {
        let mySpiedClass = new MySpiedClass();
        const testFunctionSpy = jest.spyOn(mySpiedClass, 'testSpiedFunction');

        mySpiedClass.testFunction();

        expect(testFunctionSpy).toHaveBeenCalled();
    });

    // we can also provide a mock function implementation on a spy.
    it("should call mock of testFunction", () => {
        let mySpiedClass = new MySpiedClass();
        // Creating a spy, however, will not prevent the body of the method being run.
        // If we are wanting to override the body of the method, and not allow the body
        // of the method to be invoked, then we need to provide a mock implementation.
        // As an example, let's assume that a method will connect to a database, run a query,
        // and return results. In this instance, we do not want the body of the method to be run,
        // as we do not have a database instance to connect to. We want to mock out any interactions
        // with a database completely. In these cases, we will need to provide a mock implementation.
        const testFunctionSpy = jest.spyOn(mySpiedClass, 'testFunction')
            .mockImplementation(() => {
                console.log(`mockImplementation called`);
            });

        mySpiedClass.testFunction();

        expect(testFunctionSpy).toHaveBeenCalled();
    });

    // When we wish to mock out the return value of a function,
    // we can easily just return a value from a mock implementation.
    // Returning values from mock implementations means that we can
    // simulate any sort of external interaction with other systems
    // within our tests. We can mock out calls to a database, or calls
    // to a REST endpoint, and inject standard values that we can test against.
    it("should return value from mocked", () => {
        let myMockedClass = new MyMockedClass();
        jest.spyOn(myMockedClass, 'functionToBeMocked')
            .mockImplementation((): number => {
                return 10;
            });

        expect(myMockedClass.functionToBeMocked()).toEqual(10);
    });
});

class MyCallbackClass {
    executeCallback(value: string, callbackFn: (value: string) => null) {
        console.log(`executeCallback invoking callbackFn`);
        callbackFn(value);
    }
}

class MySpiedClass {
    testFunction() {
        console.log(`testFunction() called`);
        this.testSpiedFunction();
    }

    testSpiedFunction() {
        console.log(`testSpiedFunction called`)
    }
}

class MyMockedClass {
    functionToBeMocked(): number {
        return 5;
    }
}
