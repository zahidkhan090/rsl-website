import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/ContactUs/BannerDriver';
import Content from '../components/ContactUs/Content';
import FormDriver from '../components/CreateForm/FormDriver';

class FormNewDriver extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Banner />

                {/* <Content /> */}

                <FormDriver />
                
                <Footer />
            </>
        );
    }
}

export default FormNewDriver;
