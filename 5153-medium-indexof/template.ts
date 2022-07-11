type isEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
  ? true
  : false

type IndexOf<
  T extends unknown[],
  U extends unknown,
  Record extends unknown[] = []
> = U extends T[number]
  ? T extends [infer F, ...infer R]
    ? isEqual<U, F> extends true
      ? Record['length']
      : IndexOf<R, U, [unknown, ...Record]>
    : never
  : -1
