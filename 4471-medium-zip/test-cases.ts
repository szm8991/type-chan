import type { Equal, Expect } from '@type-challenges/utils'
// 泛型为tuple，返回对象时还是数组
type TestKeyofTuple<T extends unknown[] | object> = T extends any
  ? {
      [K in keyof T]: [T[K]]
    }
  : never

type cases = [
  TestKeyofTuple<[1, 2, 3, 4, 5]>,
  TestKeyofTuple<{
    a: 1
    b: 2
  }>,
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ['1', '2']>, [[1, '1'], [2, '2']]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>
]
