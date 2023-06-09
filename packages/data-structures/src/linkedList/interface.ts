export type IListNode<T> = {
  value: T;
  prev: IListNode<T> | null;
  next: IListNode<T> | null;
};

export type ILinkedList<T> = {
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
