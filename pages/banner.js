import React from 'react';
import Navbar from '../components/TestBanner/Navbar1';
import Footer from '../components/TestBanner/Footer1';
import Banner from '../components/TestBanner/Banner1';
import Section2 from '../components/TestBanner/Section2';
import Section3 from '../components/TestBanner/Section3';
import Section4 from '../components/TestBanner/Section4';
import Section5 from '../components/TestBanner/Section5';
import Section6 from '../components/TestBanner/Section6';

class TestBanner extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Banner />

        <Section2 />

        <Section3 />

        <Section4 />

        {/* <Section5 /> */}

        <Section6 />

        <Footer />
      </>
    );
  }
}

export default TestBanner;
