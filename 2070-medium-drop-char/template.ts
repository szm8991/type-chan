type DropChar<S extends string, C extends string> = S extends `${infer F}${infer R}`
  ? `${F extends C ? '' : F}${DropChar<R, C>}`
  : S
