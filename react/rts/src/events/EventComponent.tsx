export const EventComponent: React.FC = () => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(event)
  }

  return (
    <div>
      <input type="text" onChange={onChange} />
    </div>
  )
}
