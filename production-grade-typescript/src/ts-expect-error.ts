// @ts-expect-error I want to ignore this error :-)
const num: number = 'Hello'

type MyNumber = number & any

// @ts-expect-error This is expected error
const num2: MyNumber = 'Hello'

// MyNumber が誰かにいじられて、 any との交差型になった場合、
// ts-expect-error は error を期待しているが error が出ていない、とエラーを出力してくれる
