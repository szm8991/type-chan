import type { Equal, Expect } from '@type-challenges/utils'

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string
}

type TT<T, K = keyof T> = T extends Object
  ? {
      [P in keyof T as P extends K ? P : never]?: T[P]
    } & {
      [P in keyof T as P extends K ? never : P]: T[P]
    }
  : never

type TTT<T> = keyof T

type cases = [
  TTT<TT<User, 'name' | 'age'>>,
  PartialByKeys<User, 'name'>,
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>
]
