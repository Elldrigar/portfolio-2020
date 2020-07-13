module.exports = {
  siteMetadata: {
    title: 'Gawron.me Portfolio',
    description: 'Portfolio plus blog',
    author: '@Elldrigar',
    twitterUsername: '@Elldrigar',
    image: '/twitter-img.png',
    siteUrl: 'https://www.gawron.me/',
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            subsets: [`latin-ext`],
            variants: [`100`, `300`, `500`],
          }
        ],
      },
    },
  ],
}
