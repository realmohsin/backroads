if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({
    path: '.env.development'
  })
}

module.exports = {
  siteMetadata: {
    title: 'Backroads',
    description:
      'Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure.',
    author: '@johndoe'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-transition-link'
  ]
}
