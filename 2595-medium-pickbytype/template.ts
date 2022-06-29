type PickByType<T, U> = {
  [P in keyof T as T[P] extends U ? P : never]: T[P]
}
// 。。TS本身就是类型系统，怎么会有typeof获取类型的功能呢
// @ts-ignore
type getType<T> = typeof T
