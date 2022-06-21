type MyIf<C extends boolean, T, F> = C extends true ? T : F

type a = MyIf<true, 'a', 'b'>
type b = MyIf<false, 'a', 'b'>
//  null和undefined 是任何类型的子类型 需要开启严格模式才能校验出来
type c = MyIf<null, 'a', 'b'>