type Hoge = Promise<number>

type Unwrap<T> = T extends Promise<infer U> ? U : never

type Fuga = Unwrap<Hoge>
type Piyo = Unwrap<number>
