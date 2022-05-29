import App from "./App"
import { render, screen, userEvent } from "./utils/test-utils"

it("renders title", () => {
  render(<App />)
  expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument()
})
