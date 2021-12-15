type If<C, T, F> = C extends true ? T : F

type A = If<true, 'a', 'b'>
type B = If<false, 'a', 'b'>
