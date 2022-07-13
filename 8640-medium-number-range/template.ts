type BuildNeverArray<T extends number, U extends unknown[] = []> = U['length'] extends T
  ? U
  : BuildNeverArray<T, [never, ...U]>

type NumberRange<
  L extends number,
  H extends number,
  R extends unknown[] = BuildNeverArray<L>
> = R['length'] extends H ? [...R, R['length']][number] : NumberRange<L, H, [...R, R['length']]>
