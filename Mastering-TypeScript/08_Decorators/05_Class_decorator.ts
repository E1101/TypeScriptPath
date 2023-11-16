
// We know that in order to define a class decorator,
// we must define a function that has a single parameter,
// which is of type Function. Let's take a closer look at
// this parameter, as follows:

// Note that the exact output of this code depends on the target
// version that we have specified, which is "es5". If we change
// this to "es6", we will generate slightly different output.

function classConstructorDec(constructor: Function) {
    console.log(`constructor : ${constructor}`); // constructor : function ClassWithConstructor(id) {}

    // using the prototype property to modify the class definition
    // itself and has added a property named testProperty.
    constructor.prototype.testProperty = "testProperty_value";
}

@classConstructorDec
class ClassWithConstructor {
    constructor(id: number) { }
}

// We can see the effect of this decorator modifying the class
// definition when we construct an instance of this class as follows:

let classInstance = new ClassWithConstructor(1);
// Note that we need to cast the classInstance variable to a type of `any`
// in order to access this property, as it does not appear on the initial
// class definition.
console.log(`classInstance.testProperty = ${(<any>classInstance).testProperty}`);
/*
classInstance.testProperty = testProperty_value
 */
