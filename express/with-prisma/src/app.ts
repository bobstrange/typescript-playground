import express from "express"
import morgan from "morgan"
import cors from "cors"

import { router } from "./router"
import { protect } from "./modules/auth"
import { createUser, signin } from "./handlers/user"

const app = express()
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/", (req, res) => {
  console.log("Hello")
  res.status(200)
  res.json({ message: "Hello" })
})

app.use("/api", protect, router)
app.post("/user", createUser)
app.post("/signin", signin)

export { app }
