type AddNum<T extends number, U extends number> = [...BuildArray<T>, ...BuildArray<U>]['length']

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  U extends unknown[] = []
> = T extends [infer First, ...infer Rest]
  ? // 该fill的区间fill结束了
    Start extends End
    ? [...U, ...T]
    : // 到了该fill的索引了
    U['length'] extends Start
    ? Fill<Rest, N, AddNum<Start, 1> & number, End, [...U, N]>
    : Fill<Rest, N, Start, End, [...U, First]>
  : U
