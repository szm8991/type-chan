type Falsy = false | [] | Record<any, never> | 0 | undefined | null | ''
// 只有裸入参才会变成分布式
type AnyOf<T extends readonly unknown[]> = T[number] extends Falsy ? false : true
