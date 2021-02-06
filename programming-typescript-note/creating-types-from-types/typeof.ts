const s = 'Hello'
let n: typeof s // let n: "Hello"

type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate>

function typeofEx() {
  return { x: 10, y: 3 }
}

// @ts-expect-error typeofEx は型では無いので、ReturnType の型引数として渡せない
type TypeofInvalid = ReturnType<typeofEx>

type TypeofEx = ReturnType<typeof typeofEx> // { x: number, y: number }
