import { Queue } from "../queue";
import { BinaryHeap } from "./index";

describe("Heap", () => {
  let heap: BinaryHeap<number>;

  beforeEach(() => {
    heap = new BinaryHeap<number>();
  });

  it("starts empty", () => {
    expect(heap.size).toBe(0);
    expect(heap.isEmpty()).toBe(true);
  });

  it("Can create a heap from an iterable", () => {
    const heapFromIterable = new BinaryHeap(new Queue([5, 3, 2, 10]));

    expect(heapFromIterable.size).toBe(4);
    expect(heapFromIterable.isEmpty()).toBe(false);
    expect(heapFromIterable.peek()).toBe(2);
  });

  it("adds elements to the heap", () => {
    expect(heap.isEmpty()).toBe(true);

    heap.add(5);
    expect(heap.isEmpty()).toBe(false);

    heap.add(3);
    expect(heap.peek()).toBe(3);

    heap.add(10);
    expect(heap.peek()).toBe(3);

    heap.add(1);
    expect(heap.peek()).toBe(1);

    heap.add(11);
    expect(heap.peek()).toBe(1);

    heap.add(1);
    expect(heap.peek()).toBe(1);

    expect(heap.pollAll()).toEqual([1, 1, 3, 5, 10, 11]);
  });

  it("removes elements from the heap", () => {
    heap.add(5);
    heap.add(3);
    heap.add(10);

    expect(heap.remove(3)).toBe(true);
    expect(heap.size).toBe(2);
    expect(heap.contains(3)).toBe(false);
    expect(heap.contains(5)).toBe(true);
    expect(heap.contains(10)).toBe(true);

    expect(heap.remove(7)).toBe(false);
    expect(heap.size).toBe(2);
  });

  it("returns the smallest element on peek", () => {
    heap.add(5);
    heap.add(3);
    heap.add(10);

    expect(heap.peek()).toBe(3);
  });

  it("removes and returns the smallest element on poll", () => {
    heap.add(5);
    heap.add(3);
    heap.add(10);

    expect(heap.poll()).toBe(3);
    expect(heap.size).toBe(2);
    expect(heap.contains(3)).toBe(false);
    expect(heap.contains(5)).toBe(true);
    expect(heap.contains(10)).toBe(true);
    expect(heap.poll()).toBe(5);
    expect(heap.poll()).toBe(10);
    expect(heap.size).toBe(0);
  });

  it("removes and returns all elements on pollAll", () => {
    heap.add(5);
    heap.add(3);
    heap.add(10);

    const result = heap.pollAll();
    expect(result).toEqual([3, 5, 10]);
    expect(heap.size).toBe(0);
  });

  it("clears the heap when clear() is called", () => {
    heap.add(5);
    heap.add(3);
    heap.add(10);

    heap.clear();
    expect(heap.size).toBe(0);
    expect(heap.isEmpty()).toBe(true);
  });

  it("returns the index of an element", () => {
    heap.add(5);
    heap.add(3);
    heap.add(10);

    expect(heap.indexOf(3)).toBe(0);
    expect(heap.indexOf(5)).toBe(1);
    expect(heap.indexOf(10)).toBe(2);
    expect(heap.indexOf(7)).toBe(-1);
  });

  it("can be iterated over with a for...of loop", () => {
    heap.add(5);
    heap.add(3);
    heap.add(10);
    heap.add(11);
    heap.add(1);

    const result = [];

    for (const item of heap) {
      result.push(item);
    }

    expect(result).toEqual([1, 3, 10, 11, 5]);
  });
});
