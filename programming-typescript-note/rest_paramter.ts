// 可変長引数は ... で宣言
function sumVariadicSafe(...numbers: number[]): number {
  return numbers.reduce((prev, curr) => prev + curr, 0)
}

console.log(sumVariadicSafe(1, 2, 3))

// @ts-expect-error 型チェックエラー
console.log(sumVariadicSafe([1, 2, 3]))
