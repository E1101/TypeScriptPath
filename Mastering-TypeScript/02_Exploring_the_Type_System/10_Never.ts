

// Here, we have a function named alwaysThrows,
// which will, according to its logic, always
// throw an error.
// This is where the never type can be used to guard
// against possible logic errors in our code.
function alwaysThrows(): never {
    throw new Error("this will always throw");

    // clearly telling us that the function, which returns a
    // type of never, is attempting to return the value of -1.
    // return -1;
}

/**
 * Never and switch
 *
 * Using the `never` type here safeguards our code so
 * that we can pick up these errors earlier.
 */

enum AnEnum {
    FIRST,
    SECOND
}

function getEnumValue(enumValue: AnEnum): string {
    switch (enumValue) {
        case AnEnum.FIRST: return "First Case";
        // A) when this line of code is not exists
        case AnEnum.SECOND: return "Second Case";
    }

    // (B) Compiler notify us that one case is missing:
    // The trick in this code is that we assign the value of
    // the incoming parameter, enumValue, which is of type AnEnum,
    // to the returnValue variable, which is of type never.
    // This statement is generating the error.
    let returnValue: never = enumValue;

    return returnValue;
}
