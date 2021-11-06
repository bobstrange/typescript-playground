exports.createPages = ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: '/custom-page',
    component: require.resolve('./src/templates/CustomPage.js'),
  })
}
