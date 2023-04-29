export interface IHeap<T> {
  readonly size: number;

  isEmpty(): boolean;
  clear(): void;
  peek(): T | undefined;
  add(elem: T): void;
  poll(): T | undefined;
  pollAll(): T[];
  remove(elem: T): boolean;
  removeAt(i: number): T | undefined;
  indexOf(elem: T): number;
  contains(elem: T): boolean;
}
