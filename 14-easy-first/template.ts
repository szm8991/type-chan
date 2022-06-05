type First<T extends unknown[]> = T extends [infer F, ...infer Rest] ? F : never;
