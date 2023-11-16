

// This conditional type statement is checking whether the type
// of T extends the type number. If it does, it will return the
// number type, and if not, it will return the string type.

type NumberOrString<T> = T extends number ? number : string;

// We can use this conditional type within a function as follows:

function logNumberOrString<T>(input: NumberOrString<T>) {
    console.log(`logNumberOrString : ${input}`);
}

logNumberOrString<number>(1);
logNumberOrString<string>("test");

// The third call is using the boolean type for the type of T,
// and this line will generate the error
logNumberOrString<boolean>(true);
// the conditional type will return the type string. As boolean does
// not extend number, the returned type in this case will be the type
// string. We therefore need to use a string in this case, as follows:
logNumberOrString<boolean>("boolean does not extend number");
