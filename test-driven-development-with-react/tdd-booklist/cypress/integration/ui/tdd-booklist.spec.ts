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
      { name: 'Clean Architecture', id: 3 },
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
    visitApp()
    checkAppTitle()
  })

  it('Shows a book list', () => {
    visitApp()
    checkBookList(['Refactoring', 'Clean Code', 'Clean Architecture'])
  })

  it('Goes to the detail page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.book-item').contains('View Details').eq(0).click()
    cy.url().should('include', '/books/1')
    cy.get('.book-title').should('have.text', 'Refactoring')
  })

  it('Searches for a title', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.book-item').should('have.length', 3)
    cy.get('[data-test="search"] input').type('Refactoring')
    cy.get('.book-item').should('have.length', 1)
    cy.get('.book-item').eq(0).contains('Refactoring')
  })
})

const visitApp = () => {
  cy.visit('http://localhost:3000/')
}

const checkAppTitle = () => {
  cy.get('[data-test=heading]').contains('TDD Booklist')
}

const checkBookList = (expectedBooks: string[]) => {
  cy.get('[data-test=book-list]')
  cy.get('.book-item').should((books) => {
    expect(books).to.have.length(expectedBooks.length)
    const titles = [...books].map((x) => x.querySelector('h2').innerHTML)
    expect(titles).to.deep.equal(expectedBooks)
  })
}
