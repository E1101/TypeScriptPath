enum SwitchEnum {
    ONE,
    TWO
}

function testEnumSwitchErroneous(value: SwitchEnum): string {
    let returnValue = "";
    switch (value) {
        case SwitchEnum.ONE:
            returnValue = "One";
        case SwitchEnum.TWO:
            returnValue = "Two";
    }

    return returnValue;
}

function testEnumSwitch(value: SwitchEnum): string {
    let returnValue = "";
    switch (value) {
        case SwitchEnum.ONE:
            returnValue = "One";
            break; // <------ Here
        case SwitchEnum.TWO:
            returnValue = "Two";
    }

    return returnValue;
}


console.log(`SwitchEnum.ONE = ${testEnumSwitch(SwitchEnum.ONE)}`);
console.log(`SwitchEnum.TWO = ${testEnumSwitch(SwitchEnum.TWO)}`);
