type Hoge = Promise<number>

type Unwrap<T> = T extends Promise<infer U> ? U : T

type Fuga = Unwrap<Hoge>
type Piyo = Unwrap<number>

// 回答例 だと、Recursive に  MyAwaited を適用しているけど、題意を満たせないのでは？
type MyAwaited<T> = T extends Promise<infer F>
  ? F extends Promise<any>
    ? MyAwaited<F>
    : F
  : T
type Res = MyAwaited<Promise<Promise<number>>>
