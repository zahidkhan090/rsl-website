import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Investor/Banner';
import About from "../components/Main/about";
import Form from '../components/CreateForm/Form';
import Fleet from "../components/Main/Fleet";
import Content from '../components/InvestorDriver/Content';

class Investor extends React.Component {
  render() {
    return (
        <>
        <Navbar />

        <Banner />

        <About />
        <Form />
        <Fleet />
        <Content/>
        <Footer />
    </>
    )
  }
}
 
export default Investor;