type Join<T, U extends string | number, R extends string = ''> = T extends [infer F, ...infer E]
  ? Join<E, U, R extends '' ? F : `${R}${U}${F & string}`>
  : R
