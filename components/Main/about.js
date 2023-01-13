import React, { Component } from 'react';
import AboutContent from '../../components/About/AboutContent';
import Link from 'next/link';

class Features extends Component {
  render() {
    return (
      <section
        className="features-area app-features"
        style={{ paddingTop: '40px' }}
        id="about"
      >
         <AboutContent />
      </section>
    );
  }
}

export default Features;
