type String2Union<S extends string> = S extends `${infer F}${infer R}` ? F | String2Union<R> : never

type AllCombinations<S extends string, U extends string = String2Union<S>> = [U] extends [never]
  ? ''
  :
      | ''
      // 递归获取除当前选择字符外的全排列，例如 A|B->A:`A${'' | 'B'}`[A]->A|AB
      | {
          [K in U]: `${K}${AllCombinations<never, Exclude<U, K>>}`
        }[U]
