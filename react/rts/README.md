# React and TypeScript の写経

<https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project>

## 基本

- Props の型付け
- State の型付け
- Event Handler の型付け

### Props の型付け

```typescript
type Props = {
  propA: string
}
const Component = ({ propA }: Props) => {
  return <div>Hi {propA}</div>
}
```

↑だけだと Component が React Component であることを TypeScript に伝えられていないので、型付けをする

```typescript
type Props = {
  propA: string
}
const Component: React.FC<Props> = ({ propA }) => {
  return <div>Hi {propA}</div>
}
```

Component に onClick ハンドラを Props で受け渡す場合の型

```typescript
type ChildProps = {
  onClick: () => void
}
```

引数、戻り値が無い巻数型になる

### State の型付け

`useState` で初期化するときに、型推論で解決出来ない場合があるので、型引数を渡す必要があるケースがある。

```typescript
// この状態だと、users がなにかの配列であることはわかるが、何の配列であるかはわからない
const [users, setUsers] = useState([])

// 型引数を渡せば、 User[] であることがわかる
const [users, setUsers] = useState<User[]>([])
```


