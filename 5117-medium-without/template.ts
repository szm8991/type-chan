type Without<T, U> =
  // 元组T第一项是否在U元组存在
  T extends [U extends unknown[] ? U[number] : U, ...infer R]
    ? Without<R, U>
    : T extends [infer L, ...infer R]
    ? [L, ...Without<R, U>]
    : T
