
// A decorator factory function is created by wrapping the
// decorator function itself within a function, as follows:

function decoratorFactory(name: string) {
    // class decorator
    return (constructor: Function) => {
        console.log(`decorator function called with : ${name}`);
    }
}

// We can now use this decorator factory as follows:

@decoratorFactory('testName')
class ClassWithDecoratorFactory {

}
