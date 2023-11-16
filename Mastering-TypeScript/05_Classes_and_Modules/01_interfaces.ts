
/**
 * Interfaces provide us with a mechanism to define what properties
 * an object must implement and is, therefore, a way for us to define
 * a custom type. By defining an interface, we are describing the
 * properties and functions that an object is expected to have in
 * order to be used by our code.
 *
 * An interface describes a custom type and can include both properties and functions.
 *
 * Interfaces do not generate any JavaScript code. This means that interfaces
 * are a construct only used in the TypeScript compilation step and language
 * services, and are there to ensure type safety.
 */

// To illustrate these concepts, consider the following code:

interface IIdName {
    id: number;
    name: string;
}

let idObject: IIdName = {
    id: 2,
    name: "this is a name"
}

/**
 * Optional properties
 */

interface IOptional {
    id: number;
    name?: string;
}

let optionalId: IOptional = {
    id: 1
}

let optionalIdName: IOptional = {
    id: 2,
    name: "optional name"
}

/**
 * Weak types
 *
 * When we define an interface where all of its properties are
 * optional, this is considered to be a weak type. In other words,
 * we have defined an interface, but none of the properties of the
 * interface are mandatory.
 */

interface IWeakType {
    id?: number,
    name?: string
}

// This code generates the error:
let weakTypeNoOverlap: IWeakType = {
    description: "a description",
    name: "a name"
}

/**
 * Interfaces extending classes
 */

// an interface can derive from a class definition,
// as can be seen in the following example:

class BaseInterfaceClass {
    id: number = 0;
    print() {
        console.log(`this.id = ${this.id}`);
    }
}

interface IBaseInterfaceClassExt extends BaseInterfaceClass {
    setId(_id: number): void;
}

class ImplementsExt implements IBaseInterfaceClassExt {
    id = 0;

    print(): void {
        // Implement
    }

    setId(id: number): void {
        this.id = id;
    }
}
