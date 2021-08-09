import axios from 'axios'

before(() => {
  return axios
    .delete('http://localhost:8080/books?_cleanup=true')
    .catch((err) => err)
})

describe('TDD Booklist Application', () => {
  beforeEach(() => {
    const books = [
      { name: 'Refactoring', id: 1 },
      { name: 'Clean Code', id: 2 },
    ]

    return books.map((book) =>
      axios.post('http://localhost:8080/books', book, {
        headers: { 'Content-Type': 'application/json' },
      })
    )
  })

  afterEach(() => {
    return axios
      .delete('http://localhost:8080/books?_cleanup=true')
      .catch((err) => err)
  })

  it('Visits the TDD Booklist', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test=heading]').contains('TDD Booklist')
  })

  it('Shows a book list', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test=book-list]')
    cy.get('.book-item').should('have.length', 2)
    cy.get('[data-test=book-list] > :nth-child(1) > .title').should(
      'have.text',
      'Refactoring'
    )
    cy.get('[data-test=book-list] > :nth-child(2) > .title').should(
      'have.text',
      'Clean Code'
    )
  })
})
