test('should be false', () => {
    expect(false).toBeFalsy();
});

// Within a test specification file, we may want to group
// our tests into logical sets.
describe("a group of tests", () => {
    // These two function names are synonymous, as the `it` function is
    // the default Jasmine function for describing tests, and the `test`
    // function is Jest's default.
    test("first test", () => {
        expect("string value").toEqual("string value")
    });

    it("second test", () => {
        expect("abc").not.toEqual("def");
    })
});
