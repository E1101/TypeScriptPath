
/**
 * TypeScript allows us to use a feature of the 2020 JavaScript standard
 * called nullish coalescing, which is a handy shorthand that will provide
 * a default value if a variable is either `null` or `undefined`.
 */

function nullishCheck(a: number | undefined | null) {
    console.log(`a : ${a ?? `undefined or null`}`);
}

nullishCheck(1);
nullishCheck(null);
nullishCheck(undefined);

// null operands:

function testNullOperands(a: number, b: number | null | undefined) {
    let addResult = a + (b ?? 0);
}
