type Props = {
  name: string
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

export const Form = ({ name, onSubmit }: Props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit?.(event)
      }}
    >
      <h2>Account Info</h2>
      <p>{name}</p>
      <div>
        <button>Edit</button>
      </div>
    </form>
  )
}
