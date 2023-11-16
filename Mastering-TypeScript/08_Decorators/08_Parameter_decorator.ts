
/**
 * Parameter decorators can be used to decorate a specific
 * parameter within a method of a class.
 */

// The first parameter is named `target`, and is of type `any`, and will contain the
// object definition for the class itself. The second parameter is named `methodName`,
// and is a string that will contain the name of the method that has been called.
// The third parameter is named `parameterIndex`, and will contain the index of the
// parameter that has been decorated, which is of type `number`.

function parameterDec(
    target: any,
    methodName: string,
    parameterIndex: number
) {
    console.log(`target: ${target}`);
    console.log(`methodName : ${methodName}`);
    console.log(`parameterIndex : ${parameterIndex}`);
}

class ClassWithParamDec {
    print(@parameterDec value: string) {
    }
}
// Note that we are not given any information by the JavaScript runtime about the
// parameter that we are decorating. We are not told what type it is, or what name
// the parameter is. All we are told is that the parameter is at index 0 of the
// method named print.

/*
target: [object Object]
methodName : print
parameterIndex : 0
 */

// 
// decorator metadata
//

function metadataParameterDec(
    target: any,
    methodName: string,
    parameterIndex: number
) { }

class ClassWithMetadata {
    print(
        @metadataParameterDec id: number, name: string
    ) { }
}
