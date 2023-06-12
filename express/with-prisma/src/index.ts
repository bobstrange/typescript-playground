import * as dotenv from "dotenv"
dotenv.config()

import { app } from "./app"

const port = 8080

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
