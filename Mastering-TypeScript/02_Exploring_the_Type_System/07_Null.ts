/**
 * Setting a value to null is intended to indicate that the variable
 * is known, but has no value, as opposed to undefined, where the
 * variable has not been defined in the current scope.
 */

function printValues(a: number | null) {
    console.log(`a = ${a}`);
}

printValues(1);
printValues(null);
