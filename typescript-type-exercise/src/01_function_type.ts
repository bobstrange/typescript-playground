function isPositive(num: number): boolean {
  return num >= 0
}

// 使用例
isPositive(3)

// @ts-expect-error 引数は number であるべき
isPositive('123')

// @ts-expect-error isPositive の戻り値の型 boolean は number に assign できない
const numVar: number = isPositive(-5)
