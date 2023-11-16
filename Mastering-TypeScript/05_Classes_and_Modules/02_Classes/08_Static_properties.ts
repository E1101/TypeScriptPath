
/**
 * If a class property has been marked as static,
 * then there will only be a single instance of
 * this property throughout the code base.
 */

class StaticProperty {
    static count = 0;
    updateCount() {
        StaticProperty.count++;
    }
}

let firstInstance = new StaticProperty();
let secondInstance = new StaticProperty();

firstInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`); // StaticProperty.count = 1

secondInstance.updateCount();
console.log(`StaticProperty.count = ${StaticProperty.count}`); // StaticProperty.count = 2
