/* eslint-disable @typescript-eslint/no-var-requires */

require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'es2017',
  },
})

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'memo',
    description: 'My programming memo',
    image:
      'https://res.cloudinary.com/dpdcr5cvy/image/upload/v1634398090/sample.jpg',
  },
  plugins: [],
}
