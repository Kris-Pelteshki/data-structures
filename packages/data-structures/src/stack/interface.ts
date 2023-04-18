export type IStack<T = unknown> = {
  size: number;

  push(value: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  clear(): void;
};
