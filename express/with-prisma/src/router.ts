import { Router } from "express"

const router = Router()

router.get("/products", (req, res) => {
  res.json({ message: "Hello" })
})
router.get("/products/:id", () => {})
router.put("/products/:id", () => {})
router.post("/products", () => {})
router.delete("/products/:id", () => {})

router.get("/updates", () => {})
router.get("/updates/:id", () => {})
router.put("/updates/:id", () => {})
router.post("/updates", () => {})
router.delete("/updates/:id", () => {})

router.get("/update_details", () => {})
router.get("/update_details/:id", () => {})
router.put("/update_details/:id", () => {})
router.post("/update_details", () => {})
router.delete("/update_details/:id", () => {})

export { router }
