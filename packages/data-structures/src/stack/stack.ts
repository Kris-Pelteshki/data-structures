import { LinkedList } from "../linkedList";
import { IStack } from "./interface";

export class Stack<T = unknown> implements IStack<T>, Iterable<T> {
  private list: LinkedList<T> = new LinkedList();

  get size() {
    return this.list.size;
  }

  push(item: T) {
    this.list.addFirst(item);
  }

  pop() {
    return this.list.removeFirst();
  }

  peek() {
    return this.list.peekFirst();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  clear() {
    this.list.clear();
  }

  [Symbol.iterator](): Iterator<T> {
    return this.list.toArray()[Symbol.iterator]();
  }
}
