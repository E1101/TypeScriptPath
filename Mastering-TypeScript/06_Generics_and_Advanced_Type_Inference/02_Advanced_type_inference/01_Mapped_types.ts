
// Type aliases, however, can become even more powerful when combined with
// generic syntax, allowing us to create types based on other types. Add in
// the keyof keyword, and we can create new types based on the properties of
// another type.

interface IAbRequired {
    a: number;
    b: string;
}
let ab: IAbRequired = {
    a: 1,
    // b: "test"
}

type WeakInterface<T> = {
    // using the optional property operator `?`, and the type of
    // each property has been defined as T[K].
    [K in keyof T]?: T[K];
}

let allOptional: WeakInterface<IAbRequired> = {

}
