import express, { RequestHandler } from 'express'
import { findAll, find, create, update, remove } from './item.service'
import { ItemDTO } from './item.interface'

export const itemRouter = express.Router()

const findAllHandler: RequestHandler = async (req, res) => {
  try {
    const items = await findAll()
    res.status(200).json(items)
  } catch (error) {
    res.status(500).json({ errors: [error.message] })
  }
}

const findHandler: RequestHandler = async (req, res) => {
  const id: number = parseInt(req.params.id, 10)

  try {
    const item = await find(id)
    if (item) {
      return res.status(200).json(item)
    }
    res.status(404).json({ errors: ['Item not found'] })
  } catch (error) {
    res.status(500).json({ errors: [error.message] })
  }
}

const createHandler: RequestHandler = async (req, res) => {
  const item: ItemDTO = req.body

  try {
    const newItem = await create(item)
    res.status(201).json(newItem)
  } catch (error) {
    res.status(500).json({ errors: [error.message] })
  }
}

const updateHandler: RequestHandler = async (req, res) => {
  const id = parseInt(req.params.id, 10)
  const item: ItemDTO = req.body

  try {
    const updated = await update({ id, update: item })
    res.status(200).json(updated)
  } catch (error) {
    res.status(500).json({ errors: [error.message] })
  }
}

const removeHandler: RequestHandler = async (req, res) => {
  const id = parseInt(req.params.id, 10)

  try {
    const found = await find(id)
    if (found) {
      await remove(id)
      return res.sendStatus(204)
    }
    res.status(404).json({ errors: ['Item not found'] })
  } catch (e) {
    res.status(500).json({ errors: [e.message] })
  }
}

itemRouter.get('/', findAllHandler)
itemRouter.get('/:id', findHandler)
itemRouter.post('/', createHandler)
itemRouter.put('/:id', updateHandler)
itemRouter.delete('/:id', removeHandler)
