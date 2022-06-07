type Chainable<O = {}> = {
  option<K extends string, V>(
    key: K extends keyof O ? never : K,
    value: V
  ): Chainable<{ [Key in K extends keyof any ? K : never]: V } & O>;
  get(): O;
};
