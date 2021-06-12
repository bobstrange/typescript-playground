import { handler } from '../../../utils/handler_factory'
import notes from '../../../utils/in_memory_data'

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
