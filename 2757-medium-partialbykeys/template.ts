type PartialByKeys<T, K = keyof T> = T extends Object
  ? {
      [P in keyof T as P extends K ? P : never]?: T[P]
    } & {
      [P in keyof T as P extends K ? never : P]: T[P]
    } extends infer U
    ? {
        [P in keyof U]: U[P]
      }
    : never
  : never
