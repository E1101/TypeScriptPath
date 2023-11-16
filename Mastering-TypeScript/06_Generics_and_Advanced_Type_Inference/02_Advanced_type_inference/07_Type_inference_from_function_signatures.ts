
/**
 * In the same way that we can define inferred types based on object
 * properties, we can also infer types based on function signatures.
 * These inferred types can be inferred from either the function arguments,
 * or from the function return type.
 */

type inferredFromFnParam<T> =
    T extends (a: infer U) => void ? U : never;

function testInferredFromFnParam<T>(
    arg: inferredFromFnParam<T>
) { }

testInferredFromFnParam<(a: number) => void>(1);
testInferredFromFnParam<(a: string) => void>("test");

// In a similar manner, we can also infer a type from the
// return type of a function, as seen in the following example:

type inferredFromFnReturnType<T> =
    T extends (a: string) => infer U ? U : never;

function testInferredFromReturnType<T>(
    arg: inferredFromFnReturnType<T>
) { }

testInferredFromReturnType<(a: string) => number>(1);
testInferredFromReturnType<(a: string) => boolean>(false);
