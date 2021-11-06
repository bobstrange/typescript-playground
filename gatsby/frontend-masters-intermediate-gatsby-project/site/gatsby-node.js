const authors = require('./src/data/authors.json')
const books = require('./src/data/books.json')

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  authors.forEach((author) => {
    createNode({
      ...author,
      id: createNodeId(`author-${author.slug}`),
      parent: null,
      children: [],
      internal: {
        type: 'Author',
        content: JSON.stringify(author),
        contentDigest: createContentDigest(author),
      },
    })
  })

  books.forEach((book) => {
    createNode({
      ...book,
      id: createNodeId(`book-${book.isbn}`),
      parent: null,
      children: [],
      internal: {
        type: 'Book',
        content: JSON.stringify(book),
        contentDigest: createContentDigest(book),
      },
    })
  })
}

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: '/custom-page',
    component: require.resolve('./src/templates/CustomPage.js'),
    context: {
      title: 'A custom page',
      meta: {
        description: 'Example custom page',
      },
    },
  })
}
