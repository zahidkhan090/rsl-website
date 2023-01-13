import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Investor/Banner';
import Content from '../components/Investor/Content';

class Investor extends React.Component {
  render() {
    return (
        <>
        <Navbar />

        <Banner />

        <Content/>
        
        <Footer />
    </>
    )
  }
}
 
export default Investor;