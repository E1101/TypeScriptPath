
/**
 * An abstract class is a class that cannot be instantiated.
 * In other words, it is a class that is designed to be derived from.
 * The purpose of abstract classes is generally to provide a set of
 * basic properties or functions that are shared across a group of
 * similar classes. Abstract classes are marked with the `abstract` keyword.
 */

abstract class EmployeeBase {
    public id: number;
    public name: string;

    // This means that we will need to provide an implementation
    // of this method in any derived class.
    abstract doWork(): void;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class OfficeWorker extends EmployeeBase {
    // provided an implementation of the doWork abstract method:
    doWork() {
        console.log(`${this.name} : doing work`);
    }
}

// This method calls the doWork method, which is defined
// on the OfficeWorker base class, and therefore we need
// to use the super keyword to access it. It then loops
// through each of the elements in the employees array,
// and calls the doWork method on each of these classes.

class OfficeManager extends OfficeWorker {
    public employees: OfficeWorker[] = [];

    manageEmployees() {
        super.doWork();
        for (let employee of this.employees) {
            employee.doWork();
        }
    }
}

let joeBlogg = new OfficeWorker(1, "Joe");
let jillBlogg = new OfficeWorker(2, "Jill")
let jackManager = new OfficeManager(3, "Jack");

jackManager.employees.push(joeBlogg);
jackManager.employees.push(jillBlogg);

jackManager.manageEmployees();
