
// The WeakType type alias that we created earlier is actually
// called Partial, which can be seen from the type definition
// in lib.es5.d.ts, as follows:

// Here, we can see the type definition for a type named Partial,
// which will transform each property in the type named T into an
// optional property.

/**
 * Make all properties in T optional
 */
type Partial<T> = {
    [P in keyof T]?: T[P];
};
// ---------------------------------------------------------------------------------------------------------------------

// Similarly, we can use the Readonly mapped type to mark each
// property as readonly, as follows:

/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

let readonlyVar: Readonly<IAbRequired> = {
    a: 1,
    b: "test"
}
// error TS2540: Cannot assign to 'a' because it is a read-only property.
readonlyVar.a = 1;
// ---------------------------------------------------------------------------------------------------------------------

// The Pick mapped type is used to construct a type based
// on a subset of properties of another type, as follows:

interface IAbc {
    a: number;
    b: string;
    c: boolean
}

type PickAb = Pick<IAbc, "a" | "b">;
let pickAbObject: PickAb = {
    a: 1,
    b: "test"
}
// ---------------------------------------------------------------------------------------------------------------------

// Record mapped type, which is used to construct a type on the fly.
// The Record mapped type will then create a new type with the
// properties of c and d, both of type number.
type RecordedCd = Record<"c" | "d", number>;
let recordedCdVar: RecordedCd = {
    c: 1,
    d: 1
}
