
/**
 * In most instances, we will want to limit the type of T in
 * order to only allow a specific set of types to be used within
 * our generic code.
 */

// Here, we have defined a class named `Concatenator` that is using
// generic syntax, and is also constraining the type of T to be either
// an array of strings or an array of numbers, via the extends keyword.
class Concatenator<T extends Array<string> | Array<number>> {
    public concatenateArray(items: T): string {
        let returnString = "";
        for (let i = 0; i < items.length; i++) {
            returnString += i > 0 ? "," : "";
            returnString += items[i].toString();
        }

        return returnString;
    }
}

let concator = new Concatenator();

let concatResult = concator.concatenateArray([
    "first", "second", "third"
]);
console.log(`concatResult = ${concatResult}`);

concatResult = concator.concatenateArray([
    1000, 2000, 3000
]);
console.log(`concatResult = ${concatResult}`);

concatResult = concator.concatenateArray([
    true, false, true
]);
// ---------------------------------------------------------------------------------------------------------------------

interface IName {
    name: string;
    print(): void;
}

interface INameDescr extends IName {
    descr: String;
}

class Printer<T extends INameDescr> {
    print(items: Array<T>) {
        for (let item of items) {
            console.log(`array item : ${item.print}`)
        }
    }
}
