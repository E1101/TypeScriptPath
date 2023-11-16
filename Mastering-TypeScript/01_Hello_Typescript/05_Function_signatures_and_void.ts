/**
  Function signatures and void
*/

function calculate(a: number, b: number, c: number): number {
    return (a * b) + c;
}

console.log(`calculate() = ${calculate(3, 2, 1)}`);
console.log(`calculate() = ${calculate("3", "2", "1")}`);

var returnedValue: string = calculate(3, 2, 1);

function printString(a: string): void {
    console.log(a);
}
