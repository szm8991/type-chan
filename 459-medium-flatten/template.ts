type Flatten<T extends unknown[], U extends any[] = []> = T extends [infer L, ...infer R]
  ? L extends any[]
    ? Flatten<[...L, ...R], U>
    : Flatten<R, [...U, L]>
  : U
