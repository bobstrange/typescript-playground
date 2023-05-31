import App from "./App"
import { render, screen, userEvent } from "./test/test-utils"

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<App />)
    expect(screen.getByRole("heading", { name: "Test Page" })).toBeInTheDocument()
  })
})
