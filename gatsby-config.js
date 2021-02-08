module.exports = {
  siteMetadata: {
    title: "Higgins & Friends",
  },
  plugins: [
    `gatsby-plugin-emotion`,
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Higgins & Friends`,
        short_name: `Higgins & Friends`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/dog-badge.png`,
      },
    },
  ],
};
