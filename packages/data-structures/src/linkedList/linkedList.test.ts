import { DoublyLinkedList } from "./DoublyLinkedList";

describe("LinkedList", () => {
  let list: DoublyLinkedList<number>;

  beforeEach(() => {
    list = new DoublyLinkedList<number>();
  });

  describe("addFirst", () => {
    test("adds an element to an empty list", () => {
      list.addFirst(1);
      expect(list.size).toBe(1);
      expect(list.peekFirst()).toBe(1);
      expect(list.peekLast()).toBe(1);
    });

    test("adds an element to the beginning of a non-empty list", () => {
      list.addFirst(1);
      list.addFirst(2);
      expect(list.size).toBe(2);
      expect(list.peekFirst()).toBe(2);
      expect(list.peekLast()).toBe(1);
    });
  });

  describe("addLast", () => {
    test("adds an element to an empty list", () => {
      list.addLast(1);
      expect(list.size).toBe(1);
      expect(list.peekFirst()).toBe(1);
      expect(list.peekLast()).toBe(1);
    });

    test("adds an element to the end of a non-empty list", () => {
      list.addLast(1);
      list.addLast(2);
      expect(list.size).toBe(2);
      expect(list.peekFirst()).toBe(1);
      expect(list.peekLast()).toBe(2);
    });
  });

  describe("addAt", () => {
    test("adds an element at the beginning of the list", () => {
      list.addAt(0, 1);
      expect(list.size).toBe(1);
      expect(list.peekFirst()).toBe(1);
      expect(list.peekLast()).toBe(1);
    });

    test("adds an element at the end of the list", () => {
      list.addAt(0, 1);
      list.addAt(1, 2);
      expect(list.size).toBe(2);
      expect(list.peekFirst()).toBe(1);
      expect(list.peekLast()).toBe(2);
    });

    test("adds an element in the middle of the list", () => {
      list.addAt(0, 1);
      list.addAt(1, 3);
      list.addAt(1, 2);
      expect(list.size).toBe(3);
      expect(list.peekFirst()).toBe(1);
      expect(list.peekLast()).toBe(3);
    });

    test("throws an error if index is out of bounds", () => {
      expect(() => list.addAt(-1, 1)).toThrow();
      expect(() => list.addAt(1, 1)).toThrow();
    });
  });

  describe("removeFirst", () => {
    test("removes the only element in the list", () => {
      list.addFirst(1);
      expect(list.removeFirst()).toBe(1);
      expect(list.size).toBe(0);
      expect(list.peekFirst()).toBeUndefined();
      expect(list.peekLast()).toBeUndefined();
    });

    test("removes the first element in a non-empty list", () => {
      list.addFirst(1);
      list.addFirst(2);
      expect(list.removeFirst()).toBe(2);
      expect(list.size).toBe(1);
      expect(list.peekFirst()).toBe(1);
      expect(list.peekLast()).toBe(1);
    });

    test("returns undefined if the list is empty", () => {
      expect(list.removeFirst()).toBeUndefined();
    });
  });

  describe("removeLast", () => {
    test("removes the only element in the list", () => {
      list.addFirst(1);
      expect(list.removeLast()).toBe(1);
      expect(list.size).toBe(0);
      expect(list.peekFirst()).toBeUndefined();
      expect(list.peekLast()).toBeUndefined();
    });

    test("removes the last element in a non-empty list", () => {
      list.addFirst(1);
      list.addFirst(2);
      expect(list.removeLast()).toBe(1);
      expect(list.size).toBe(1);
      expect(list.peekFirst()).toBe(2);
      expect(list.peekLast()).toBe(2);
    });

    test("returns undefined if the list is empty", () => {
      expect(list.removeLast()).toBeUndefined();
    });
  });

  describe("removeAt", () => {
    test("removes the only element in the list", () => {
      list.addFirst(1);
      expect(list.removeAt(0)).toBe(1);
      expect(list.size).toBe(0);
      expect(list.peekFirst()).toBeUndefined();
      expect(list.peekLast()).toBeUndefined();
    });

    test("removes the first element in a non-empty list", () => {
      list.addFirst(1);
      list.addFirst(2);
      expect(list.removeAt(0)).toBe(2);
      expect(list.size).toBe(1);
      expect(list.peekFirst()).toBe(1);
      expect(list.peekLast()).toBe(1);
    });

    test("removes the last element in a non-empty list", () => {
      list.addFirst(1);
      list.addFirst(2);
      expect(list.removeAt(1)).toBe(1);
      expect(list.size).toBe(1);
      expect(list.peekFirst()).toBe(2);
      expect(list.peekLast()).toBe(2);
    });

    test("removes an element in the middle of the list", () => {
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);
      expect(list.removeAt(1)).toBe(2);
      expect(list.size).toBe(2);
      expect(list.peekFirst()).toBe(3);
      expect(list.peekLast()).toBe(1);
    });

    test("throws an error if index is out of bounds", () => {
      expect(() => list.removeAt(-1)).toThrow();
      expect(() => list.removeAt(0)).toThrow();
    });
  });

  describe("indexOf", () => {
    test("returns the index of the first occurrence of an element", () => {
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);
      expect(list.indexOf(1)).toBe(2);
      expect(list.indexOf(2)).toBe(1);
      expect(list.indexOf(3)).toBe(0);
      expect(list.indexOf(4)).toBe(-1);
    });
  });

  describe("contains", () => {
    test("returns true if the list contains the element", () => {
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);
      expect(list.contains(1)).toBe(true);
      expect(list.contains(2)).toBe(true);
      expect(list.contains(3)).toBe(true);
      expect(list.contains(4)).toBe(false);
    });
  });

  describe("clear", () => {
    test("removes all elements from the list", () => {
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);
      list.clear();
      expect(list.size).toBe(0);
      expect(list.peekFirst()).toBeUndefined();
      expect(list.peekLast()).toBeUndefined();
    });
  });

  describe("toArray", () => {
    test("returns an array with the elements in the list", () => {
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);
      expect(list.toArray()).toEqual([3, 2, 1]);
    });
  });

  describe("iterator", () => {
    test("returns an iterator that iterates over the elements in the list", () => {
      list.addFirst(1);
      list.addFirst(2);
      list.addFirst(3);
      const iterator = list[Symbol.iterator]();
      expect(iterator.next().value).toBe(3);
      expect(iterator.next().value).toBe(2);
      expect(iterator.next().value).toBe(1);
      expect(iterator.next().done).toBe(true);
    });
  });
});
