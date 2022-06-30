type ObjectEntries<T> = T extends Object
  ? {
      [P in keyof T]-?: [P, RemoveUndefined<T[P]>]
    }[keyof T]
  : never

type RemoveUndefined<T> = [T] extends [undefined] ? T : Exclude<T, undefined>
