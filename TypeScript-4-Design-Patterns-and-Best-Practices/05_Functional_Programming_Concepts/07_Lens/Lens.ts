/**
 * A functional lens is another name for an object's getter and
 * setter methods paired together in a tuple.
 *
 * You can think of lenses as similar to having an Adapter pattern
 * where the Target is the object you want to adapt and the lenses
 * are the Adaptees. You create lenses that adapt over an object type
 * and you can get or set their properties. The main benefit here is
 * that the Lenses object is generic and you can compose it in a functional way.
 */

export interface Lens<T, A> {
  get: (obj: T) => A;
  set: (obj: T) => (newValue: A) => T;
}

// The get method retrieves the object key as long as it's available.
// The set method performs an object assignment by copying all existing
// properties and updating the specific property with the passed key parameter.

function lensProp<T, A>(key: string): Lens<T, A> {
  return {
    get: (obj: T): A => obj[key],
    set:
      (obj: T) =>
      (value: A): T => ({ ...obj, [key]: value }),
  };
}

// Here is how the client will use this function:

interface User {
  name: string;
  email: string;
  address: {
    street: string;
    number: string;
    city: string;
    country: string;
  };
}

const nameLens: Lens<User, string> = lensProp("name");
const user: User = {
  name: "Theo",
  email: "theo@example.com",
  address: {
    street: "Pembroke ST",
    number: "22",
    city: "Dublin",
    country: "Ireland",
  },
};

// You have to note that the nameLens.set function cannot modify the
// object passed. Instead, it creates a new object with the assigned property.
console.log(nameLens.get(user)); // Theo
console.log(nameLens.set(user)("Alex"));
console.log(nameLens.get(user)); // Theo

// It's common to define some extra helper functions for viewing, setting, and
// mapping lenses. This is to make it easier to compose them with different lenses.
// This is how the functions are defined:
function view<T, A>(lens: Lens<T, A>, obj: T): A {
  return lens.get(obj);
}

function set<T, A>(lens: Lens<T, A>, obj: T, value: A): T {
  return lens.set(obj)(value);
}

function over<T, A, B>(lens: Lens<T, A>, f: (x: A) => A, obj: T) {
  return lens.set(obj)(f(lens.get(obj)));
}

// Here's an example of prefixing the name with a title:
// The mapping function takes the lens object that we
// defined earlier, the function that prefixes the name
// property with a title, and the user object. This returns
// a new object with that new property. Then, to evaluate
// the operation, you use the view function by passing the
// nameLens and prefixedName objects. This will evaluate as
// nameLens.get(prefixedName), which, in turn, will evaluate
// as user.name, returning the string `Mr. Theo`.

const prefixedName: User = over(
  nameLens,
  (name: string) => `Mr. ${name}`,
  user
);
console.log(view(nameLens, prefixedName)); // Mr. Theo
