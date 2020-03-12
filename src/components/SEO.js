import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, image, keywords }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          defaultKeywords,
          defaultImage,
          url
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${image ? image : defaultImage}`,
        keywords: keywords || defaultKeywords,
        url: url
      };
      return (
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description}></meta>
          <meta name="keywords" content={seo.keywords}></meta>
          <meta name="robots" content="index,follow"></meta>
          <meta name="image" content={seo.image}></meta>
          <meta name="url" content={seo.url}></meta>
        </Helmet>
      );
    }}
  ></StaticQuery>
);

export default SEO;

const query = graphql`
  {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultKeywords: keywords
        defaultImage: image
        url
      }
    }
  }
`;
