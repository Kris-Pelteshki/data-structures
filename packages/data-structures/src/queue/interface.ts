export type IQueue<T = unknown> = {
  size: number;

  enqueue(value: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  clear(): void;
};
