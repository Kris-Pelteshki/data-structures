import { IStack } from "./interface";

export class ArrayStack<T = unknown> implements IStack<T>, Iterable<T> {
  private stack: T[] = [];

  get size() {
    return this.stack.length;
  }

  push(item: T) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  clear() {
    this.stack = [];
  }

  [Symbol.iterator]() {
    return this.stack[Symbol.iterator]();
  }
}
