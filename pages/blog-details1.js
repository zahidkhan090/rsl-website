import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import BannerTwo from '../components/Blog/BannerTwo1';
import DetailsContent from '../components/Blog/DetailsContent1';
import Services from '../components/Saas/WorkProcess1';

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

        {/* <Services /> */}

        <Footer />
      </>
    );
  }
}

export default BlogDetails;
