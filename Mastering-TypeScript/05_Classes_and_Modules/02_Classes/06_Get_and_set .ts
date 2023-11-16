
/**
 * ECMAScript 5 introduced the concept of property accessors,
 * or get and set functions. A property accessor is simply a
 * function that is called when a user of our class gets the
 * value of a property, or sets its value.
 */

class ClassWithAccessors {
    private _id: number = 0;

    get id(): number {
        console.log(`get id property`);
        return this._id;
    }

    set id(value: number) {
        console.log(`set id property`);
        this._id = value;
    }
}

// Note that the get function and the set function are both named id.
// We can now use this class as follows:

let classWithAccessors = new ClassWithAccessors();

classWithAccessors.id = 10;
console.log(`classWithAccessors.id = ${classWithAccessors.id}`);
/*
set id property
get id property
classWithAccessors.id = 10
 */
