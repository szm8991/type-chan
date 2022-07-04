type Flip<T> = T extends Record<string | number, any> ? { [K in keyof T as `${T[K]}`]: K } : never
