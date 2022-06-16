type Diff<O extends Record<string, unknown>, O1 extends Record<string, unknown>> = {
  [K in keyof Omit<O, keyof O1> | keyof Omit<O1, keyof O>]: K extends keyof O
    ? O[K]
    : K extends keyof O1
    ? O1[K]
    : never
}
