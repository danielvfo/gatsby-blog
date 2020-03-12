import React from 'react';
import { graphql } from 'gatsby';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Post from '../components/Post';
import { Helmet } from 'react-helmet';

export default ({ data }) => {
  console.log(data);
  return (
    <PrimaryLayout column="col-xs-6">
      <Helmet>
        <title>Gatsby Blog</title>
        <meta
          name="description"
          content="Blog criado utilizando React e Gatsby afins de compartilhar conteúdo específicos de Tecnologia da Informação. Todo o conteúdo é extraído via WordPress."
        ></meta>
        <meta
          name="keywords"
          content="gatsby, gatsbyjs, react, wordpress, blog, learn, aprender, criar, create"
        ></meta>
        <meta name="robots" content="index,follow"></meta>
      </Helmet>
      {data.allWordpressPost.nodes.map(node => (
        <Post
          image={node.featured_media.source_url}
          title={node.title}
          excerpt={node.excerpt}
          readMore={node.slug}
        ></Post>
      ))}
    </PrimaryLayout>
  );
};

export const query = graphql`
  {
    allWordpressPost {
      nodes {
        slug
        title
        excerpt
        featured_media {
          source_url
        }
      }
    }
  }
`;
