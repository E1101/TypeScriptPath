
// The IPrintId interface, however, has a property named id of type number,
// and the IPrintName interface has a property named name of type string.
// These two properties are unique to each of these interfaces.

interface IPrintId {
    id: number;    // unique
    print(): void;
}

interface IPrintName {
    name: string;  // unique
    print(): void;
}

function useT<T extends IPrintId | IPrintName>(item: T)
    : void {
    item.print();

    // TypeScript will ensure that we are only able to reference properties and
    // functions on a type of T, where these properties and functions are common
    // across all types that are allowed for T.

    item.id = 1; // error : id is not common
    item.name = "test"; // error : name is not common
}
