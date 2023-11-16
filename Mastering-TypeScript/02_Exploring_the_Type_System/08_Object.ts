
let structuredObject: object = {
    name: "myObject",
    properties: {
        id: 1,
        type: "AnObject"
    }
}

function printObjectType(a: object) {
    console.log(`a: ${JSON.stringify(a)}`);
}

printObjectType(structuredObject);

// This code will produce an error, as follows:
//   error TS2345: Argument of type '"this is a string"' is not assignable to parameter of type 'object'.
printObjectType("this is a string");
