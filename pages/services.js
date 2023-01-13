import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Services/Banner';
import ServiceContent from '../components/Services/ServiceContent';

class Services extends Component {
  render() {
    return (
      <>
        <Navbar />

        {/* <Banner /> */}

        <ServiceContent />

        <Footer />
      </>
    );
  }
}

export default Services;
