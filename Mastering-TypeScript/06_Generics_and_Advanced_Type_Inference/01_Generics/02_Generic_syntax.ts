
/**
 * Here, we have a function named printGeneric that is using generic syntax and
 * specifying that its type substitute name is named T by appending <T> to the
 * function name. This function takes a single parameter named value, of the type T.
 */

function printGeneric<T>(value: T) {
    console.log(`typeof T is : ${typeof value}`);
    console.log(`value is : ${value}`)
}

// Here, we are calling the printGeneric function with a wide range of values:
// If we do not explicitly specify what type the generic function should use,
// by omitting the <type> specifier, the compiler will infer the type to be
// used from the type of each argument.
printGeneric(1);
printGeneric("test");
printGeneric(true);
printGeneric(() => { });
printGeneric({ id: 1 });

// Here, we are using type casting notation, that is, the angled
// brackets <type>, to explicitly specify what type we are calling
// this function with:
printGeneric<string>("test");

// Here, we are explicitly specifying that the function will be called with
// a type <string>, but our single argument is actually of type number.
// This code will generate the following error:
//    error TS2345: Argument of type '1' is not assignable to parameter of type 'string'
printGeneric<string>(1);
