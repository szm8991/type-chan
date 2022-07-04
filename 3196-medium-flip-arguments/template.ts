type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer R) => infer F
  ? (...arg: Reverse<R>) => F
  : never
