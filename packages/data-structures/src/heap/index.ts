import { BinaryHeap } from "./binaryHeap";
import { Comparator, maxCompare } from "./comparators";

const MinHeap = BinaryHeap;

class MaxHeap<T> extends BinaryHeap<T> {
  constructor(elems?: T[], comparator?: Comparator<T>) {
    super(elems, comparator || maxCompare);
  }
}

export { BinaryHeap, MinHeap, MaxHeap };
