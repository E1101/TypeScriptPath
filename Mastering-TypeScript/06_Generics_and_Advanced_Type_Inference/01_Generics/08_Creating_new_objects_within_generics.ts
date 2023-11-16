
// From time to time, generic classes may need to create an
// object of the type that was passed in as the generic type T.
// Consider the following code:

class ClassA { }
class ClassB { }

function createClassInstanceWrong<T>(arg1: T): T {
    return new arg1(); // error
}

// According to the TypeScript documentation, in order for a generic
// class to be able to construct an object of type T, we need to refer
// to type T by its constructor function. Our createClassInstance function
// therefore needs to be rewritten as follows:
// In other words, the arg parameter is a type that overloads the new function,
// and returns an instance of T.
function createClassInstance<T>(arg1: { new(): T }): T {
    return new arg1();
}

let classAInstance = createClassInstance(ClassA);
console.log(`${JSON.stringify(classAInstance)}`);
