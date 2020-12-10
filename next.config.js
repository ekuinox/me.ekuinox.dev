/* eslint-disable @typescript-eslint/no-var-requires */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  target: 'serverless',
  pageExtensions: ['tsx', 'mdx'],
});
