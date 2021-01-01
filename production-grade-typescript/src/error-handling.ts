function possiblyThrowErrorProcess() {}

try {
  possiblyThrowErrorProcess()
  // err の型に unknown を設定できるようになった
} catch (err: unknown) {
  if (err instanceof Error) {
    console.log(err.stack)
  } else {
    console.log(err)
  }
}

/**
 * テストコードなどで、 if-else の type guard を使う代わりに
 * ↓のような TypeAssertion をすることも有り
 */

function assertIsError(err: any): asserts err is Error {
  if (!(err instanceof Error)) {
    throw err
  }
}

try {
  possiblyThrowErrorProcess()
} catch (err: unknown) {
  assertIsError(err)
  // ここでは、型が Error 型に絞り込まれている
  console.log(err.stack)
}
