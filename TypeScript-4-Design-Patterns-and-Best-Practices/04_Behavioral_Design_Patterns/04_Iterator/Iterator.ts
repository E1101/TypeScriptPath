/**
 * Iterator is an entity that knows how to traverse a list of elements
 * in a collection in an abstracted way. You can think of this pattern
 * as an abstraction over for loops. The main idea is that you want to
 * iterate over a data structure without knowing its inner details or
 * how to access its elements in a particular order.
 */

// ListNode is the underlying data structure that you want to traverse.

export interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
}

class ListNode<T> {
  constructor(public next: ListNode<T> | null, public data: T) {}
}

class ListIterator<T> implements Iterator<T> {
  constructor(private root: ListNode<T> | null) {}

  next(): T | null {
    if (this.hasNext()) {
      const data = this.root!.data;
      this.root = this.root!.next;

      return data;
    }

    return null;
  }

  hasNext(): boolean {
    return this.root !== null;
  }
}

// LinkedListAggregate is the object that the client will use to
// access the collection iterator. This object would also be a
// good candidate for a Proxy or Factory Method pattern.
class ListAggregate<T> {
  constructor(private rootList: ListNode<T>) {}

  getListIterator(): ListIterator<T> {
    return new ListIterator(this.rootList);
  }
}

const list = new ListNode(new ListNode(new ListNode(null, 10), 5), 15);
const aggregate = new ListAggregate(list);
const iterator = aggregate.getListIterator();
while (iterator.hasNext()) {
  console.log(iterator.next()); // prints 15, 5, 10
}
