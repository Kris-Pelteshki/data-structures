import { ILinkedList, IListNode } from "./interface";

class Node<T> implements IListNode<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T, next?: Node<T> | null) {
    this.value = value;
    this.next = next || null;
  }
}

export class LinkedList<T> implements ILinkedList<T>, Iterable<T> {
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
      this.head = new Node(value, this.head);
    }

    this._size++;
  }

  /** O(1) */
  addLast(value: T) {
    const node = new Node(value);

    if (!this.head || !this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this._size++;
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
      this.head = this.head.next;
    }

    this._size--;
    return value;
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
