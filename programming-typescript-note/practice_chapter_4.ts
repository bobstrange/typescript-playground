// 解凍例だと ...b: [T, ...T[]] となっているが、
// 当時の TS の可変長引数の扱いの問題？
function is<T>(a: T, ...b: T[]): boolean {
  console.log('a:', a)
  console.log('b:', b)
  const result = b.every((_) => _ === a)
  console.log('result: ', result)
  return result
}

is('string', 'otherstring')
is(true, false)
is(42, 42)

// @ts-expect-error is(10, 'foo') will throw error
is(10, 'foo')

is([1], [1, 2], [1, 2, 3])
is('foo', 'foo', 'foo')
