
/**
 * Classes can mark both properties and functions with the
 * protected keyword. If a property is marked as protected,
 * then it is not accessible outside of the class itself,
 * similar to the behavior of the private keyword. It is,
 * however, accessible to derived classes, which is different
 * to private variables that are not accessible to derived classes.
 */

class BaseClassProtected {
    protected id: number;
    private name: string = "";

    constructor(id: number) {
        this.id = id;
    }
}

class AccessProtected extends BaseClassProtected {
    constructor(id: number) {
        super(id);
        console.log(`base.id = ${this.id}`);

        // error TS2341: Property 'name' is private and only accessible within class 'BaseClassProtected'
        console.log(`base.name = ${this.name}`);
    }
}
