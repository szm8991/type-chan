type convert<S extends string> = S extends `${infer F}${infer R}`
  ? F extends Lowercase<F> | '-'
    ? `${F}${convert<R>}`
    : `-${Lowercase<F>}${convert<R>}`
  : S
type KebabCase<S extends string> = convert<Uncapitalize<S>>
