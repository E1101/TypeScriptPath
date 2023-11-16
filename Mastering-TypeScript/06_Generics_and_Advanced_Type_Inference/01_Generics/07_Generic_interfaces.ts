
/**
 * In the same manner that functions and classes can use
 * generics, we are also able to create interfaces that
 * use generic syntax.
 */

interface IPrint {
    print(): void;
}

interface ILogInterface<T extends IPrint> {
    logToConsole(iPrintObj: T): void;
}

class LogClass<T extends IPrint> implements ILogInterface<T> {
    logToConsole(iPrintObj: T): void {
        iPrintObj.print();
    }
}

let printObject: IPrint = {
    print() { console.log(`printObject.print() called`) }
}

let logClass = new LogClass();
logClass.logToConsole(printObject);
