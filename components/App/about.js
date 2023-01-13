import React, { Component } from 'react';
import Link from 'next/link';

class Features extends Component {
  render() {
    return (
      <section
        className="features-area app-features"
        style={{ paddingTop: '100px' }}
      >
        <div className="container">
          <div className="section-title">
            <h2>ABOUT US</h2>
            <div className="bar"></div>
            <p>
              Royal Smart Limousine LLC (formerly known as Royal Luxury
              Transport LLC) is a member of the Rashid Al Jabri Group of
              Companies. It was founded by Rashid Al Jabri in the year 2002 to
              cater for the growing need of luxurious, reliable, and readily
              available transport in the growing local and expat community by
              providing 24-hour limousine service.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/about-two">
              <button type="submit" className="btn btn-primary">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
