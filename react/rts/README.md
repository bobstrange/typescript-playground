# React and TypeScript の写経

<https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project>

## 基本

- Props の型付け
- State の型付け
- Event Handler の型付け

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
