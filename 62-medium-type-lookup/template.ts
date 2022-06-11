type LookUp<U, T> = U extends U ? (U extends { type: T } ? U : never) : never
