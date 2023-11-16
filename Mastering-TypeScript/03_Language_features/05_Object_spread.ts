
// Consider the following code:
let firstObj: object = { id: 1, name: "firstObj" };
let secondObj: object = { ...firstObj };

console.log(`secondObj : ${JSON.stringify(secondObj)}`);
/*
secondObj : {"id":1,"name":"firstObj"}
 */

// We can also use this technique to combine multiple objects together:
let nameObj: object = { name: "nameObj name" };
let idObj: object = { id: 1 };
let obj3 = { ...nameObj, ...idObj };

console.log(`obj3 = ${JSON.stringify(obj3)}`);
/*
obj3 = {"name":"nameObj name","id":1}
 */

/**
 * Spread precedence
 *
 * if two objects have a property with the same name, then
 * the object that was specified last will take precedence.
 */
let objPrec1: object = { id: 1, name: "obj1 name" };
let objPrec2: object = { id: 1001, desc: "obj2 description" };
let objPrec3 = { ...objPrec1, ...objPrec2 };

console.log(`objPrec3 : ${JSON.stringify(objPrec3, null, 4)}`);
/*
objPrec3 : {
    "id": 1001,
    "name": "obj1 name",
    "desc": "obj2 description"
}
 */
