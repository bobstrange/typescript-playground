describe("Todo list", () => {
  it("should store input text as value", () => {
    cy.visit("http://localhost:5174/")
    cy.get('[data-testid="todo-input"]').type("first todo item")
    cy.get('[data-testid="todo-input"]').should("have.value", "first todo item")
  })
})
