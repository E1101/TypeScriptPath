
/**
 When working with an application that has a number of tests written for it,
 we often want to run only a specific test, or a specific group of tests.
 This act is known as forcing tests, as we are forcing the entire test suite
 to only run specific tests.
 */

// This can be done in two ways, as follows:

test('should be false', () => {
    expect(false).toBeFalsy();
});

// Groups of tests can also be forced by prefixing the letter `f`
fdescribe("a group of tests", () => {
    // force the test named "first test" to be run.
    test.only("first test", () => {
        expect("string value").toEqual("string value")
    })
    // force the test named "second test" to be run.
    fit("second test", () => {
        expect("abc").not.toEqual("def");
    })
});

fdescribe("a group of tests", () => {
    test("first test", () => {
        expect("string value").toEqual("string value")
    })
    // To skip a test, we can prefix the test with the letter `x`
    xit("second test", () => {
        expect("abc").not.toEqual("def");
    })
});
