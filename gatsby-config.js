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
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://higginsfriends.us21.list-manage.com/subscribe/post?u=631bfc33f44064c41b59afe9b&amp;id=5e6a2981ca&amp;f_id=0060cae1f0',
          timeout: 3500
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Higgins & Friends`,
        short_name: `Higgins & Friends`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/metadata-image.svg`,
      },
    },
  ],
};
