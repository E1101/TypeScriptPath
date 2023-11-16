
// this code will generate the following error:
//   error TS2365: Operator '+' cannot be applied to types 'string | number' and 'string | number'
//
// What the compiler is telling us here is that it cannot tell what type
// it should use when it attempts to add arg1 to arg2. Is it supposed to
// add a string to a number, or a string to a string?

function addWithUnion(
    arg1: string | number,
    arg2: string | number
) {
    return arg1 + arg2;
}

// This is where type guards come in.
// A type guard is an expression that performs a check on
// our type, and then guarantees that type within its scope:

function addWithTypeGuard(
    arg1: string | number,
    arg2: string | number
) {
    if (typeof arg1 === "string") {
        // arg 1 is treated as a string
        console.log(`arg1 is of type string`);
        return arg1 + arg2;
    }

    if (typeof arg1 === "number" && typeof arg2 === "number") {
        // both are numbers
        console.log(`arg1 and arg2 are numbers`);
        return arg1 + arg2;
    }

    console.log(`default return treat both as strings`)
    return arg1.toString() + arg2.toString();
}

console.log(` "1", "2" = ${addWithTypeGuard("1", "2")}`);
console.log(`  1 ,  2  = ${addWithTypeGuard(1, 2)}`);
console.log(`  1 , "2" = ${addWithTypeGuard(1, "2")}`);
