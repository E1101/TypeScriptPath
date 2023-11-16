
// Consider the following code:

let firstArray = [1, 2, 3];
let secondArray = [3, 4, 5];
let thirdArray = [...firstArray, ...secondArray];

console.log(`third array = ${thirdArray}`);
/*
third array = 1,2,3,3,4,5
 */


let objArray1 = [
    { id: 1, name: "first element" },
]

let objArray2 = [
    { id: 2, name: "second element" }
]

let objArray3 = [
    ...objArray1,
    { id: 3, name: "third element" },
    ...objArray2
]

console.log(`objArray3 = ${JSON.stringify(objArray3, null, 4)}`);
/*
objArray3 = [
    {
        "id": 1,
        "name": "first element"
    },
    {
        "id": 3,
        "name": "third element"
    },
    {
        "id": 2,
        "name": "second element"
    }
]
 */
