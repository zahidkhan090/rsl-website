import React from "react";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Main/Banner";
import Fleet from "../components/Main/Fleet";
import Services from "../components/Main/Services";
import About from "../components/Main/about";
import Blog from "../components/Main/Blog";
import Testimonials from "../components/Main/Testimonials";
import Partner from '../components/Saas/Partner';
import AllPartner from "../components/AllPartner";
import Instagram from "../components/Instagram";

class HomeTwo extends React.Component {
  render() {
    return (
      <>
        <Navbar />

        <Banner />

        <About />

        <Services />

        <Fleet />

     

        <AllPartner />

        <Testimonials />

        <Blog />

        <Instagram />

        <Footer />
      </>
    );
  }
}

export default HomeTwo;
