type TupleToObject<T extends readonly any[]> = {
  [P in T[number]]: P
}

// 元组或数组中的遍历是T[number]，TS中 type Arr= ['a', 'b'], Arr[number] = 'a' | 'b'
// 对象中的遍历是keyof T，TS中 type Obj= {a: 1, b: '2'}, keyof Obj = 'a' | 'b'
// 此例中as const断言后的类型为不可写的数组类型，所以要约束传入的参数即使用extends构造一个不可写的数组类型，