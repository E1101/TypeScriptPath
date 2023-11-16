
// One interface can form the base interface
// for one or many other interfaces:

interface IBase {
    id: number;
}

interface IDerivedFromBase extends IBase {
    name: string;
}

class IdNameClass implements IDerivedFromBase {
    id: number = 0;
    name: string = "nameString";
}

// Interfaces also support multiple inheritance.
// Consider the following code:

interface IBaseStringOrNumber {
    id: string | number;
}
interface IDerivedFromBaseNumber extends IBaseStringOrNumber {
    id: number;
}

interface IMultiple
    extends IDerivedFromBase,
    IDerivedFromBaseNumber {
    description: string;
}

let multipleObject: IMultiple = {
    id: 1, // should be a number
    name: "myName",
    description: "myDescription"
};
