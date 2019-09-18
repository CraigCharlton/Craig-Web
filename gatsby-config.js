module.exports = {
  siteMetadata: {
    title: 'Craig Charlton'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `links`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/blogs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/master-ball.png`
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`
  ]
};
