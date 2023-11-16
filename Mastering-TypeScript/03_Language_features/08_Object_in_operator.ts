
// JavaScript allows us to interrogate an object and see if
// it has a property using the in operator. Let's explore
// this operator with the following interfaces:

interface IIdName {
    id: number;
    name: string;
}

interface IDescrValue {
    descr: string;
    value: number;
}

function printNameOrValue(obj: IIdName | IDescrValue): void {
    if ('id' in obj) {
        console.log(`obj.name : ${obj.name}`);
    }

    if ('descr' in obj) {
        console.log(`obj.value : ${obj.value}`);
    }
}

printNameOrValue({
    id: 1,
    name: "nameValue"
});

printNameOrValue({
    descr: "description",
    value: 2
});
