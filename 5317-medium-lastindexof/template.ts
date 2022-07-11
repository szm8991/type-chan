type LastIndexOf<T extends unknown[], U extends unknown> = U extends T[number]
  ? T extends [...infer F, infer R]
    ? isEqual<U, R> extends true
      ? F['length']
      : LastIndexOf<F, U>
    : never
  : -1
