# TypeScript 4 Design Patterns and Best Practices

<https://www.amazon.com/dp/1800563426> の写経

この本を読む価値があるのか悩む、、、
まず TypeScript に Major Version の概念がないのに Before 4 とか話してるのやべー気がするんだが、、、

## Utility Types

### Record

A common use case is when you want to declare configuration types, as in the following example.


こんなことする？
普通に interface とか type とかで定義するような、、、

### Partial

If you want to create a type from exiting type but with all property as optional.

コンストラクタに渡す引数など、渡されなかった時にデフォルト値が指定されるようなケースで使用する

### Required

If you want to create a type from existing type but with all key as required.

### Pick

If you want to create a type with only specific properties selected out of the present ones.

Interface (Type) が大きめで、一部のプロパティを除外したい時に使用する。
