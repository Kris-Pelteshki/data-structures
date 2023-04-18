import { LinkedList } from "../linkedList";
import { IQueue } from "./interface";

export class Queue<T = unknown> implements IQueue<T>, Iterable<T> {
  private list: LinkedList<T>;

  constructor(values?: T[]) {
    this.list = new LinkedList();

    if (values) {
      values.forEach((value) => this.enqueue(value));
    }
  }

  get size() {
    return this.list.size;
  }

  isEmpty() {
    return this.list.size === 0;
  }

  peek() {
    return this.list.peekFirst();
  }

  enqueue(value: T) {
    this.list.addLast(value);
  }

  dequeue() {
    return this.list.removeFirst();
  }

  clear() {
    this.list.clear();
  }

  [Symbol.iterator]() {
    return this.list[Symbol.iterator]();
  }
}
