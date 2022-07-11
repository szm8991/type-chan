type HaveIt<T extends unknown[], U> = T extends [infer F, ...infer R]
  ? isEqual<F, U> extends true
    ? true
    : HaveIt<R, U>
  : false
type Unique<T extends unknown[], L extends unknown[] = []> = T extends [infer F, ...infer R]
  ? HaveIt<L, F> extends true
    ? Unique<R, L>
    : Unique<R, [...L, F]>
  : L
