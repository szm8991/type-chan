type MyReadonly2<T, K extends keyof T = keyof T> = T extends Record<string, any>
  ? {
      [P in keyof T as P extends K ? never : P]: T[P];
    } & {
      readonly [P in K]: T[P];
    }
  : never;
