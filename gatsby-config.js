module.exports = {
  siteMetadata: {
    title: "Higgins & Friends",
    url: "https://www.higginsfriends.com",
    image: "/metadata-image.svg",
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
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
