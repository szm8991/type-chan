type Trim<S extends string> = S extends `${' ' | '\n' | '\t'}${infer T}`
  ? Trim<T>
  : S extends `${infer T}${' ' | '\n' | '\t'}`
  ? Trim<T>
  : S
