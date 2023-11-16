
/**
 * When using inheritance, it is quite common for a base class and
 * a derived class to implement the same method. This is seen most
 * often with class constructors. If a derived class has a constructor,
 * then this constructor must call the base class constructor using the
 * super keyword, or TypeScript will generate an error.
 *
 * Note that even if a base class does not define a constructor function,
 * if the derived class does define a constructor function, then the derived
 * class must call the super function with no arguments.
 */

class BaseClassWithCtor {
    private id: number;

    constructor(id: number) {
        this.id = id;
    }
}

class DerivedClassWithCtor extends BaseClassWithCtor {
    private name: string;

    constructor(id: number, name: string) {
        super(id);
        this.name = name;
    }
}

let derivedClassInstance = new DerivedClassWithCtor(1, "test");
