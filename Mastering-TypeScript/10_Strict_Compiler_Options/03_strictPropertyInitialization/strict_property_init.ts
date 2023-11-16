/**
 The `strictPropertyInitialization` compiler option will check that
 all properties within a class have been initialized correctly.
 */

// Consider the following class definition:
// Remember that class properties are public by default, and this
// means that when we create an instance of this class, we have
// access to them. This error is warning us that we may inadvertently
// use these properties while they are still undefined.
class WithoutInit {
    a: number;
    b: string;
}
/*
error TS2564: Property 'a' has no initializer and is not definitely assigned in the constructor
error TS2564: Property 'b' has no initializer and is not definitely assigned in the constructor
 */

// we can use a type union, as we did with `strictNullChecks`, as follows:
//

class WithoutInit2 {
    a: number | undefined;
    b: string | undefined;
}

// The second way that we can fix these errors is to use the definite
// assignment assertion operator, as follows:
// Here, we have added the ! operator after each property, which tells
// the compiler that we are aware that these properties have not been initialized.
//

class WithoutInit3 {
    a!: number;
    b!: string;
}

// The third way to fix these errors is to assign a value to each of these properties, as follows:
//
class WithoutInit4 {
    a: number = 1;
    b: string = "test";
}

// The fourth method of fixing these errors is to use a constructor, as follows:
//

class WithoutInit5 {
    a: number;
    b: string;
    constructor(a: number) {
        this.a = a;
        this.b = "test";
    }
}
