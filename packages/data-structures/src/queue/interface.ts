export type IQueue<T = unknown> = {
  readonly size: number;

  enqueue(value: T): void;
  dequeue(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  clear(): void;
};
