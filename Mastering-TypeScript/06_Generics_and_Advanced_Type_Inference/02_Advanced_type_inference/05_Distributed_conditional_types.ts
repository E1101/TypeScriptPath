
// When defining conditional types, instead of returning only a single
// type as part of our conditional statements, we can also return a number
// of types, or distributed conditional types. As an example of this,
// consider the following code:

type dateOrNumberOrString<T> =
    T extends Date ? Date :
    T extends number ? Date | number :
    T extends string ? Date | number | string :
    never;

// Based on the type of the first argument, the second
// argument can be one of a range of different types.

function compareValues<T extends string | number | Date | boolean>(
    input: T,
    compareTo: dateOrNumberOrString<T>
) {
    // do comparison
}

// This introduces some interesting logic when using this function as follows:
// - If the input parameter is of type Date, then the compareTo parameter may only be of type Date.
// - If the input parameter is of type number, then the compareTo parameter may be either a Date or a number.
// - If the input parameter is of type string, then the compareTo parameter may be either a Date or a number or a string.
// - If the input parameter is not of type Date or number or string, then do not allow this function to be called.

compareValues(new Date(), new Date());
compareValues(1, new Date());
compareValues(1, 2)
compareValues("test", new Date());
compareValues("test", 1);
compareValues("test", "test");
