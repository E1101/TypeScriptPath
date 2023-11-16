
// Consider the code below. This looks like fairly simple,
// understandable code, but it will generate the following error:
//   error TS2454: Variable 'globalString' is used before being assigned

var globalString: string;
setGlobalString("this string is set");
console.log(`globalString = ${globalString}`);
function setGlobalString(value: string) {
    globalString = value;
}
/*
Unfortunately, the compiler does not quite understand that by
invoking the setGlobalString function, the globalString variable
will actually have been assigned a value before we attempt to log
it to the console.
 */

// To cater for this scenario, as the code that we have written will
// work correctly, we can use the definite assignment assertion syntax,
// which is to append an exclamation mark (!) after the variable name
// that the compiler is complaining about.

// we have used the definite assignment assertion operator on the
// definition of the variable itself. This will also remove the
// compilation error.
let globalStringX!: string;
setGlobalStringX("this string is set");
// This will tell the compiler that we are overriding its
// type checking rules, and are willing to let it use the
// globalString variable, even though it thinks it has not
// been assigned.
console.log(`globalString = ${globalString!}`);
function setGlobalStringX(value: string) {
    globalStringX = value;
}

/**
 * It certainly would be better to refactor our code so that we avoid these scenarios.
 *
 * The only place that the author has found where it makes sense to use definite
 * assignment is when writing unit tests. In a unit test scenario, we may be testing
 * the boundaries of a specific code path, and are purposefully bending the rules of
 * TypeScript in order to write a particular test.
 */
