
/**
 * The Exclude conditional type takes two generic parameters. It will
 * exclude those types given in the second generic parameter from the
 * types given in the first generic parameter. In this example, we have
 * specified that we wish to exclude the types of number and string from
 * the list of types number | string | boolean. Logically, this only
 * leaves boolean as a valid type.
 */
type ExcludeStringAndNumber = Exclude<
    string | number | boolean,
    string | number>;

let boolValue: ExcludeStringAndNumber = true;


/**
 * The Extract conditionals type will return all matching types given in
 * the second generic parameter from the list given in the first parameter.
 * In our preceding example, we are extracting either a string or a number
 * type from the list of string | boolean | never. Logically, the only matching
 * type in this case is string.
 */
type StringOrNumber = Extract<
    string | boolean | never,
    string | number>;

let stringValue: StringOrNumber = "test";

/**
 * Here, we have defined a type named NotNullOrUndef, that is using the conditional
 * type named NonNullable to extract the types from a given type union that are not
 * null or undefined. Removing null and undefined from the given type union, which
 * was number | undefined | null, only leaves type number. Our NotNullOrUndef type,
 * therefore, will resolve to a type of number.
 */

type NotNullOrUndef = NonNullable<number | undefined | null>;

let numValue: NotNullOrUndef = 1;
