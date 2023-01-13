import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import BannerTwo from '../components/Shop/BannerTwo';
import DetailsBody from '../components/Shop/DetailsBody1';

class ShopOne extends Component {
  static getInitialProps({ query }) {
    return { query };
  }
  render() {
    return (
      <>
        <Navbar />

        <BannerTwo />

        <DetailsBody props={this.props.query} />

        <Footer />
      </>
    );
  }
}

export default ShopOne;
