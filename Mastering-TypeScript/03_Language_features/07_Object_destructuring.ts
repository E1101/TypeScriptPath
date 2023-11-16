
let complexObject = {
    aNum: 1,
    bStr: "name",
    cBool: true
}

let { aNum, bStr, cBool } = complexObject;
console.log(`aNum : ${aNum}`);
console.log(`bStr : ${bStr}`);
console.log(`cBool : ${cBool}`);

let { aNum: objId, bStr: objName, cBool: isValid } = complexObject;
console.log(`objId : ${objId}`);
console.log(`objName : ${objName}`);
console.log(`isValid : ${isValid}`);
