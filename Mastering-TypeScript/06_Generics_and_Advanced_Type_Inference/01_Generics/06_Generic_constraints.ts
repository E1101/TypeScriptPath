
/**
 * A generic type can be constructed out of another generic type.
 * This technique essentially uses one type to apply a constraint on another type.
 */

// the keyof operator will return a string literal type that is made
// up of the properties of an object, so K will be constrained to the
// property names of the type T.
function printProperty<T, K extends keyof T>(object: T, key: K) {
    let propertyValue = object[key];
    console.log(`object[${key}] = ${propertyValue}`);
}

let obj1 = {
    id: 1,
    name: "myName",
    print() { console.log(`${this.id}`) }
}

printProperty(obj1, "id");
printProperty(obj1, "name");
// error TS2345: Argument of type '"surname"' is not assignable to parameter of type '"id" | "name" | "print"'
printProperty(obj1, "surname");

// The output of this code is as follows:
//   object[print] = function () { console.log("" + this.id); }
printProperty(obj1, "print");
