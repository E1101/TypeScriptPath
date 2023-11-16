
/**
 * The syntax used for literals is very similar to the syntax of
 * a type alias, where we use the type keyword followed by a set
 * of allowed values. Unlike type aliases, however, we are not
 * specifying a set of different types. We are specifying a set
 * of allowed values, which is similar in concept to an enum.
 */

type AllowedStringValues = "one" | "two" | "three";
type AllowedNumericValues = 1 | 20 | 65535;

function withLiteral(input: AllowedStringValues | AllowedNumericValues) {
    console.log(`called with : ${input}`);
}

withLiteral("one")
withLiteral("two");
withLiteral("three");
withLiteral(65535);

withLiteral("four");
withLiteral(2);
