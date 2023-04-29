import { ILinkedList, IListNode } from "./interface";

class Node<T> implements IListNode<T> {
  value: T;
  prev: Node<T> | null;
  next: Node<T> | null;

  constructor(value: T, prev?: Node<T> | null, next?: Node<T> | null) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}

export class LinkedList<T = unknown> implements ILinkedList<T>, Iterable<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private _size = 0;

  get size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }

  peekFirst() {
    return this.head?.value;
  }

  peekLast() {
    return this.tail?.value;
  }

  /** O(1) */
  addFirst(value: T) {
    if (!this.head || !this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      this.head.prev = new Node(value, null, this.head);
      this.head = this.head.prev;
    }

    this._size++;
  }

  /** O(1) */
  addLast(value: T) {
    if (!this.head || !this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      this.tail.next = new Node(value, this.tail);
      this.tail = this.tail.next;
    }

    this._size++;
  }

  addAt(index: number, value: T) {
    if (index < 0 || index > this._size) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      this.addFirst(value);
    } else if (index === this._size) {
      this.addLast(value);
    } else {
      let current = this.head as Node<T>;

      for (let i = 0; i < index; i++) {
        current = current?.next as Node<T>;
      }

      const prev = current?.prev as Node<T>;
      prev.next = current.prev = new Node(value, prev, current);

      this._size++;
    }
  }

  /** O(1) */
  removeFirst() {
    if (!this.head) {
      return;
    }

    const { value } = this.head;

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next as Node<T>;
      this.head.prev = null;
    }

    this._size--;
    return value;
  }

  /** O(1) */
  removeLast() {
    if (!this.tail) {
      return;
    }

    const value = this.tail.value;

    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev as Node<T>;
      this.tail.next = null;
    }

    this._size--;
    return value;
  }

  /** O(n) */
  removeAt(index: number) {
    if (index < 0 || index >= this._size) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      return this.removeFirst();
    }

    if (index === this._size - 1) {
      return this.removeLast();
    }

    let current = this.head as Node<T>;

    for (let i = 0; i < index; i++) {
      current = current.next as Node<T>;
    }

    const prev = current.prev as Node<T>;
    const next = current.next as Node<T>;
    prev.next = next;
    next.prev = prev;

    this._size--;
    return current.value;
  }

  /** O(n) */
  indexOf(value: T) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }

  /** O(n) */
  contains(value: T) {
    return this.indexOf(value) !== -1;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  toArray() {
    return Array.from(this);
  }

  *[Symbol.iterator]() {
    for (let pointer = this.head; pointer !== null; pointer = pointer.next) {
      yield pointer.value;
    }
  }
}
