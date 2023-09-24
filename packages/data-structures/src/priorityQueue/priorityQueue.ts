import { BinaryHeap } from "../heap";

/**
 * @name PriorityQueue
 * @description
 * A priority queue is a data structure that holds elements which have a priority assigned to them.
 * In this implementation, higher priority values are given a higher priority.
 *
 * @example
 * const queue = new PriorityQueue<number>();
 *
 * queue.add(1, 1);
 * queue.add(2, 2);
 * queue.add(3, 3);
 *
 * queue.poll(); // 3
 * queue.poll(); // 2
 * queue.poll(); // 1
 *
 * @example
 * const queue = new PriorityQueue<{ id: string; value: string; data: number[] }>();
 *
 * queue.add({ id: "c", value: "C", data: [7, 8, 9] }, 1);
 * queue.add({ id: "b", value: "B", data: [4, 5, 6] }, 2);
 * queue.add({ id: "a", value: "A", data: [1, 2, 3] }, 3);
 *
 * queue.poll(); // { id: "a", value: "A", data: [1, 2, 3] }
 * queue.poll(); // { id: "b", value: "B", data: [4, 5, 6] }
 * queue.poll(); // { id: "c", value: "C", data: [7, 8, 9] }
 *
 * | Peek | Poll     | Insertion |
 * | ---- | -------- | --------- |
 * | O(1) | O(log n) | O(log n)  |
 *
 */
export class PriorityQueue<T> {
  private heap: BinaryHeap<T>;

  private priorities: Map<T, number> = new Map<T, number>();

  constructor() {
    this.heap = new BinaryHeap<T>([], this.comparator.bind(this));
  }

  private comparator(a: T, b: T): number {
    if (this.priorities.get(a) === this.priorities.get(b)) {
      return 0;
    }
    return (this.priorities.get(a) as number) >
      (this.priorities.get(b) as number)
      ? -1
      : 1;
  }

  get size() {
    return this.heap.size;
  }

  peek() {
    return this.heap.peek();
  }

  isEmpty() {
    return this.heap.isEmpty();
  }

  clear() {
    this.heap.clear();
    this.priorities.clear();
  }

  add(item: T, priority: number = 0) {
    this.priorities.set(item, priority);
    this.heap.add(item);
  }

  poll() {
    const item = this.heap.poll();
    this.priorities.delete(item as T);
    return item;
  }

  remove(item: T) {
    this.heap.remove(item);
    this.priorities.delete(item);
  }

  contains(item: T) {
    return this.heap.contains(item);
  }

  changePriority(item: T, priority: number) {
    this.heap.remove(item);
    this.add(item, priority);
  }
}
