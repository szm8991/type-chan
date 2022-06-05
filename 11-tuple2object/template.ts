// 元组转联合类型
type union = ['aaa', 'bbb'][number];
// 元组的keyof
type union2<T> = keyof T;
type test = union2<['aaa', 'bbb']>;
type TupleToObject<T extends readonly (string | number)[]> = {
  [P in T[number]]: P;
};
