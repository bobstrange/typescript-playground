describe('TDD Booklist Application', () => {
  it('Visits the TDD Booklist', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test=heading]').contains('TDD Booklist')
  })

  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test=book-list]')
    cy.get('.book-item').should('have.length', 2)
    cy.get('[data-test=book-list] > :nth-child(1)').should(
      'have.text',
      'Refactoring'
    )
    cy.get('[data-test=book-list] > :nth-child(2)').should(
      'have.text',
      'Clean Code'
    )
  })
})
