type World = 'world'
type Greeting = `hello ${World}`

type Horizontal = 'Left' | 'Right'
type Vertical = 'Top' | 'Bottom'

type Corner = `${Vertical}${Horizontal}`
// type Corner = 'TopLeft' | 'TopRight' | 'BottomLeft' | 'BottomRight'

type PropEventSource<Type> = {
  on(eventName: `${string & keyof Type}Changed`): Promise<void>
}

declare function makeWatchedObject<Type>(
  obj: Type
): Type & PropEventSource<Type>

const user = makeWatchedObject({
  firstName: 'John',
  lastName: 'Doe',
  age: 26,
})

user.on('firstNameChanged')

// @ts-expect-error 間違えたキーを渡したときに型チェックに引っかかる
user.on('firstName')
