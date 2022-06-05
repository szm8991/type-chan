// 对一个对象类型使用 keyof 操作符，会返回该对象属性名组成的一个字符串或者数字字面量的联合
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type Myxclude<T, U> = [T] extends [U] ? never : T;
type E = Myxclude<1 | 2, 1 | 3>;

type dog = Record<string, string | number | undefined>;

interface IDog {
  name: string;
  age: number;
  height: number;
  weight: number;
  sex: string;
}

type OmitDog = Omit<IDog, 'name' | 'age'>;

function foo(x: number): Array<number> {
  return [x];
}
type P = Parameters<typeof foo>;
