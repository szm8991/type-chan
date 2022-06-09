// js里这种写法不行，但是ts里行
type Pop<T extends unknown[]> = T extends [...infer F, infer R] ? F : never
