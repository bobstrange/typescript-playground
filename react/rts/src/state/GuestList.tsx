import { useState } from 'react'
import styles from './GuestList.module.css'

export const GuestList: React.FC = () => {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState<string[]>([])

  const onClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setName('')
    setGuests([...guests, name])
  }

  return (
    <div>
      <h3>Guest List</h3>
      <input
        className={styles.input}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className={styles.button} onClick={onClick}>
        Add Guest
      </button>
    </div>
  )
}
