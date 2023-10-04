/**
 * Encapsulation is a way to hide certain data or operations inside objects so they are not used accidentaly.
 * With TypeScript, you can attach access modifiers before member types to control visibility.
 *
 * For example, you use private to allow only access from the current class or protected to allow access
 * to the same class and any subclasses. If you don't specify any modifier, then it defaults as public,
 * which means that it can be accessed or changed by any caller.
 */

// There is also another, stricter way to declare private fields,
// using the ECMAScript private fields introduced in TypeScript 3.8:
// - You will need to have set target as ES2015 in tsconfig.json to make it work -
class User {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  greet() {
    console.log(`User: ${this.#name}!`);
  }
}

const theo = new User("Theo");
theo.#name; // cannot access private field
