
// We can also specify more than one type to be
// used in a generic function, as follows:

function usingTwoTypes<A, B>(first: A, second: B) {
}

usingTwoTypes<number, string>(1, "test");
usingTwoTypes(1, "test");
usingTwoTypes<boolean, boolean>(true, false);
// both types are inferred as strings:
usingTwoTypes("first", "second");
