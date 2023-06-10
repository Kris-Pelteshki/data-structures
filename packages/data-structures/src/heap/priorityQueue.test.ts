import { PriorityQueue } from "./priorityQueue";

describe("PriorityQueue", () => {
  let queue: PriorityQueue<number>;

  beforeEach(() => {
    queue = new PriorityQueue<number>();
  });

  it("starts empty", () => {
    expect(queue.size).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  it("adds elements with priority", () => {
    queue.add(1, 10);
    queue.add(2, 2);
    queue.add(3, 1);
    queue.add(4, 5);

    expect(queue.size).toBe(4);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(3);
    expect(queue.poll()).toBe(3);
    expect(queue.poll()).toBe(2);
    expect(queue.poll()).toBe(4);
    expect(queue.poll()).toBe(1);
  });

  it("removes elements", () => {
    queue.add(1, 10);
    queue.add(2, 2);
    queue.add(3, 1);

    queue.remove(2);

    expect(queue.size).toBe(2);
    expect(queue.contains(2)).toBe(false);
    expect(queue.peek()).toBe(3);
  });

  it("changes priority of elements", () => {
    queue.add(1, 1);
    queue.add(2, 2);
    queue.add(3, 3);

    queue.changePriority(1, 4);

    expect(queue.size).toBe(3);
    expect(queue.peek()).toBe(2);
    expect(queue.poll()).toBe(2);
    expect(queue.poll()).toBe(3);
    expect(queue.poll()).toBe(1);
  });

  it("polls elements in priority order", () => {
    queue.add(1, 10);
    queue.add(2, 0);
    queue.add(3, 5);
    queue.add(4, 50);
    queue.add(5, 9);

    expect(queue.size).toBe(5);
    expect(queue.poll()).toBe(2);
    expect(queue.poll()).toBe(3);
    expect(queue.poll()).toBe(5);
    expect(queue.poll()).toBe(1);
    expect(queue.poll()).toBe(4);
  });

  it("clears the queue", () => {
    queue.add(1, 1);
    queue.add(2, 2);
    queue.add(3, 3);

    queue.clear();

    expect(queue.size).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });
});

describe("PriorityQueue with objects", () => {
  let queue: PriorityQueue<{ id: string; value: string; data: number[] }>;

  beforeEach(() => {
    queue = new PriorityQueue<{ id: string; value: string; data: number[] }>();
  });

  it("adds custom objects", () => {
    const obj_1 = { id: "a", value: "A", data: [1, 2, 3] };
    const obj_2 = { id: "b", value: "B", data: [4, 5, 6] };
    const obj_3 = { id: "c", value: "C", data: [7, 8, 9] };

    queue.add(obj_1, 1);
    queue.add(obj_2, 10);
    queue.add(obj_3, 5);

    expect(queue.size).toBe(3);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(obj_1);
    expect(queue.poll()).toBe(obj_1);
    expect(queue.poll()).toBe(obj_3);
    expect(queue.poll()).toBe(obj_2);
    expect(queue.isEmpty()).toBe(true);
  });
});
