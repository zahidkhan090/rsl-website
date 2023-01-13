import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import BannerTwo from '../components/Blog/BannerTwo';
import DetailsContent from '../components/Blog/DetailsContent';

class BlogDetails extends Component {
  static getInitialProps({ query }) {
    return { query };
  }
  render() {
    return (
      <>
        <Navbar />

        <BannerTwo />

        <DetailsContent props={this.props.query} />

        <Footer />
      </>
    );
  }
}

export default BlogDetails;
