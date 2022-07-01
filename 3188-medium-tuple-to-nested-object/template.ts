type TupleToNestedObject<T, U> = T extends [...infer F, infer R]
  ? TupleToNestedObject<F, { [K in R & string]: U }>
  : U
