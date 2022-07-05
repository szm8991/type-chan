// 转换成数组，判断数字是否extends
type Number2Array<N extends number, Arr extends unknown[] = []> = N extends Arr['length']
  ? Arr
  : Number2Array<N, [...Arr, unknown]>

type GreaterThan<T extends number, U extends number> = T extends U
  ? false
  : // [...Number2Array<U>, ...any]
  Number2Array<T> extends [...(Number2Array<U> extends [...infer R] ? R : never), ...any]
  ? true
  : false

//  转换成1|2|3 判断联合类型是否extends
type Transform<T extends number, Count extends unknown[] = []> = Count['length'] extends T
  ? Count[number]
  : Transform<T, [...Count, [...Count, 1]['length']]>

// type GreaterThan<T extends number, U extends number> = Transform<T> extends Transform<U>
//   ? false
//   : true

// type GreaterThan<
//   T extends number,
//   U extends number,
//   A extends unknown[] = []
// > = A['length'] extends T
//   ? false
//   : A['length'] extends U
//   ? true
//   : GreaterThan<T, U, [...A, unknown]>
