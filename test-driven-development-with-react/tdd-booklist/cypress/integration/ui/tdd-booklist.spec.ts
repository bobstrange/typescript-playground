import axios from 'axios'

before(() => {
  return axios
    .delete('http://localhost:8080/books?_cleanup=true')
    .catch((err) => err)
})

describe('TDD Booklist Application', () => {
  beforeEach(() => {
    feedStubBooks()
    visitApp()
  })

  afterEach(() => {
    cleanupBooks()
  })

  it('Visits the TDD Booklist', () => {
    checkAppTitle()
  })

  it('Shows a book list', () => {
    visitApp()
    checkBookList(['Refactoring', 'Clean Code', 'Clean Architecture'])
  })

  it('Goes to the detail page', () => {
    visitApp()
    visitNthBook(0)
    checkBookDetail({ id: 1, title: 'Refactoring' })
  })

  it('Searches for a title', () => {
    visitApp()
    checkBookList(['Refactoring', 'Clean Code', 'Clean Architecture'])
    performSearch('Refactoring')
    checkBookList(['Refactoring'])
  })
})

const feedStubBooks = () => {
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
}

const cleanupBooks = () => {
  return axios
    .delete('http://localhost:8080/books?_cleanup=true')
    .catch((err) => err)
}

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

const visitNthBook = (n: number) => {
  cy.get('.book-item').contains('View Details').eq(0).click()
}

const checkBookDetail = (expected: { id: number; title: string }) => {
  cy.url().should('include', `/books/${expected.id}`)
  cy.get('.book-title').should('have.text', expected.title)
}

const performSearch = (searchText: string) => {
  cy.get('[data-test="search"] input').type(searchText)
}
