import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
  render() {
    return (
      <footer
        className="footer-area ptb-100 pb-0 bg-image"
        style={{
          background: 'rgb(0,0,0)',
          background:
            'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
        }}
      >
        <div className="container">
          <div className="row footer-clr">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <Link href="/main">
                  <a className="logo">
                    <img
                      src="/images/logorsl1.png"
                      style={{ width: '80px' }}
                      alt="logo2"
                    />
                  </a>
                </Link>
                <p>
                  Plan by day, week, or month, and see project status at a
                  glance. Search and filter to focus on anything from a single
                  project individual.
                </p>

                <ul className="social-list">
                  <li>
                    <a
                      href="https://www.facebook.com/royalsmartlimo"
                      target="_blank"
                    >
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/royalsmartlimo"
                      target="_blank"
                    >
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/royalsmartlimousine/"
                      target="_blank"
                    >
                      <i className="icofont-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGe6RixtAtVzAAAAYTxL4RwOO5FmHGb5qlpj_cz2GaK0JSnJFJLC18tEdx1ohwnTaksDiguzz-LWxTPzRQAXa8clN-AMp0o2ITPUdy-Mogic0JODGZM2vD6BdAIBRfmd0G5f9M=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Froyal-smart-limousine-llc"
                      target="_blank"
                    >
                      <i className="icofont-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3>Company</h3>

                <ul className="list">
                  <li>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Careers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Awards</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a href="#">Locations</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Login</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Products</h3>

                <ul className="list">
                  <li>
                    <Link href="#">
                      <a>Integrations</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>API</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Pricing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Sign Up</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Release Notes</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3>Support</h3>

                <ul className="list">
                  <li>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>FAQ</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-details/?id=1">
                      <a>Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Press</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6">
                {/* <p>
                  Copyright @Mojosa. All rights reserved{' '}
                  <a href="http://envytheme.com/" target="_blank">
                    EnvyTheme
                  </a>
                </p> */}
                <p>
                  Copyright © 2022. Royal Smart Limousine. All Rights Reserved
                  {/* <a href="http://envytheme.com/" target="_blank">
                    EnvyTheme
                  </a> */}
                </p>
              </div>

              <div className="col-lg-6 col-md-6">
                <ul>
                  <li>
                    <Link href="/terms-condition">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/refund-policy">
                      <a>Refund Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
