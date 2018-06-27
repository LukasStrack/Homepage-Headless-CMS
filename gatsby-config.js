module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'as7rlolwgmwd',
        accessToken: '847dbeffad5ae684355d467a8ef3db801945b7910021990d510e674d63c42435'
      }
    },
    `gatsby-plugin-react-helmet`
  ],
}
