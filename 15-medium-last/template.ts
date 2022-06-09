// js里这种写法不行，但是ts里行
// type Last<T extends unknown[]> = T extends [...infer F, infer R] ? R : never
type Last<T extends unknown[]> = T extends [infer E]
  ? E
  : T extends [infer F, ...infer R]
  ? Last<R>
  : never
