module.exports = {
  siteMetadata: {
    title: 'Craig Charlton'
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/master-ball.png`
      },
    }
  ]
};
