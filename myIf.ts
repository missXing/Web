type MyIf<C extends boolean, T, F> = C extends true ? T : F

type a = MyIf<true, string, number>
type b = MyIf<false, string, number>
//  null和undefined 是任何类型的子类型 需要开启严格模式才能校验出来
type c = MyIf<null, 'a', 'b'>

const test: b = 3