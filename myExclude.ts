type MyExclude<T, U> = T extends U ? never : T

type T = number | string | boolean

type U = number | object

type a = MyExclude<T, U>