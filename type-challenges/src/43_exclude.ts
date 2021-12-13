type T0 = Exclude<'a' | 'b' | 'c', 'a'>
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>
// eslint-disable-next-line @typescript-eslint/ban-types
type T2 = Exclude<string | number | (() => void), Function>

type MyExclude<T, U> = T extends U ? never : T
type MyT0 = MyExclude<'a' | 'b' | 'c', 'a'>
type MyT1 = MyExclude<'a' | 'b' | 'c', 'a' | 'b'>
// eslint-disable-next-line @typescript-eslint/ban-types
type MyT2 = MyExclude<string | number | (() => void), Function>
