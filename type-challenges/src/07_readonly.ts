interface Todo {
  title: string
  description: string
}

type MyReadonly<T> = { readonly [K in keyof T]: T[K] }
const todo: MyReadonly<Todo> = {
  title: 'Hi',
  description: 'Foo bar',
}

// @ts-expect-error title is readonly
todo.title = 'Hello'

// @ts-expect-error description is readonly
todo.description = 'Hello'
