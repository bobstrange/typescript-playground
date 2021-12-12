type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type arr3 = []

type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
// こっちは思いつかなかった
// 単に T[0] でも良さそうだが、その場合、[] の時に undefined になる
// type First2<T extends any[]> = T extends [infer P, ...any[]] ? P : never

type head1 = First<arr1>
type head2 = First<arr2>
type head3 = First<arr3>
