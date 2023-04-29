export type Comparator<T> = (a: T, b: T) => number;

export const minCompare = <T>(a: T, b: T) => {
  if (a === b) return 0;
  return a < b ? -1 : 1;
};

export const maxCompare = <T>(a: T, b: T) => {
  if (a === b) return 0;
  return a > b ? -1 : 1;
};
