import { Heap } from "./heap";
import { Comparator, maxCompare } from "./comparators";

const MinHeap = Heap;

class MaxHeap<T> extends Heap<T> {
  constructor(elems?: T[], comparator?: Comparator<T>) {
    super(elems, comparator || maxCompare);
  }
}

export { Heap, MinHeap, MaxHeap };
