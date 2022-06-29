import type { Equal, Expect } from '@type-challenges/utils'

type Len<T extends unknown[]> = T['length']

type cases = [
  // 每次通过添加一个元素的方式构造数组导致爆栈了，需要通过乘法的逻辑实现
  BuildArray<999>,
  BuildArrayWithMuti<'1101'>,
  Len<[1, 2, 3]>,
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>
]
