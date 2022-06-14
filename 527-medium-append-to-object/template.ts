type AppendToObject<T extends Record<string, unknown>, U extends string, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V
}
