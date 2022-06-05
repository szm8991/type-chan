type DeepReadonly<T> = T extends Record<string, any>
  ? {
      readonly [K in keyof T]: T[K] extends Object
        ? T[K] extends Function
          ? T[K]
          : DeepReadonly<T[K]>
        : T[K];
    }
  : T;

type DeepReadonly2<T> = {
  readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>;
};
type fn = (arg: string) => void;
type testFnKey = keyof fn;
