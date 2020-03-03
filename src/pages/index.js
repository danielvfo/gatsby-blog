import React from 'react';
import { graphql } from 'gatsby';
import PrimaryLayout from '../layouts/PrimaryLayout';
import Post from '../components/Post';

export default ({ data }) => {
  console.log(data);
  return (
    <PrimaryLayout column="col-xs-6">
      <Post
        title="This is our first post"
        excerpt="Mussum Ipsum, cacilds vidis litro abertis. Si num tem leite então bota uma pinga aí cumpadi! Interagi no mé, cursus quis, vehicula ac nisi. Casamentiss faiz malandris se pirulitá. Paisis, filhis, espiritis santis. "
      ></Post>
    </PrimaryLayout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          keywords
          image
        }
        excerpt
        html
      }
    }
  }
`;
