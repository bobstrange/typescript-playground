/// <reference types="cypress" />

Cypress.Commands.add("dataTest", (selectorName) => {
  return cy.get(`[data-test=${selectorName}]`)
})
