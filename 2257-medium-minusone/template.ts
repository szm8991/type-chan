type MinusOne<T extends number> = PopOne<BuildArrayWithMuti<`${T}`>>

type BuildArray<T extends number, U extends unknown[] = []> = U['length'] extends T
  ? U
  : BuildArray<T, [unknown, ...U]>

type Subtract<Num1 extends number, Num2 extends number> = BuildArray<Num1> extends [
  ...BuildArray<Num2>,
  ...infer Rest
]
  ? Rest['length']
  : never

type PopOne<Arr extends unknown[]> = Arr extends [...arr1: infer Rest, last: unknown]
  ? Rest['length']
  : never

type BuildArrayWithMuti<
  T extends string,
  Count extends unknown[] = []
> = T extends `${infer First}${infer Rest}`
  ? BuildArrayWithMuti<Rest, Muti<Count>[keyof Muti & First]>
  : Count

type Muti<T extends unknown[] = []> = {
  '0': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T]
  '1': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown]
  '2': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown]
  '3': [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, unknown, unknown, unknown]
  '4': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown
  ]
  '5': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown
  ]
  '6': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown
  ]
  '7': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown
  ]
  '8': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown
  ]
  '9': [
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    ...T,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown,
    unknown
  ]
}
