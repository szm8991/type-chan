type GetPrefix<A extends string> = A extends `+${string}` ? '+' : A extends `-${string}` ? '-' : ''

type GetSubFix<A extends string> = A extends `${string}%` ? '%' : ''

type GetCount<A extends string> = A extends `${GetPrefix<A>}${infer R}${GetSubFix<A>}` ? R : never

type PercentageParser<X extends string> = [GetPrefix<X>, GetCount<X>, GetSubFix<X>]
