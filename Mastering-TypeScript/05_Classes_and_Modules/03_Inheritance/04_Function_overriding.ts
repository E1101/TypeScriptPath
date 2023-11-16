
/**
 * When a derived class defines a method that has the same name as
 * a base class method, this technique is known as function overriding.
 * The derived class can determine whether or not to call the implementation
 * of the function in the base class.
 */

class BaseClassWithFn {
    print(text: string) {
        console.log(`BaseClassWithFn.print() : ${text}`)
    }
}

class DerivedClassFnOverride extends BaseClassWithFn {
    print(text: string) {
        console.log(`DerivedClassFnOverride.print(${text})`);
    }
}

let derivedClassFnOverride = new DerivedClassFnOverride();
derivedClassFnOverride.print("test");

// We can, however, still call the base class's function
// implementation using the super keyword:

class DerivedClassFnCallthrough extends BaseClassWithFn {
    print(text: string) {
        super.print(`from DerivedClassFncallthrough : ${text}`);
    }
}

let derivedCallthrough = new DerivedClassFnCallthrough();
derivedCallthrough.print("text");
