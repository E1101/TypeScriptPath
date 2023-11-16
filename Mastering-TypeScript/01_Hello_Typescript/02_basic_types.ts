var myString: string = `this is a string`;
// myString = 1; // generates TS2322

//
// Basic types
//

var myBoolean: boolean = true;
var myNumber: number = 1234;
var myStringArray: string[] = [`first`, `second`, `third`];

// Will generate error
myBoolean = myNumber;
myStringArray = myNumber;
myNumber = myStringArray[0];

myBoolean = myNumber === 456;
myStringArray = [myNumber.toString(), "5678"];
myNumber = myStringArray.length;

console.log(`myBoolean = ${myBoolean}`);
console.log(`myStringArray = ${myStringArray}`);
console.log(`myNumber = ${myNumber}`);
