import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogpostLayout = props => (
  <div>
    <Header title="Header of Index Page"></Header>
    <div className="container">
      <div className="row justify-content-md-center">
        <div>Hello, this is a blogpost page!</div>
      </div>
    </div>
    <Footer></Footer>
  </div>
);

export default BlogpostLayout;
