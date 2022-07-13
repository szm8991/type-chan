type MapTypes<
  T extends Record<keyof any, unknown>,
  R extends { mapFrom: unknown; mapTo: unknown }
> = {
  [K in keyof T]: R extends any
    ? isEqual<R['mapFrom'], T[K]> extends true
      ? R['mapTo']
      : never
    : never
} extends infer U
  ? {
      [K in keyof U]: [U[K]] extends [never] ? T[K] : U[K]
    }
  : never
