/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'My simple Gatsby site',
    description: 'Nice and first Gatsby site',
    author: 'Magdalena Oziębło',
    person: { name: 'Magda', age: 23 },
    simpleData: ['item 1', 'item 2'],
    complexData: [
      { name: 'Magda', age: 23 },
      { name: 'Olaf', age: 33 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
