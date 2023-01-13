import React, { Component } from 'react';
import Link from 'next/link';

class Content extends Component {
  render() {
    return (
      <section className="contact-info-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="icofont-email"></i>
                </div>
                <h3>Mail Here</h3>
                <p>
                  <a href="mailto:info@royalsmartlimousine.com">
                    info@royalsmartlimousine.com
                  </a>
                </p>
                <p>
                  <a href="mailto:dispatch@royalsmartlimousine.com">
                    dispatch@royalsmartlimousine.com
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="icofont-google-map"></i>
                </div>
                <h3>Visit Here</h3>
                <p>
                  P O Box: 91001, <br /> Al Khawaneej 2, Dubai, UAE
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="contact-info-box">
                <div className="icon">
                  <i className="icofont-phone"></i>
                </div>
                <h3>Call Here</h3>
                <p>
                  <Link href="#">
                    <a>Hotline: 600530005</a>
                  </Link>
                </p>
                <p>
                  <Link href="#">
                    <a>Head Office: +971 4 3977746</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Content;
