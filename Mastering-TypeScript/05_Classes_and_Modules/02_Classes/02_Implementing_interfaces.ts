
// Here, we are using the TypeScript keyword implements to
// state that both ClassA and ClassB implement the IPrint
// interface, and are therefore usable by our printClass function.

class ClassA implements IPrint {
    print(): void {
        console.log(`ClassA.print() called.`)
    };
}

class ClassB implements IPrint {
    print(): void {
        console.log(`ClassB.print() called.`)
    };
}

interface IPrint {
    print(): void;
}

function printClass(a: IPrint) {
    a.print();
}

let classA = new ClassA();
let classB = new ClassB();

printClass(classA);
printClass(classB);

// Note that TypeScript's duck typing rules will ensure that a
// particular class has the correct shape when used, even if it
// does not implement the interface as described.

class ClassC {
    print(): void {
        console.log(`ClassC.print() called.`)
    };
}

let classC = new ClassC();
printClass(classC);
