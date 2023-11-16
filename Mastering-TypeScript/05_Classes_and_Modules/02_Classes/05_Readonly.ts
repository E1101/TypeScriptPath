/**
 * `readonly` properties are only allowed to set
 *  within the constructor function.
 *
 *  Note that readonly can also be used within interface definitions,
 *  and that it is also excluded from the generated JavaScript.
 */

class ClassWithReadonly {
    readonly name: string = "test";

    constructor(name: string) {
        this.name = name;
    }

    // This code will generate the following error:
    //   error TS2540: Cannot assign to 'name' because it is a read-only property.
    setNameValue(name: string) {
        this.name = name;
    }
}
