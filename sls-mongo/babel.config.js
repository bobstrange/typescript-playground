module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 12 } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: './',
        alias: {
          '~': './src',
          '~libs': './src/libs',
          '~services': './src/services',
        },
      },
    ],
  ],
}
