
// Jest uses what are known as matchers to match the
// expected values in a test to the received values.
// Let's have a quick look at some of these matchers, as follows:

describe("test matchers", () => {
    it("should match with toBe", () => {
        expect(1).toBe(1);
    });

    // The interesting thing about this message is that the toBe matcher is
    // using Object.is equality. This means that the following test will pass:
    it("should match with toBe using assignment", () => {
        let objA = { id: 1 };
        let objB = objA;
        expect(objA).toBe(objB);
    });

    // Here, objA and objB have the same shape, and they have the
    // same values, but they are not the same object in memory.
    // This test will produce the following test failure:
    it("should match with toBe", () => {
        let objA = { id: 1 };
        let objB = { id: 1 };
        expect(objA).toBe(objB);
    });

    // Here, our test passes, as the toEqual matcher will correctly
    // interpret the shape and values of both objects as equal.
    it("should match with toEqual", () => {
        let objA = { id: 1 };
        let objB = { id: 1 };
        expect(objA).toEqual(objB);
    });

    it("should contain a value", () => {
        expect("abcde").toContain("cde");
    });

    it("should contain an array item", () => {
        let objArray = [
            { id: 1 },
            { id: 2 }
        ];
        expect(objArray).toContainEqual({ id: 2 });
    });

    it("should not contain a value", () => {
        expect("abcde").not.toContain("123");
    });

    it("should throw an error", () => {
        expect(() => {
            throw new Error("this is an error")
        }).toThrowError(new Error("this is an error"));
    });

});
