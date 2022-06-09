declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{
  -readonly [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K]
}>
