import nc from 'next-connect'
import { NextApiRequest, NextApiResponse } from 'next'

import data from '../../../data/data'

const notes = data.notes

const handler = nc<NextApiRequest, NextApiResponse>()

handler
  .post((req, res) => {
    const note = {
      ...req.body,
      id: Date.now(),
    }
    notes.push(note)
    res.json({ data: note })
  })
  .get((req, res) => {
    res.json({ data: notes })
  })

export default handler
