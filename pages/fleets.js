import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Shop/Banner1';
import ShopVOne from '../components/Shop/ShopVOne1';

class ShopOne extends Component {
  render() {
    return (
      <>
        <Navbar />

        <Banner />

        <ShopVOne />

        <Footer />
      </>
    );
  }
}

export default ShopOne;
