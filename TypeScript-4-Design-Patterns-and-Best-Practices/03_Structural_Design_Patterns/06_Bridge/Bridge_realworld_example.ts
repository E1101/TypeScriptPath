/**
 * Probably a good real use case of this pattern is implementations of data structures
 * such as lists, nodes, or trees. On the abstraction part, you have the list interface
 * that stores data items. You want to provide, for example, two different implementations
 * for ArrayList, which stores items in an array, or LinkedList, which stores them in a linked list.
 * On the other hand, the List abstraction will accept an implementation and just call an associated
 * method of the List interface.
 *
 * You can clearly see the separation of concerns and you can extend both the List interface and
 * the StoreOrderAPI interface independently. You can provide different ways to store an item in a
 * list (first in, first out or last in, last out) and different ways to structure
 * the list (as an array or as a linked list).
 */

// Implementation Type
interface StoreAPI<T> {
  store(item: T);
}

// Abstraction type
interface List<T> {
  push(item: T): void;
}

class ArrayList<T> implements List<T> {
  constructor(private items: T[], private storeAPI: StoreAPI<T>) {}

  push(item: T): void {
    this.storeAPI.store(item);
  }

  // implements methods of List ...
}

interface ListNode<T> {
  data: T;
  next: ListNode<T> | null;
}

class LinkedList<T> implements List<T> {
  constructor(private root: ListNode<T>, private items: T[]) {}

  // implements methods of List
  push(item: T): void {
    const newNode: ListNode<T> = {data: item, next: null};
    newNode.next = this.root;
    this.root = newNode;
  }
}
