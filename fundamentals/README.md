# TypeScript Fundamentals

[ref](https://frontendmasters.com/courses/typescript-v2) の写経

## Note

### function signature overloading

↓の例のように、引数 type と 引数 people が依存している場合に、

```typescript
function contactPeople(
  type: 'email' | 'phone',
  ...people: (HasEmail | HasPhoneNumber)[]
): void {
  if (type === 'email') {
    (people as HasEmail[]).forEach(sendEmail)
  } else {
    (people as HasPhoneNumber[]).forEach(sendTextMessage)
  }
}

contactPeople('email', { name: 'Foo', email: 'foo@bar.com' })
contactPeople('phone', { name: 'Foo', phoneNumber: '012-345-6789' })
```

↓のコードが、型的に許されてしまう

```typescript
contactPeople('email', { name: 'Foo', phoneNumber: '012-345-6789' })
```

そこで、overloading を使用する

```typescript
function contactPeople(type: 'email', ...people: HasEmail[]): void
function contactPeople(type: 'phone', ...people: HasPhoneNumber[]): void
function contactPeople(type: 'email' | 'phone', ...people: (HasEmail | HasPhoneNumber)[]): void { ... }
```

そうすると、上記のコードは型的に許されないようになる。
Elixir や、Scala の PatternMatching みたいなもの。

### call signature

Constructor の型を↓のように定義できる

```typescript
interface ContactConstructor {
  new (...args: any[]): HasEmail | HasPhoneNumber
}

type ContactConstructor1 = new (...args: any[]) => HasEmail | HasPhoneNumber
```

### index signature

index signature を使用するときには、戻り値を undefined との共用型にしておかないと、
型が嘘をついてしまう状態になるので注意する

```typescript
interface PhoneNumberDict {
  [numberName: string]:
    {
      areaCode: string
      num: number
    }
}

const d: PhoneNumberDict = {}
d.abc // { areaCode: string, num: number }
```

### self referencing type

[example](https://www.typescriptlang.org/ja/play?#code/PTAEn6GQShkdYZCSGR-eUGIMhpBkoZ4ZyB+GQqwyHKGTgnQwIqD2DILoMgMQyB6DBYHYMg+laC-AbYGxKgIL6DWDILnyg0QyAWDIGUGQLEMgGQZAQgyAohkB+DIE0GQEAMAWABQIUAGYAdAHZA5gwlAgAwAXAJ4AHAKagAhgBsAllYDOHQEWpMnu1qJAhgz67AO0NzACcAMysAY3MOEkArBkARBnYRQCklQBM05VVAVQYKKUB1BkB9BkUlDLABCg5AEwZ4wDMGWkBnKMAGXxJzAA8rAFtTG3MALhMLRwBaADchgKCwyPNHWEAh5UBzR1zqwHkGQAMGTPiiktBAU7lAWSUDQCztQEr-JfieQGj1QCvAwGV5WkBQxUALhJ1tk7PLufn3AT4SHUBZBikgG0GQDJDDoCkVVGUSOgsHhCDFABragAp1XIJdg6ST6baAPbVAP4J7higEQdXK0QDSRoBk1JEgFH9QCBkeDCsptoBo+UAEgyABwZ9DtANByJE0ADY9IB87UAMhEA4EgnrKfqWABqtgAruYAPLBACCwWCVmMAB4ACoAPlAAF5QHrQAAfUAarW6+U2JWqm3a-UGg0AbiZKjAMus9icfHGIXCUVggBFfQD+DIAIFUA8QxA-L4wBq3iRtoBCa1ogAiGRCxQBBDLQGUVffbHerNdqAEyuk1my3WsvGZWhYsq0u212epRByZROu2xvNp31qutIL+AAmjl7LoHrYrrqNAG8AL5eqGsNi0NIcDMSfRXQDVcZ9vnwdAApADKyoAcrBAKDKgBujQAhbhxXsdxfIvb7T44APb+auOIYwQBAA5rW-gKu0ABGIS1lBP4-t0Vj-laEE2DYtbfn+ADaAC6tYLqA2EANbmMYPSgIBwH+CBuEUVh-5Lh2ygRH+gGgK0HRdOY56GFYhgKo4F7XvRv7-qaC7KKA1jDFYdg2FYUHdBRQFKgANFJoCCSE-gdL0oAAESnuYyGDDYP4KqYBkaUo0nBAh7QUZJtnSaAuntPpBkABJ2CBAAWETBNMhjWZp0mqAxFyuIADqawIAv-GAAVKAIJGFoCqJZY78fpAAUACUJqLiuLlLjZTGrmAmhaIAmwyYOAgASTrQgBXDI1hCAHMMmCABMMfAAAoAEo6DugBYmsstA-CIgBm2oAngyyFK3rbH5hiGKYjg9CAY7mMMSk-iBjgaO0diBT+v6hIYGise0wAyo4gV2KYhjAMh-gWf4ESgYMV03XdgxqIMWjAPNi3LatwAgXYhh+QqUFnT+F37Ydx33XqZg8Z992mAq6HAGoagAAwAKw40AA)

[example](https://devblogs.microsoft.com/typescript/announcing-typescript-3-7/#more-recursive-type-aliases)

```typescript
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]
```

### dtslint and tsd

型のテストコードを書くことができる

[`dtslint`](https://github.com/Microsoft/dtslint)
[`tsd`](https://github.com/SamVerschueren/tsd)

### Generics

`extends` で、型に制約をつけることができる

### Generics use case

Generics は、入力の型と、出力の型の関連を表したい時に使う

### Top types and bottom types

Top type は何でも入れることができる型
`any` と `unknown`

#### any の使いみち

本当に何が入っても良い場合、`console()` や、resolve value を気にしない場合の `Promise` など

#### unknown の使いみち

例えば、API からの response は、何が入っているのか？が全くわからないので、`unknown` で受けて、型の絞り込み (narrow down) をする

Bottom type は、何も入れることができない型

#### never の使いみち

narrowing exhaustively

```typescript
const x = 'abc' as string | number

if (typeof x === 'string') {
  // x is string
} else if (typeof x === 'number') {
  // x is number
} else {
  x
  // x is never
}
```

```typescript
class UnreachableError extends Error {
  constructor(value: never, message: string) {
    super(`We could never end up here ${message}`)
  }
}

const y = 'abc' as string | number | boolean

if (typeof y === 'string') {
  // x is string
} else if (typeof y === 'number') {
  // x is number
} else {
  // @ts-expect-error y === 'boolean' のケースを handle していないので、UnreachableError のコンストラクタで、型エラーを検出してくれる
  throw new UnreachableError(y, 'y should be a string or number')
}
```
