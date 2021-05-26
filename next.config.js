const rehypePrism = require("@mapbox/rehype-prism");
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism]
  },
});

module.exports = withMDX({
  target: 'serverless',
  pageExtensions: ['tsx', 'mdx'],
});
