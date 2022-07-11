type TruncFunc<T extends string> = T extends `${infer F}.${infer R}` ? F : T
type Trunc<T extends number | string> = TruncFunc<`${T}`>
