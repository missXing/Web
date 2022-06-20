// 如何判断是不是空数组
// type First<T extends any[]> = T extends [infer R, ...infer O] ? R : never

// type First<T extends any[]> = T extends [] ? never : T[0]

type First<T extends any[]> = T['length'] extends 0 ? never : T[0]


type t = First<[]>

