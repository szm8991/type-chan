type map = {
  0: 0
  1: 1
}
type Add<A extends number, B extends number> = [...BuildArray<A>, ...BuildArray<B>]['length']

type Fibonacci<
  T extends number,
  // 当前求的Fibonacci -> F(i)
  F extends number = 2,
  // 前一个Fibonacci -> F(i-1)
  F_2 extends number = 1,
  // 前前一个Fibonacci -> F(i-2)
  F_1 extends number = 0
> = T extends keyof map
  ? map[T]
  : T extends F
  ? Add<F_2, F_1>
  : Fibonacci<T, Add<F, 1> & number, Add<F_1, F_2> & number, F_2>
