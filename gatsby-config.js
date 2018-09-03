const conf = require('./private/conf.json')

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-eventbrite',
      options: {
        organizationId: conf.organizationId,
        accessToken: conf.accessToken,
        entities: conf.entities,
      },
    },
  ],
}
