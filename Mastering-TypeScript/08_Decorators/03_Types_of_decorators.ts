
// Decorators, as mentioned earlier, are functions that are invoked by
// the JavaScript runtime when a class is defined. Depending on what type
// of decorator is used, these decorator functions will be invoked with
// different arguments. Let's take a quick look at the types of decorators,
// which are:

function classDecorator(
    constructor: Function
) { }

function propertyDecorator(
    target: any,
    propertyKey: string
) { }

function methodDecorator(
    target: any,
    methodName: string,
    descriptor?: PropertyDescriptor
) { }

function parameterDecorator(
    target: any,
    methodName: string,
    parameterIndex: number
) { }

// Let's now take a look at how we would use each of these decorators as follows:

@classDecorator
class ClassWithAllTypesOfDecorators {
    @propertyDecorator
    id: number = 1;

    @methodDecorator
    print() { }

    setId(@parameterDecorator id: number) { }
}
