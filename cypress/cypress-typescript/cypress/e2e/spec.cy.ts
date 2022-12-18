import { expect } from "chai"

describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://docs.cypress.io/guides/overview/why-cypress")
    cy.get("h1").should("be.visible", "Why Cypress?")
    cy.get("#docsearch").type("TypeScript")
  })
})
