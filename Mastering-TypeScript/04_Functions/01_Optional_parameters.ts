
/**
 * Note that any optional parameters must be listed last in the
 * parameter list of the function definition. You can have as
 * many optional parameters as you like, as long as non-optional
 * parameters precede the optional parameters.
 */

function concatValues(a: string, b?: string) {
    console.log(`a + b = ${a + b}`);
}

concatValues("first", "second");
concatValues("third"); // a + b = thirdundefined
