export type IListNode<T> = {
  value: T;
  next: IListNode<T> | null;
};

export type IDoublyLinkedListNode<T> = {
  value: T;
  prev: IDoublyLinkedListNode<T> | null;
  next: IDoublyLinkedListNode<T> | null;
};

export type ILinkedList<T> = {
  readonly size: number;

  isEmpty(): boolean;
  peekFirst(): T | undefined;
  peekLast(): T | undefined;
  addFirst(value: T): void;
  addLast(value: T): void;
  removeFirst(): T | undefined;
  clear(): void;
  toArray(): T[];
};

export type IDoublyLinkedList<T> = {
  readonly size: number;

  isEmpty(): boolean;
  peekFirst(): T | undefined;
  peekLast(): T | undefined;
  addFirst(value: T): void;
  addLast(value: T): void;
  addAt(index: number, value: T): void;
  removeFirst(): T | undefined;
  removeLast(): T | undefined;
  removeAt(index: number): T | undefined;
  indexOf(value: T): number;
  contains(value: T): boolean;
  clear(): void;
  toArray(): T[];
};
