# Programming TypeScript メモ

## よく忘れる部分

- リテラル型 -> ただ一つの値を表し、それ以外の値は受け入れない型
  - これいつも言葉を忘れるのでメモ
  - `string`
  - `'something'`, `'test'` -> 単なる `string` ではなく, `'something'`, `'test'` などの一つの型
- 構造的型付け
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

- インデックスシグネチャ
  - `[key: T]: U`

- Union は、 `A` or `B`
  - これは、 `A`、`B` のどちらか、だけでなく、両方のメンバになることができる
