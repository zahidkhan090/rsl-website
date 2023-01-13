import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Project/TermsBanner';
import DetailsContent from '../components/Project/TermsDetails';

class ProjectDetails extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Banner />
                
                <DetailsContent />
                
                <Footer />
            </>
        );
    }
}

export default ProjectDetails;
