import React, { Component } from "react";

class AboutContent extends Component {
  render() {
    return (
      <section className="about-area py-5 ">
        {/* <div className="container"> */}
        <div className="row g-0 h-100 justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-content about-content-custom">
              <div className="section-title">
                <div className="section-title-about">
                  <p
                    style={{
                      color: "#6cc7c0",
                    }}
                  >
                    ROYAL SMART LIMOUSINE
                  </p>
                  <h2 className="py-3">About us</h2>
                </div>
                {/* <div className="bar"></div> */}
                <p>
                  Royal Smart Limousine LLC (formerly known as Royal Luxury
                  Transport LLC) is a member of the Rashid Al Jabri Group of
                  Companies.
                </p>
                <br></br>
                <p>
                  It was founded by Rashid Al Jabri in the year 2002 to cater
                  for the growing need of luxurious, reliable, and readily
                  available transport in the growing local and expat community
                  by providing 24-hour limousine service.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <img
              src="/images/about_car.png"
              className="about-car"
              alt="image"
            />
          </div>
        </div>
        {/* </div> */}

        {/* <div className="about-inner-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="about-text">
                                    <h3>Our Company</h3>
                                    <p>Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="about-text">
                                    <h3>Who we are</h3>
                                    <p>Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="about-text">
                                    <h3>What we Value</h3>
                                    <p>Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="about-text">
                                    <h3>Contact Us</h3>
                                    <p>Lorem ipsum dolor sit amet, con sectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
      </section>
    );
  }
}

export default AboutContent;
