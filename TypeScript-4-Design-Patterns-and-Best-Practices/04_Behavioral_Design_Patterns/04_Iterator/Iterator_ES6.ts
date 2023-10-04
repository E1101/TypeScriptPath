// Having a class implement the Iterable interface means that
// it needs to have the following signature:
//   interface Iterable<T> {
//     [Symbol.iterator](): Iterator<T>;
//   }

class OnlyA implements Iterable<string> {
  constructor(private limit: number = 3) {}

  [Symbol.iterator]() {
    let limit = this.limit;

    return {
      next(): IteratorResult<string> {
        return {
          done: limit-- === 0,
          value: "A",
        };
      },
    };
  }
}

const a = new OnlyA();
for (let i of a) {
  console.log(i);
}
