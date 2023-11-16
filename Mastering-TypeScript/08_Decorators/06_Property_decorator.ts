
// Property decorators have two parameters, which are
// the class prototype itself and the property name:
function propertyDec(target: any, propertyName: string) {
    // When we use it on class property argument that was passed to our
    // decorator is an object, as we would expect, because it is, in fact,
    // a class definition.
    console.log(`target: ${target}`); // target: [object Object]
    console.log(`target.constructor: ${target.constructor}`); // target.constructor: function ClassWithPropertyDec() {}

    // When we use it on Static Property of a class, we can see
    // that the target argument is a function, so:
    if (typeof (target) === 'function') {
        console.log(`class name: ${target.name}`); // class name : StaticClassWithPropertyDec
    } else {
        console.log(`class name: ${target.constructor.name}`); // class name : ClassWithPropertyDec
    }

    console.log(`propertyName : ${propertyName}`);
}

class ClassWithPropertyDec {
    @propertyDec
    nameProperty: string | undefined;
}

/**
 * static property decorators
 */

class StaticClassWithPropertyDec {
    @propertyDec
    static staticProperty: string;
}
