module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'as7rlolwgmwd',
        accessToken: '93ccd6984977c29ee88e004f030b44e0f645eaea1cc2d5a8bb8df989d2650851',
		host: 'preview.contentful.com'
      }
    },
    `gatsby-plugin-react-helmet`
  ],
  pathPrefix: `//www.telekom.de/resources/gatsby/`,
}
