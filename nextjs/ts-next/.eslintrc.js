/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next', 'prettier'],
  settings: {
    next: {
      rootDir: 'src',
    },
  },
}
