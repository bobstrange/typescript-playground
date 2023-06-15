import { Router } from "express"
import { query, body, oneOf } from "express-validator"
import { handleInputError } from "./modules/middleware"

const router = Router()

const nameValidateChain = () => query("name").isString().withMessage("Name must be a string")

router.get("/products", (req, res) => {
  res.json({ message: req.something_secret })
})
router.get("/products/:id", () => {})
router.put("/products/:id", nameValidateChain(), handleInputError, (req, res) => {})
router.post("/products", nameValidateChain(), handleInputError, (req, res) => {})
router.delete("/products/:id", () => {})

router.get("/updates", () => {})
router.get("/updates/:id", () => {})
router.put(
  "/updates/:id",
  body("title").optional(),
  body("body").optional(),
  body("status").isIn(["IN_PROGRESS", "SHIPPED", "DEPRECATED"]).optional(
  body("version").optional(),
  () => {}
)
router.post("/updates", () => {})
router.delete("/updates/:id", () => {})

router.get("/update_details", () => {})
router.get("/update_details/:id", () => {})
router.put("/update_details/:id", () => {})
router.post("/update_details", () => {})
router.delete("/update_details/:id", () => {})

export { router }
