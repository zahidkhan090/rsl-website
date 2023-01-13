import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-area ptb-100 pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 pb-4">
              <div className="single-footer-widget">
                <div>
                  <Link href="/">
                    <a className="navbar-brand">
                      <img
                        src="/images/Vector.png"
                        alt="logo"
                        width="70"
                        height="50"
                      />
                    </a>
                  </Link>
                </div>
                {/* <p>
                  Plan by day, week, or month, and see project status at a
                  glance. Search and filter to focus on anything from a single
                  project individual.
                </p> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-footer-widget pl-5">
                <h3
                  style={{
                    color: "#6CC8BF",
                    fontSize: "24px",
                    fontWeight: "400",
                  }}
                >
                  Explore
                </h3>

                <ul className="list">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#about">
                      <a>About us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Mission Vision & Values</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Our Promise</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services">
                      <a href="#">Services</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/#fleets">
                      <a>Fleet</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Insurance</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Rates</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <h3 style={{ color: "#6CC8BF" }}>Legal Notices</h3>

                <ul className="list">
                  <li>
                    <Link href="/terms-condition">
                      <a>Terms & Condition</a>
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
            </div> */}

            <div className="col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <h3
                  style={{
                    color: "#6CC8BF",
                    fontSize: "24px",
                    fontWeight: "400",
                  }}
                >
                  More
                </h3>

                <ul className="list">
                  <li>
                    <Link href="/blog-one">
                      <a>Blog / News</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>RSL Mobile Site</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact/#locateus">
                      <a>Locate Us</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <h3
                  style={{
                    color: "#6CC8BF",
                    fontSize: "24px",
                    fontWeight: "400",
                  }}
                >
                  Contact
                </h3>

                <ul className="list">
                  <li>
                    <Link href="#">
                      <a>Hotline: 600530005</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Head Office: +9714 39 777 46</a>
                    </Link>
                  </li>
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
                  <ul
                    style={{
                      display: "flex",
                    }}
                  >
                    <div className="col-sm-6 col-md-4">
                      <li
                        style={{
                          backgroundColor: "#374645",
                          marginRight: "4px",
                        }}
                      >
                        <a href="" target="_blank">
                          <img
                            src="/images/apple.jpg"
                            alt="ios"
                            className="downloadApp"
                          />
                        </a>
                      </li>
                    </div>
                    <div className="col-sm-6 col-md-4">
                      <li
                        style={{
                          backgroundColor: "#374645",
                        }}
                      >
                        <a href="" target="_blank">
                          <img
                            src="/images/googleplay.jpg"
                            alt="ios"
                            className="downloadApp"
                          />
                        </a>
                      </li>
                    </div>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          className="copyright-area"
          style={{
            backgroundColor: "rgba(36, 78, 74, 1)",
          }}
        >
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-6">
                <p style={{ color: "#ffffff" }}>
                  Copyright © 2022. Royal Smart Limousine. All Rights Reserved
                </p>
              </div>

              <div className="col-lg-6 col-md-6">
                <p style={{ color: "#ffffff" }}>
                  Member of Rashid Al Jabri Group of Companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
