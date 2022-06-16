// for non-IndexSignature, K is "xxx" type string
// for IndexSignature, K is either string, number, symbol
type RemoveIndexSignature<T extends Record<keyof any, unknown>> = {
  [K in keyof T as K extends `${infer S}` ? S : never]: T[K]
}
