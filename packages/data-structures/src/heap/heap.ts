import { IHeap } from "./interface";
import { minCompare, Comparator } from "./comparators";

export class Heap<T> implements IHeap<T>, Iterable<T> {
  private heap: T[];
  private readonly comparator: Comparator<T>;

  constructor(elems?: Iterable<T>, comparator?: Comparator<T>) {
    this.heap = elems ? [...elems] : [];
    this.comparator = comparator || minCompare;

    if (this.heap.length) {
      for (
        let i = Math.max(0, Math.floor(this.heap.length / 2) - 1);
        i >= 0;
        i--
      ) {
        this.sink(i);
      }
    }
  }

  get size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    this.heap = [];
  }

  peek() {
    return this.heap[0];
  }

  indexOf(elem: T) {
    for (let i = 0; i < this.size; i++) {
      if (this.heap[i] === elem) {
        return i;
      }
    }
    return -1;
  }

  contains(elem: T) {
    return this.indexOf(elem) !== -1;
  }

  add(elem: T) {
    this.heap.push(elem);
    this.swim(this.indexOfLastElem);
  }

  poll() {
    return this.removeAt(0);
  }

  pollAll() {
    const result = new Array<T>(this.size);
    for (let i = 0; i < result.length; i++) {
      result[i] = this.poll() as T;
    }
    return result;
  }

  removeAt(i: number) {
    if (this.isEmpty()) return;

    const removedData = this.heap[i];
    const lastIndex = this.indexOfLastElem;
    this.swap(i, lastIndex);

    // Obliterate the value
    this.heap.pop();

    // Check if the last element was removed
    if (i === lastIndex) return removedData;

    const elem = this.heap[i];

    // Try sinking element
    this.sink(i);

    // If sinking did not work try swimming
    if (this.heap[i] === elem) this.swim(i);

    return removedData;
  }

  remove(elem: T) {
    const index = this.indexOf(elem);
    if (index === -1) {
      return false;
    }

    this.removeAt(index);
    return true;
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.size; i++) {
      yield this.heap[i] as T;
    }
  }

  private get indexOfLastElem() {
    return this.size - 1;
  }

  private less(i: number, j: number): boolean {
    return this.comparator(this.heap[i] as T, this.heap[j] as T) <= 0;
  }

  private swap(i: number, j: number): void {
    const elem = this.heap[i] as T;
    this.heap[i] = this.heap[j] as T;
    this.heap[j] = elem;
  }

  private swim(idx: number): void {
    let parentIdx = Math.floor((idx - 1) / 2);

    while (idx > 0 && this.less(idx, parentIdx)) {
      this.swap(parentIdx, idx);
      idx = parentIdx;

      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  private sink(k: number): void {
    const heapSize = this.size;
    while (true) {
      let left = 2 * k + 1;
      let right = 2 * k + 2;
      let smallest = left;

      // Find which is smaller left or right
      // If right is smaller set smallest to be right
      if (right < heapSize && this.less(right, left)) smallest = right;

      // Stop if we're outside the bounds of the tree
      // or stop early if we cannot sink k anymore
      if (left >= heapSize || this.less(k, smallest)) break;

      // Move down the tree following the smallest node
      this.swap(smallest, k);
      k = smallest;
    }
  }
}
