type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest]
  ? // 和库里的Equal相同的逻辑
    (<P>() => P extends First ? 1 : 0) extends <P>() => P extends U ? 1 : 0
    ? true
    : Includes<Rest, U>
  : false;
