
function testArguments(...args: string[] | number[]) {
    for (let i in args) {
        console.log(`args[${i}] = ${args[i]}`);
    }
}

testArguments("1");
testArguments(10, 20);
