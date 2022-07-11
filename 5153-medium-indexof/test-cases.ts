import type { Equal, Expect } from '@type-challenges/utils'
type testIndexof<T extends any[], U extends any> = T extends [...infer F, U, ...infer R]
  ? F['length']
  : never
type cases = [
  2 extends [1, 2, 3][number] ? true : false,
  testIndexof<[1, 2, 3], 1>,
  IndexOf<[string, 1, number, 'a'], number>,

  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>
]
