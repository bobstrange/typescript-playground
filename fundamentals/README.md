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
