import { BinaryHeap } from "./binaryHeap";
import { maxCompare } from "./comparators";

const MinHeap = BinaryHeap;

class MaxHeap<T> extends BinaryHeap<T> {
  constructor(elems?: T[]) {
    super(elems, maxCompare);
  }
}

export { BinaryHeap, MinHeap, MaxHeap };
