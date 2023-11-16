
/**
 * Using the `keyof` keyword will generate a string literal that automatically
 * includes all of the properties of an interface. This technique is obviously
 * preferable to having to maintain string literals manually.
 */

interface IPerson {
    id: number;
    name: string;
}

type PersonPropertyName = keyof IPerson;
type PersonPropertyLiteral = "id" | "name";

function getProperty(key: PersonPropertyName, value: IPerson) {
    console.log(`${key} = ${value[key]}`);
}

getProperty("id", { id: 1, name: "firstName" });
getProperty("name", { id: 2, name: "secondName" });
