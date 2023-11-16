

// is checking whether the type of T extends an array, that is, `T extends []`.
// What this means is that the type of U will be inferred from the type of the array itself.
type inferredTypeFromArray<T> = T extends (infer U)[] ? U : never;

function testInferredFromArray<T>(args: inferredTypeFromArray<T>) { }

testInferredFromArray<string[]>("test");
testInferredFromArray<number[]>(1);
