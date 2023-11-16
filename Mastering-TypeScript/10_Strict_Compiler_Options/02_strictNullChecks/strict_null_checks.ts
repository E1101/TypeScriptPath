let a: number;
let b = a;
// error TS2454: Variable 'a' is used before being assigned

// -----------------------

// The other way to fix this error is to let the compiler
// know that we are aware that the variable may be unassigned
// at the time of usage, as follows:
let a: number | undefined;
let b = a;

console.log(b);
