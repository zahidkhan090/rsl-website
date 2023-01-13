import React, { Component } from 'react';

class AboutContentTwo extends Component {
  render() {
    return (
      <section
        className="features-area marketing-features ptb-100"
        style={{
          background: 'rgb(0,0,0)',
          background:
            'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
        }}
      >
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12">
              <img src="/images/mercedes_PNG80171.png" alt="image" />
            </div>
            <div className="col-lg-6 col-md-12 testBanner-clr">
              <div className="features-holder-content">
                <div className="section-title">
                  <h2>ABOUT US</h2>
                  <div className="bar"></div>
                  <p>
                    Royal Smart Limousine LLC (formerly known as Royal Luxury
                    Transport LLC) is a member of the Rashid Al Jabri Group of
                    Companies. It was founded by Rashid Al Jabri in the year
                    2002 to cater for the growing need of luxurious, reliable,
                    and readily available transport in the growing local and
                    expat community by providing 24-hour limousine service.
                  </p>
                </div>

                <p>
                  In the year 2015, the CEO, Rashid Al Jabri, combined Dubai’s
                  remarkable foundation of traditional values, development, and
                  technology with his passion for adventure, innovation,
                  superior customer service and life-long entrepreneurial
                  spirit, making a brilliant decision to rebrand the traditional
                  classic transport business to a smarter, more current, trendy
                  and forward looking luxury transportation service while
                  maintaining the exceptional personalized, high-level and
                  quality driven foundation bringing forth the new company
                  slogan - ‘The Smart Experience.’
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutContentTwo;
