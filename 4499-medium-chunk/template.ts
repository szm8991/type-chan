type Chunk<
  T extends any[],
  N extends number,
  Temp extends any[] = [],
  Res extends any[] = []
> = T extends [infer F, ...infer Rest]
  ? Temp['length'] extends N
    ? Chunk<Rest, N, [F], [...Res, Temp]>
    : Chunk<Rest, N, [...Temp, F], Res>
  : Temp extends []
  ? Res
  : [...Res, Temp]
