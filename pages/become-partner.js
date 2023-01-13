import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/ContactUs/Banner';
import Content from '../components/ContactUs/Content';
import Form from '../components/CreateForm/Form';

class FormNew extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Banner />

                {/* <Content /> */}

                <Form />
                
                <Footer />
            </>
        );
    }
}

export default FormNew;
