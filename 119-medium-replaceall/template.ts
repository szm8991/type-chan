type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer left}${From}${infer right}`
  ? `${left}${To}${ReplaceAll<right, From, To>}`
  : S
