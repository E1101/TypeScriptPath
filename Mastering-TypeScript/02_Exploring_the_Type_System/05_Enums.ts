/**
 * Using enums helps us to provide a clear set of values for a
 * variable or function parameter. They also provide a tried and
 * tested way of eliminating so called magic numbers by defining a
 * limited number of possible values.
 */

enum DoorState {
    Open,
    Closed
}

function checkDoorState(state: DoorState) {
    console.log(`enum value is : ${state}`);
    switch (state) {
        case DoorState.Open:
            console.log(`Door is open`);
            break;
        case DoorState.Closed:
            console.log(`Door is closed`);
            break;
    }
}

checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);

/*
enum value is : 0
Door is open
enum value is : 1
Door is closed
 */

// we can set the numerical value of an enum value to whatever we like:

enum DoorStateSpecificValues {
    Open = 3,
    Closed = 7,
    Unspecified = 256
}

// A further variant of the enum type is what is known as a
// string enum, where the numerical values are replaced with strings:

enum DoorStateString {
    OPEN = "Open",
    CLOSED = "Closed"
}

console.log(`OPEN = ${DoorStateString.OPEN}`); // OPEN = Open

/**
  const enums
*/

const enum DoorStateConst {
    Open = 10,
    Closed = 20
}

console.log(`const Closed = ${DoorStateConst.Open}`);

// const enums have been introduced for performance reasons.
// To see what happens under the hood, we will need to view the
// JavaScript that this code produces. Firstly, let's take a look
// at the JavaScript implementation of the DoorState enum that we
// were discussing earlier. As the DoorState enum has not been marked
// as const, its JavaScript implementation is as follows:
var DoorState;
(function (DoorState) {
    DoorState[DoorState["Open"] = 0] = "Open";
    DoorState[DoorState["Closed"] = 1] = "Closed";
})(DoorState || (DoorState = {}));

// Let's now look at the generated JavaScript for a const enum:
// Here, we find that there is no actual implementation of the enum
// itself at all. The compiler has simply substituted the JavaScript code
console.log("const Closed = " + 10 /* Open */);
