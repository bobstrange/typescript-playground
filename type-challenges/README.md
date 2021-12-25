# Type Challenges challenge

My solutions for [Type<Challenge[]>](https://github.com/type-challenges/type-challenges)


```shell
npm run check
```

## Distributive conditional types

[handbook](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types)

Generic 型に対して、Conditional Type が作用する場合に、与えられた型が Union 型で有る場合は、Union のそれぞれの型に対して作用する (分配 distributive)

```typescript
type ToArray<Type> = Type extends any ? Type[] : never

type StrArrOrNumArr = ToArray<string | number>
string extends any ? string[] : never | number extends any ? number[] : never
string[] | number[]

// union のそれぞれの型に対して ToArray が作用する
// ToArray<string> | ToArray<number>
// つまり string[] | number[]
```

一般的には、分配してくれたほうが望ましいことが多いが、そのような挙動を避けたい場合は、`[Type] extends [any]` とする

```typescript
type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never
type StrArrOrNumArr = ToArrayNonDist<string | number> // (string | number)[]
```
