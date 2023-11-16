/**
 * JavaScript decorators are currently only at a draft or stage 2 level,
 * meaning that it may take a while before they are adopted into the
 * JavaScript standard.
 *
 * TypeScript, however, has supported decorators for quite some time, although
 * they are marked as experimental. Decorators have also become popular due to
 * their use within frameworks such as Angular, where they are primarily used
 * for dependency injection, or Vue, where they are used to inject functions
 * into a class definition.
 *
 * This means that we could craft some very fine decorator code, but changes
 * to the specifications could introduce breaking changes, forcing a significant
 * amount of rework.
 */

// Decorators are an experimental feature of the TypeScript compiler and
// are supported in ES5 and above. In order to use decorators, we need to
// enable a compile option in the tsconfig.json file. This option is named
// `experimentalDecorators`, and needs to be set to true, see `tsconfig.json`

// Here, we have a function named simpleDecorator, which has a single parameter
// named `constructor` of type Function, which logs a message to the console,
// indicating that it has been invoked. This function, due to the parameters
// that it defines, can be used as a class decorator function and can be
// applied to a class definition:

function simpleDecorator(constructor: Function) {
    console.log('simpleDecorator called');
}

@simpleDecorator
class ClassWithSimpleDecorator {

}

// Not having to wait for the creation of an instance of a class tells us
// that decorators are applied when a class is defined. Let's prove this
// theory by creating a few instances of this class, as follows:

let instance_1 = new ClassWithSimpleDecorator();
let instance_2 = new ClassWithSimpleDecorator();

console.log(`instance_1 : ${JSON.stringify(instance_1)}`);
console.log(`instance_2 : ${JSON.stringify(instance_2)}`);
/*
simpleDecorator called <-- log when class is defined happen only once and here

instance_1 : {}
instance_2 : {}
 */
