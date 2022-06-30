type Mutable<T extends Record<string, unknown> | readonly unknown[]> = {
  -readonly [P in keyof T]: T[P]
}
