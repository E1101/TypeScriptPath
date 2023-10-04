/**
 * Bridge is a structural design pattern that acts as a connecting point
 * between an abstraction and its implementation. Instead of having a class
 * implement a functionality, we try to separate it into two pieces. The first
 * part is the abstraction (that is, common interface methods) and the second
 * part is the implementation. This is one more pattern that avoids using
 * inheritance and allows more implementors to be added in the future.
 *
 * The only valid criticism of this pattern is that the criteria to use it need to be designed beforehand.
 * If you really need only one implementation of the abstraction part, then there are only a few benefits
 * you can get from this pattern. You can achieve the full benefits if you have at least two concrete
 * implementations on each side.
 *
 * Let's say we want to abstract the way items are placed into a list:
 */

interface Box {
  id: string;
  value: string;
}

interface BoxArranger {
  arrangeItem(item: Box, items: Box[]): Box[];
}

abstract class BoxContainer {
  constructor(public items: Box[] = [], protected boxArranger: BoxArranger) {}

  arrangeItem(item: Box) {}
}

class StraightBoxContainer extends BoxContainer {
  arrangeItem(item: Box) {
    this.items = this.boxArranger.arrangeItem(item, this.items);
  }
}

class ReversingBoxContainer extends BoxContainer {
  arrangeItem(item: Box) {
    this.items = this.boxArranger.arrangeItem(item, this.items).reverse();
  }
}

class PutLastBoxArranger implements BoxArranger {
  arrangeItem(item: Box, items: Box[]): Box[] {
    items = items.concat(item);
    return items;
  }
}

class PutFirstBoxArranger implements BoxArranger {
  arrangeItem(item: Box, items: Box[]): Box[] {
    let result = items.slice();
    result.unshift(item);
    return result;
  }
}

const items: Box[] = [
  {
    id: "1",
    value: "abc",
  },
];

const pla = new PutLastBoxArranger();
const rv = new StraightBoxContainer(items, pla);

rv.arrangeItem({
  id: "3",
  value: "dfa",
});
// [ { id: '3', value: 'dfa' }, { id: '1', value: 'abc' } ]
console.log(rv.items);

const pfa = new PutFirstBoxArranger();
const sc = new StraightBoxContainer(items, pfa);
sc.arrangeItem({
  id: "3",
  value: "dfa",
});
console.log(sc.items);
