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
