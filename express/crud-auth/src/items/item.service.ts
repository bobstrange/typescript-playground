import { ItemDTO, Item, Items } from './item.interface'

/**
 * In-Memory Store
 */

const items: Items = {
  1: {
    id: 1,
    name: 'Burger',
    price: 599,
    description: 'Tasty',
    image: 'https://cdn.auth0.com/blog/whatabyte/burger-sm.png',
  },
  2: {
    id: 2,
    name: 'Pizza',
    price: 299,
    description: 'Cheesy',
    image: 'https://cdn.auth0.com/blog/whatabyte/pizza-sm.png',
  },
  3: {
    id: 3,
    name: 'Tea',
    price: 199,
    description: 'Informative',
    image: 'https://cdn.auth0.com/blog/whatabyte/tea-sm.png',
  },
}

export const findAll = async (): Promise<Item[]> => {
  return Object.values(items) as Item[]
}

export const find = async (id: number): Promise<Item | null> => {
  const found = items[id]
  if (!found) {
    return null
  }
  return found
}

export const create = async (item: ItemDTO): Promise<Item> => {
  const id = new Date().valueOf()

  const newItem = { id, ...item }

  items[id] = newItem
  return newItem
}

type ItemUpdate = {
  id: number
  update: ItemDTO
}

export const update = async ({
  id,
  update,
}: ItemUpdate): Promise<Item | null> => {
  const found = await find(id)

  if (!found) {
    return null
  }

  const updated = { ...found, ...update }
  items[id] = updated

  return updated
}

export const remove = async (id: number): Promise<void> => {
  const found = await find(id)

  if (!found) {
    throw new Error('Item not found')
  }

  delete items[id]
}
