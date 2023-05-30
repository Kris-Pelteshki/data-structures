import { Stack } from "./stack";

describe("Stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  it("should push items onto the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size).toBe(3);
  });

  it("should pop items off the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.size).toBe(0);
  });

  it("should peek at the top item on the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek()).toBe(3);
    expect(stack.size).toBe(3);
  });

  it("should check if the stack is empty", () => {
    expect(stack.isEmpty()).toBe(true);

    stack.push(1);

    expect(stack.isEmpty()).toBe(false);
  });

  it("should clear the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.clear();

    expect(stack.size).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  it("should iterate over the stack", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    const items: number[] = [];

    for (const item of stack) {
      items.push(item);
    }

    expect(items).toEqual([3, 2, 1]);
  });
});
