// 递归处理数组的每一项
type FlattenDepth<T extends unknown[], D extends number = 1> = T extends [infer F, ...infer R]
  ? [...FlattenArray<F, D>, ...FlattenDepth<R, D>]
  : T
// 处理逻辑，C数组代表flat了几层，因为ts没有加减法
type FlattenArray<X extends any, D = 1, C extends any[] = [0]> = X extends any[]
  ? D extends C['length']
    ? X
    : X extends [infer F, ...infer R]
    ? [...FlattenArray<F, D, [...C, 0]>, ...FlattenArray<R, D, C>]
    : X
  : [X]
