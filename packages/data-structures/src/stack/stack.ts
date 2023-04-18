import { LinkedList } from "../linkedList";
import { IStack } from "./interface";

export class Stack<T = unknown> implements IStack<T>, Iterable<T> {
  private list: LinkedList<T> = new LinkedList();

  get size() {
    return this.list.size;
  }

  push(item: T) {
    this.list.addLast(item);
  }

  pop() {
    return this.list.removeLast();
  }

  peek() {
    return this.list.peekLast();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  clear() {
    this.list.clear();
  }

  [Symbol.iterator]() {
    return this.list[Symbol.iterator]();
  }
}
