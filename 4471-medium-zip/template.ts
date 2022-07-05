type Zip<T extends unknown[], U extends unknown[]> = T extends [infer F1, ...infer R1]
  ? U extends [infer F2, ...infer R2]
    ? [[F1, F2], ...Zip<R1, R2>]
    : []
  : []

// type Zip<
//   T extends unknown[],
//   U extends unknown[],
//   K extends unknown[] = []
// > = T['length'] extends K['length']
//   ? {
//       [key in keyof T]: [T[key], key extends keyof U ? U[key] : never]
//     }
//   : U['length'] extends K['length']
//   ? {
//       [key in keyof U]: [key extends keyof T ? T[key] : never, U[key]]
//     }
//   : Zip<T, U, [...K, 1]>
