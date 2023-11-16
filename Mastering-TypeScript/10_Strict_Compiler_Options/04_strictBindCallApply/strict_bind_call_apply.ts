class MyBoundClass {
    name: string = "defaultNameValue";

    printName(index: number, description: string) {
        console.log(`this.name : ${this.name}`);
        console.log(`index: ${index}`);
        console.log(`description : ${description}`);
    }
}

// We can now use this class as follows:
//

let testBoundClass = new MyBoundClass();
testBoundClass.printName(1, "testDescr");
/*
this.name : defaultNameValue
index: 1
description : testDescr
 */

// Using the JavaScript call function, however, we can modify the value of
// the this variable. Consider the following call to the printName function:
//

testBoundClass.printName.call(
    { name: `overridden name property` }, 1, `whoa !`
);
/*
this.name : overridden name property
index: 1
description : whoa !
 */

// The strictBindCallApply compiler option will check to ensure that the parameters
// used in the call function match the parameters as defined in the original function
// definition. As an example of this, we might attempt the following:
//

testBoundClass.printName.call(
    { name: `overridden name property` }, "test", `whoa !`
); // error TS2345: Argument of type '"test"' is not assignable to parameter of type 'number'.

// Here, we are using the apply function:

testBoundClass.printName.apply(
    { name: `apply override` },
    [1, 'whoa !!']
);

// The bind function follows the same sort of pattern:

let boundThis = {
    name: `boundThis`
};

let boundPrintNameFunction = testBoundClass.printName.bind(
    boundThis, 1, `testDescription`
);

boundPrintNameFunction();
