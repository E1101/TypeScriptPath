
// There is a further, and more esoteric version of the conditional
// type syntax, where we are able to infer a new type as part of a
// conditional type statement. The simplest form of these inferred
// types can best be explained by an example, as follows:

type inferFromPropertyType<T> =
    // check whether the type of T extends an object that has a property named `id`
    // then we will return the type of the `id` property itself.
    T extends { id: infer U } ? U : never;

function testInferFromPropertyType<T>(
    arg: inferFromPropertyType<T>
) { }

testInferFromPropertyType<{ id: string }>("test");
testInferFromPropertyType<{ id: number }>(1);
