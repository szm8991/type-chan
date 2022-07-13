type ConstructTuple<L extends number, U extends unknown[] = []> = U['length'] extends L
  ? U
  : BuildArray<L, [unknown, ...U]>
