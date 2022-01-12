# Narrowing

## `typeof` type guards

```typescript
function padLeft(paadding: number | string, input: string) {
  if (typeof padding === 'number') {
    return " ".repeat(padding) + input
  }
  return padding + input
}
```

JavaScript の `typeof` 演算子は、↓のような文字列を返す

- "string"
- "number"
- "bigint"
- "boolean"
- "symbol"
- "undefined"
- "object"
- "function"

↑を使って型の絞り込みを行うことができる。

歴史的経緯により、`typeof null` => "object" になる :-(

## Truthiness narrowing

以下の値が if 文で false に評価される

- 0
- NaN
- "" (the empty string)
- 0n (the bigint version of zero)
- null
- undefined

↑以外の値は true に評価される

`Boolean()` もしくは `!!` を使用して、値を boolean に変換できる

```typescript
Boolean("hoge")
!!"hoge"
```

`strs && typeof strs === 'object'` とすることで `strs` が `null` の時は、false と評価されるようにすることができる

```typescript
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === 'object') {
    for (const s of strs) {
      console.log(s)
    }
  } else if (typeof strs === 'string') {
    console.log(strs)
  }
}
```
