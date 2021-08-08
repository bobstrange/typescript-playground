describe('TDD Booklist Application', () => {
  it('Visits the TDD Booklist', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test=heading]').contains('TDD Booklist')
  })
})
