/**
 * Type aliases can be used wherever normal types are
 * used and are denoted by using the type keyword.
 *
 * Type aliases are a handy way of specifying a type union and giving it
 * a name, and are particularly useful when the type union is used over
 * and over again.
 */

type StringOrNumber = string | number;

function addWithTypeAlias(
    arg1: StringOrNumber,
    arg2: StringOrNumber
) {
    return arg1.toString() + arg2.toString();
}
