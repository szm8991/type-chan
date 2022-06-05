type ParseQueryString<Str extends string> = Str extends `${infer Param}&${infer Rest}`
  ? MergeParams<ParseParam<Param>, ParseQueryString<Rest>>
  : ParseParam<Str>;

type ParseParam<Param extends string> = Param extends `${infer Key}=${infer Value}`
  ? {
      [K in Key]: Value;
    }
  : Param extends ''
  ? {}
  : {
      [K in Param]: true;
    };

type MergeParams<OneParam extends Record<string, any>, OtherParam extends Record<string, any>> = {
  [Key in keyof OneParam | keyof OtherParam]: Key extends keyof OneParam
    ? Key extends keyof OtherParam
      ? MergeValues<OneParam[Key], OtherParam[Key]>
      : OneParam[Key]
    : Key extends keyof OtherParam
    ? OtherParam[Key]
    : never;
};

type MergeValues<One, Other> = One extends Other
  ? One
  : Other extends unknown[]
  ? [One, ...Other]
  : [One, Other];
