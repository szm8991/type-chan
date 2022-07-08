type IsTuple<T> = [T] extends [never]
  ? false
  : T extends []
  ? true
  : T extends [unknown, ...unknown[]]
  ? true
  : T extends readonly [unknown, ...unknown[]]
  ? true
  : false
