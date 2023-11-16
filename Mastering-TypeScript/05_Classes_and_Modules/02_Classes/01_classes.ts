
/**
 * A class is the definition of an object, what data it holds,
 * and what operations it can perform. Classes and interfaces
 * form the cornerstone of object-oriented programming.
 */

// Let's take a look at a simple class definition, as follows:

class SimpleClass {
    id: number | undefined;
    print(): void {
        console.log(`SimpleClass.id = ${this.id}`);
    }
}

let mySimpleClass = new SimpleClass();
mySimpleClass.id = 2020;
mySimpleClass.print();
