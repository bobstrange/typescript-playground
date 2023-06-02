import { userEvent, render, screen } from "../test/test-utils"
import Add from "../components/Add"

describe("todo add", () => {
  test("storing input value", async () => {
    render(<Add />)

    await userEvent.type(screen.getByTestId("todo-input"), "second todo item")
    expect(screen.getByDisplayValue("second todo item")).toBeInTheDocument()
  })
})
