import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import innertext from 'innertext';

const BlogpostLayout = ({ data }) => {
  const post = data.wordpressPost;
  return (
    <div>
      <SEO
        title={innertext(post.title)}
        description={innertext(post.excerpt)}
        image={post.jetpack_featured_media_url}
        keywords={post.categories.map(category => category.name).join(', ')}
      ></SEO>
      <Header></Header>
      <main>
        <div className="container">
          <div className="row justify-content-md-center">
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default BlogpostLayout;

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      content
      title
      jetpack_featured_media_url
      categories {
        name
      }
      excerpt
    }
  }
`;
