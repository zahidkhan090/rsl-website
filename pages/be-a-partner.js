import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/BeaPartner/Banner';
import Partner from '../components/BeaPartner/Partner';

class AboutTwo extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Banner />

        <Partner />

        <Footer />
      </>
    );
  }
}

export default AboutTwo;
