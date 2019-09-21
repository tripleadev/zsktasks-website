module.exports = {
  siteMetadata: {
    title: `zskTasks`,
    description: `School app for aggregating tasks.`,
    author: `@mbdjj, @datejer, @AdamSiekierski, @AleksanderSkubala`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zskTasks`,
        short_name: `zskTasks`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#28146D`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "zskTasks",
        short_name: `zskTasks`,
        start_url: `/`,
        background_color: `#28146d`,
        theme_color: `#28146d`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
