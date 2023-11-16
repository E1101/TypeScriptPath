
// The `withNumberOnly` function can only be called with a parameter of type number,
// but it is being used as a callback function where the parameter could be of type
// `number` or `string`. This can easily cause errors in our code. With the
// `strictFunctionTypes` compiler option turned on, this code will generate the
// following error:
//   Argument of type '(a: number) => void' is not assignable to parameter of type '(a: string | number) => void'.
//

function withCallback(fn: (a: number | string) => void) {
    fn("test");
}

function withNumberOnly(a: number) {
    console.log(`a : ${a}`);
}

withCallback(withNumberOnly);

// These function signature mismatches can also occur when using inheritance,
// as can be seen in the following example:
// With the strictFunctionTypes option turned on, this code will generate
// the following error:
//   Argument of type '(withRun: WithPrintAndRun) => void' is not assignable to parameter of type '(withPrint: WithPrint) => void'.
//

class WithPrint {
    print() { }
}

class WithPrintAndRun extends WithPrint {
    run() { }
}

function usePrint(fn: (withPrint: WithPrint) => void) {
    let withPrint = new WithPrint();
    fn(withPrint);
}

usePrint((withRun: WithPrintAndRun) => {
    withRun.run();
});
