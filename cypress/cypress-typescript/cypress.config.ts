import { defineConfig } from "cypress"

export default defineConfig({
  viewportWidth: 500,
  viewportHeight: 700,
  e2e: {
    baseUrl: "http://localhost:3000",
  },
})
