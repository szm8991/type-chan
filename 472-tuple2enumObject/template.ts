type Enum<T extends readonly string[], N extends boolean = false> = {
  readonly [K in T[number] as K extends string ? Capitalize<K> : K]: N extends false
    ? K
    : countIndex<T, K>;
};
type countIndex<T extends readonly unknown[], K, Arr extends unknown[] = []> = T extends readonly [
  infer F,
  ...infer Rest
]
  ? [F] extends [K]
    ? Arr['length']
    : countIndex<Rest, K, [...Arr, any]>
  : never;
