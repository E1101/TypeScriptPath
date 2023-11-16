/**
 * The undefined type, therefore, allows us to explicitly state when we
 * expect a variable to be undefined. We are essentially telling the compiler
 * that we are aware that a variable may not yet have been defined a value,
 * and we will write our code accordingly.
 */

// There are a range of circumstances where the value
// of something in JavaScript is undefined.
// Let's take a look at an example of this, as follows:
let array = ["123", "456", "789"];

delete array[0];
for (let i = 0; i < array.length; i++) {
    checkAndPrintElement(array[i]);
}

function checkAndPrintElement(arrElement: string | undefined) {
    if (arrElement === undefined)
        console.log(`invalid array element`);
    else
        console.log(`valid array element : ${arrElement}`);
}
