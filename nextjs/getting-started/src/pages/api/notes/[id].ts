import nc from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'
import data from '../../../data/data'

const notes = data.notes

const fetchNote = (id: string) => notes.find((n) => n.id === parseInt(id))
const fetchIndex = (id: string) => notes.findIndex((n) => n.id === parseInt(id))

const handler = nc<NextApiRequest, NextApiResponse>()
handler
  .get((req, res) => {
    const { id } = req.query
    if (!Array.isArray(id)) {
      const note = fetchNote(id)
      console.log(notes)
      console.log(id)
      if (note) {
        res.json({ data: note })
        return
      }
    }
    res.status(404).end()
  })
  .patch((req, res) => {
    const { id } = req.query
    if (!Array.isArray(id)) {
      const note = fetchNote(id)
      if (note) {
        const updated = {
          ...note,
          ...req.body,
        }
        const index = fetchIndex(id)
        notes[index] = updated
        res.json({ data: updated })
        return
      }
    }
    res.status(404).end()
  })
  .delete((req, res) => {
    const { id } = req.query
    if (!Array.isArray(id)) {
      const index = fetchIndex(id)
      if (index) {
        notes.splice(index, 1)

        res.json({ data: id })
        return
      }
    }
    res.status(404).end()
  })

export default handler
