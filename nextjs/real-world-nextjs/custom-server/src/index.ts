import express from "express"
import { parse } from "url"
import next from "next"

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })

async function main() {
  try {
    await app.prepare()
    const handle = app.getRequestHandler()
    const server = express()

    server.get("*", (req, res) => {
      const url = parse(req.url, true)
      handle(req, res, url)
    })
    server.listen(3000, () => {
      console.log("listening on port 3000")
    })
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.stack)
    }
  }
}

main()
