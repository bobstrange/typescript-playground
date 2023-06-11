import express from "express"
import morgan from "morgan"

import { router } from "./router"

const app = express()
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  console.log("Hello")
  res.status(200)
  res.json({ message: "Hello" })
})

app.use("/api", router)

export { app }
