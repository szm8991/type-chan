type MyReadonly<T> = T extends Record<string, any>
  ? {
      readonly [K in keyof T]: T[K];
    }
  : T;
