
// `:string` is also optional, as the compiler will infer the type from the default value.
function concatWithDefault(a: string, b: string = "default") {
    console.log(`a + b = ${a + b}`);
}

concatWithDefault("first", "second");
concatWithDefault("third"); // a + b = thirddefault
