import type { Equal, Expect } from '@type-challenges/utils'
type extendArr<T, U> = T extends [U extends unknown[] ? U[number] : U, ...infer R] ? true : false

type cases = [
  extendArr<[1], [1]>,
  extendArr<[2, 1], [1, 2, 3]>,
  extendArr<[3, 1], [1, 2]>,
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
]
