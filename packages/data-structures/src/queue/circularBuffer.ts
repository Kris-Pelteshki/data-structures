import { IQueue } from "./interface";

export class CircularBuffer<T> implements IQueue<T>, Iterable<T> {
  buffer: (T | undefined)[];
  capacity: number;
  head: number;
  tail: number;
  _size: number;

  constructor(capacity = 1024) {
    this.buffer = new Array(capacity);
    this.capacity = capacity;
    this.head = 0;
    this.tail = 0;
    this._size = 0;
  }

  get size() {
    return this._size;
  }

  /** O(1) */
  enqueue(item: T) {
    if (this._size === this.capacity) {
      throw new Error("Queue overflow");
    }
    this.buffer[this.tail] = item;
    this.tail = (this.tail + 1) % this.capacity;
    this._size++;
  }

  /** O(1) */
  dequeue() {
    if (this._size === 0) {
      return undefined;
    }
    const item = this.buffer[this.head];
    this.buffer[this.head] = undefined; // Optional: helps GC
    this.head = (this.head + 1) % this.capacity;
    this._size--;
    return item;
  }

  peek() {
    if (this._size === 0) return undefined;
    return this.buffer[this.head];
  }

  isEmpty() {
    return this._size === 0;
  }

  isFull() {
    return this._size === this.capacity;
  }

  clear() {
    this.buffer = new Array(this.capacity);
    this.head = 0;
    this.tail = 0;
    this._size = 0;
  }

  *[Symbol.iterator](): Iterator<T> {
    for (let i = 0; i < this._size; i++) {
      yield this.buffer[(this.head + i) % this.capacity] as T;
    }
  }
}
