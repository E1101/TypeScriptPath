/**
 * Immutability is the concept of not allowing a variable or
 * an object to change once it's defined and initialized.
 */

interface BlogPost {
  title: string;
  tags: string[];
}

// If you want to enforce it in types, you can use the Readonly modifier:

const post: Readonly<BlogPost> = {
  title: "Welcome to Typescript",
  tags: ["typescript", "learning"],
};

post.title = 'Welcome to Javascript'; // compile error

// The main problem though is with mutable data structures, like the tag
// list in the example. We can still modify the list of tags as long as
// we don't reassign it to a different list:

post.tags.push("example");
console.log(post);
/*
{
  title: 'Welcome to Typescript',
  tags: [ 'typescript', 'learning', 'example']
}
*/

// Mutable data structures can be problematic because nothing prevents us,
// other developers, or third-party libraries from changing them. One quick
// workaround to this issue is to create a new type that delves deep into
// the object and marks it as read-only. Here is an example of that data
// structure:

type Primitive = undefined | null | boolean | string | number | Function;

export type DeepReadonly<T> = T extends Primitive
    ? T
    : T extends Array<infer U>
        ? ImmutableArray<U>
        : T extends Map<infer K, infer V>
            ? ImmutableMap<K, V>
            : T extends Set<infer M>
                ? ImmutableSet<M>
                : ImmutableObject<T>;

export type ImmutableArray<T> = ReadonlyArray<DeepReadonly<T>>;
export type ImmutableMap<K, V> = ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>;
export type ImmutableSet<T> = ReadonlySet<DeepReadonly<T>>;
export type ImmutableObject<T> = {
  readonly [K in keyof T]: DeepReadonly<T[K]>;
};

const postImutable: DeepReadonly<BlogPost> = {
  title: 'Welcome to Typescript',
  tags: ['typescript', 'learning'],
};

postImutable.title = 'dddd';
postImutable.tags.push('demo'); // fails to compile
(post.tags as string[]).push("demo"); // works

