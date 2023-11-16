
/**
 * When using object properties in JavaScript, and in particular
 * nested properties, it is important to ensure that a nested property
 * exists before attempting to access it.
 */

// Consider the following JavaScript code:

let objectA = {
    nestedProperty: {
        name: "nestedPropertyName"
    }
}

function printNestedObject(obj) {
    console.log("obj.nestedProperty.name = "
        + obj.nestedProperty.name);
}

printNestedObject(objectA); // obj.nestedProperty.name = nestedPropertyName

// Let's now see what happens if we pass in an object that does
// not have the nested structure that we were expecting, as follows:
printNestedObject({});
// the entire program crashed while attempting to read the property on an object that is undefined.
/*
TypeError: Cannot read property 'name' of undefined
    at printNestedObject (javascript_samples.js:28:67)
    at Object.<anonymous> (javascript_samples.js:32:1)
 */

// It is best practice to check that the properties that you are expecting to
// find are actually there, before attempting to access them. This results in
// code that's similar to the following:

function printNestedObjectX(obj: any) {
    if (obj != undefined
        && obj.nestedProperty != undefined
        && obj.nestedProperty.name) {
        console.log(`name = ${obj.nestedProperty.name}`)
    } else {
        console.log(`name not found or undefined`);
    }
}

printNestedObjectX(null);
printNestedObjectX(undefined);
printNestedObjectX({
    aProperty: "another property"
});
printNestedObjectX({
    nestedProperty: {
        name: "nestedPropertyName"
    }
});

// Optional chaining : using the syntax

function printNestedOptionalChain(obj: any) {
    if (obj?.nestedProperty?.name) {
        console.log(`name = ${obj.nestedProperty.name}`)
    } else {
        console.log(`name not found or undefined`);
    }
}

printNestedOptionalChain(undefined);
printNestedOptionalChain({
    aProperty: "another property"
});
printNestedOptionalChain({
    nestedProperty: {
        name: null
    }
});
printNestedOptionalChain({
    nestedProperty: {
        name: "nestedPropertyName"
    }
});
