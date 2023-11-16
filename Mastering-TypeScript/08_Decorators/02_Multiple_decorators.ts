
function simpleDecorator(constructor: Function) {
    console.log('simpleDecorator called');
}

function secondDecorator(constructor: Function) {
    console.log(`secondDecorator called`);
}

// Here, we can see that both of the decorators have logged a
// message to the console. What is interesting, however, is
// the order in which they are called.

@simpleDecorator
@secondDecorator
class ClassWithMultipleDecorators {

}
/*
secondDecorator called
simpleDecorator called
 */
