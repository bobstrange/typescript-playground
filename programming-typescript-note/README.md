# Programming TypeScript メモ

## よく忘れる部分

### リテラル型

ただ一つの値を表し、それ以外の値は受け入れない型

- これいつも言葉を忘れるのでメモ
- `string`
- `'something'`, `'test'` -> 単なる `string` ではなく, `'something'`, `'test'` などの一つの型

### 構造的型付け

- [参考](https://qiita.com/takasek/items/c15ef7ce5a00e65a4ad2)
  - 名前的型システム
          - ある名前の型について、保持するプロパティ名と型が一致する、別の名前の型は、名前が違うので区別される
  - 構造的型システム
    - ある名前の型について、保持するプロパティ名と型が一致する(一致する部分を内包する)、別の名前の型は、互換である
  - [参考](https://typescript-jp.gitbook.io/deep-dive/getting-started/why-typescript#nastructural-type-system)
- あるオブジェクトが特定のプロパティを持つことを重視しその名前が何であるか？(名前的型付け) は気にしない。
  - ダックタイピング

```ts
interface Point2D {
  x: number
  y: number
}

interface Point3D {
  x: number
  y: number
  z: number
}

const point2D = { x: 0, y: 10 }
const point3D = { x: 10, y: 20, z: 30 }

const printPoint2D(point: point2D) { console.log(point) }

printPoint2D(point2D)
printPoint2D(point3D)
```

### インデックスシグネチャ

`[key: T]: U`

### Union

- `A` or `B`
  - これは、 `A`、`B` のどちらか、だけでなく、両方のメンバになることができる

```ts
type CatOrDogOrBoth =
  | {
      name: string
      purrs: boolean
    }
  | {
      name: string
      barks: boolean
      wags: boolean
    }

const cat: CatOrDogOrBoth = { name: 'Kerberos', barks: true, wags: false }

const dog: CatOrDogOrBoth = { name: 'Kitty', purrs: true }

// value could be both !!!
const both: CatOrDogOrBoth = {
  name: 'Chimera',
  barks: true,
  wags: true,
  purrs: true,
}
```

### 関数

- パラメータは関数宣言、実際に呼び出し時に指定するのは引数
  - ( そんな使い分けなのね、、、 )
- parameter
- argument

### 可変長引数関数

- 毎回忘れる...
- 引数に `...` をつける
- 型は `型[]` にする

```ts
function sum(...numbers: number[]): number {
    return numbers.reduce((acc, cur) => acc + cur, 0)
}
```

### no-invalid-this

[ESLint](https://eslint.org/docs/rules/no-invalid-this)

クラスっぽいオブジェクト以外で `this` を使うと、想定外の挙動が発生しやすいので、ESLint でチェックしましょうというお話

### this の型付け

関数内で `this` を使うときに、関数の第一パラメータとして `this` を宣言し、型付けすることができる。
(`this` は他のパラメータとは同様に扱われない)

↓のばあい、 `this: Date` が無いと、呼び出し元の型チェックが効かない

```ts
function ppDate(this: Date) {
    return `${this.getFullYear()}-${this.getMonth() + 1}-${this.getDate()}`
}

ppDate.call(new Date()) // ok
ppDate() // type error
```

### 関数の型付け

`createUser` の実装部分では、パラメータに型付する必要は無い

```ts
type User = {
  name: string
  isAdmin: boolean
}

type CreateUser = (name: string, isAdmin: boolean) => User

const createUser: CreateUser = (name, admin) => {
  return {
    name,
    isAdmin: admin,
  }
}
```

`Promise` の場合、シグネチャなので `async` は使えない

```ts
type FetchUser = (name: string) => Promise<User | undefined>

const fetchUser: FetchUser = async (name) => {
  const users: User[] = []
  return users.find((u) => u.name === name)
}

```

可変長引数の場合、 `...` は当然必要

```ts
type Sum = (...args: number[]) => number

const sum: Sum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0)
}
```

### 関数の呼び出しシグネチャの書き方

呼び出しシグネチャの記法は省略 ver と、完全版がある

```ts

type Sum = (...args: number[]) => number

type Sum = {
    (...args: number[]): number
}
```

オーバーロードされた関数を定義する場合は、完全版で定義したほうが望ましいらしい

```ts
type CreateElement = {
    (tag: 'a'): HTMLAnchorElement
    (tag: 'canvas'): HTMLCanvasElement
    (tag: 'table'): HTMLTableElement
    (tag: string): HTMLElement
}

// 'a', 'canvas', 'table' は string のサブタイプなので、パラメータは string
const createElement: CreateElement = (tag: string): HTMLElement => {
    // impl
}
```

### ジェネリック型パラメータ

```ts
type Filter = <T>(arg: T[], filterFunc: (item: T) => boolean) => T[]
type Filter = {
    <T>(arg: T[], filterFunc: (item: T) => boolean): T[]
}

const filter: Filter = (input, f) => {
  return input.filter(f)
}

```

`filter` の引数の型を、ジェネリックの `T` にバインドする

引数が `number[]` なら、 `T` は `number` に
引数が `string[]` なら、`T` は `string` に

```ts
filter([1, 2, 3], _ => _ > 2)
filter(['a', 'b'], _ => _ === 'a')
```

### ジェネリックがバインドされるタイミング

一般的に、 TypeScript は、ジェネリックを使用するときに具体的な型をバインドする。

- 関数の場合は、呼び出される時
- クラスの場合は、インスタンス化される時

### ジェネリックのアノテート

基本的には、 TypeScript は引数の型を推論して、ジェネリックにバインドしてくれるが、
ジェネリックにバインドされる型を自前でアノテートすることができる.
例えば、型引数 `T` と `U` を持つ `map` の場合

```ts
function map<T, U>(arr: T[], mapFunc: (item: T) => U): U[] {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result[i] = mapFunc(arr[i])
  }
  return result
}

map([1, 2, 3], _ => _ ** 2) // T は number U も number
map([1, 2, 3], _ => _ % 2 === 0) // T は number U は boolean
map<number, boolean>([1, 2, 3], _ => _ % 2 === 1)
// このように、一部だけ型引数を渡すことはできない
map<number>([1, 2, 3], _ => _ + 1)
```

自前でアノテートする例は例えば

```ts
const promise = new Promise(resolve => resolve(100))
promise.then(d => d + 1) // d の型が unknown に推論されているので、ここでエラー
```

```ts
const promise = new Promise<number>(resolve => resolve(100)) // promise が resolve された時の型をアノテート
promise.then(d => d + 1)
```


