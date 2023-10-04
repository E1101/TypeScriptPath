/**
 * You can define types using conditional logic operations.
 * The general structure of a conditional type is A extends B ? C : D.
 * Here, A, B, C, and D are type parameters and they can be of any type, as follows:
 */
type PPSNumber = {
  number: string;
};

type NameOrPPSNumber<T extends string | number> = T extends number
  ? PPSNumber
  : string;

const loginInfo: NameOrPPSNumber<1> = {
  number: "123",
};

/*
 Conditional types are utilized collectively with the infer keyword.
 You can give a name to a type or generic parameter so that you can
 subsequently perform conditional checks:
 */
interface Box<T> {
  value: T;
}

// The use of infer works like this: Whatever the type we defined in A,
// we check whether it extends a Box type. If this is true, then we infer
// this as the type of the Box <T>, parameter is E and return its type.
// Otherwise, we return type A as it is.
// The next three examples show how this works:
type UnpackBox<A> = A extends Box<infer E> ? E : A;

type intStash = UnpackBox<{ value: 10 }>; // type is number
type stringStash = UnpackBox<{ value: "123" }>; // type is string
type booleanStash = UnpackBox<true>; // type is boolean
