module.exports = {
  presets: ['@babel/env'],
  plugins: [
    ['@babel/plugin-transform-typescript', { isTSX: true }],
    '@babel/plugin-transform-react-jsx',
  ],
}
