/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby Blog',
    description:
      'Blog criado utilizando React e Gatsby afins de compartilhar conteúdo específicos de Tecnologia da Informação. Todo o conteúdo é extraído via WordPress.',
    keywords:
      'gatsby, gatsbyjs, react, wordpress, blog, learn, aprender, criar, create',
    image:
      'https://www.gatsbyjs.org/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png',
    url: 'https://gatsby-blog.azurewebsites.net'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
        ignore: [`**/\.*`] // ignore files starting with a dot
      }
    },
    { resolve: `gatsby-transformer-remark` },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `soengade.wordpress.com`,
        protocol: `https`,
        hostingWPCOM: true
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Blog`,
        short_name: `Gatsby`,
        start_url: `/`,
        background_color: `#f8f9fa`,
        theme_color: `#FFFFFF`,
        display: `standalone`
      }
    },
    `gatsby-plugin-offline`
  ]
};
