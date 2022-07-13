type Combination<T extends string[], U = T[number], A = U> = U extends infer U extends string
  ? `${U} ${Combination<T, Exclude<A, U>>}` | U
  : never;