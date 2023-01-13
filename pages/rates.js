import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Rates/Banner';
import Partner from '../components/Rates/Partner';

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
