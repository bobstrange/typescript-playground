describe('TDD Booklist Application', () => {
  it('Visits the TDD Booklist', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test=heading]').contains('TDD Booklist')
  })

  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test=book-list]')
    cy.get('.book-item').should('have.length', 2)
  })
})
