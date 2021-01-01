const x: {
  user: {
    name: string
    address?: {
      street: string
      city: string
    }
  }
} = undefined as any

// optional chaining
x.user.address?.city

Nullish - coalescing

class Foo {
  // # private field
  #name: string
  constructor(rawName?: string) {
    // ?? と || の違い
    // || は、rawName が '' や 0 などの falsy な値の場合に、右の値を返す
    // ?? は、rwaName が null or undefined の場合の場合のみ、右の値を返す
    this.#name = rawName ?? '(no name)'
  }
  log() {
    console.log(this.#name)
  }
}
