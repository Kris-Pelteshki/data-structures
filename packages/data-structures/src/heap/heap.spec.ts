import { MinHeap } from "./index";

describe("Heap", () => {
  let heap = new MinHeap<number>();

  beforeEach(() => {
    heap.clear();
  });

  it("should create an empty heap", () => {
    expect(heap).toBeDefined();
    expect(heap.peek()).toBeUndefined();
    expect(heap.isEmpty()).toBe(true);
  });

  it("should add items to the heap and heapify it up", () => {
    heap.add(5);
    expect(heap.isEmpty()).toBe(false);
    expect(heap.peek()).toBe(5);

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

  it("should poll items from the heap and heapify it down", () => {
    heap.add(5);
    heap.add(3);
    heap.add(10);
    heap.add(11);
    heap.add(1);

    expect(heap.poll()).toBe(1);
    expect(heap.poll()).toBe(3);
    expect(heap.poll()).toBe(5);
    expect(heap.poll()).toBe(10);
    expect(heap.poll()).toBe(11);
    expect(heap.poll()).toBeUndefined();
  });

  it("should be iterable", () => {
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
