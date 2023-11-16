
class ClassWithPublicProperty {
    public id: number | undefined;
}

let publicAccess = new ClassWithPublicProperty();
publicAccess.id = 10;

class ClassWithPrivateProperty {
    private id: number;
    constructor(id: number) {
        this.id = id;
    }
}

let privateAccess = new ClassWithPrivateProperty(10);
privateAccess.id = 20;

// These access modifiers, however, will not appear in the JavaScript that is
// generated from our code. The compiler will, in fact, remove any of these
// constraints when generating JavaScript.
privateAccess["id"] = 20;

// An experimental proposal to the ECMAScript standard introduces the concept
// of a private field, by using the hash ( # ) symbol before a property name.
// This means that if we are targeting a runtime that supports it, such as
// Node v12, we can write a JavaScript class as follows:
// JavaScript private fields, however, will still translate into the generated JavaScript.
class ClassES6Private {
    #id: number;
    constructor(id: number) {
        this.#id = id;
    }
}

let es6PrivateClass = new ClassES6Private(10);
es6PrivateClass.#id = 20;

// TypeScript also introduces a shorthand version for
// access modifiers that can be applied to parameters in
// a constructor function:
class ClassWithCtorMods {
    constructor(public id: number, private name: string) {}
}

let myClassMod = new ClassWithCtorMods(1, "test");
console.log(`myClassMod.id = ${myClassMod.id}`);
console.log(`myClassMod.name = ${myClassMod.name}`);
