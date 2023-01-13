import React, { Component } from "react";
import Link from "next/link";

class Features extends Component {
  render() {
    return (
      <section className="features-area marketing-features ptb-100">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-holder-box">
                    <img src="/images/payment-img1.png" alt="image" />
                    <h3>Flexible Payment</h3>
                    <p>Pay with card, cash or wallet.</p>
                  </div>

                  <div className="single-holder-box mt-30">
                    <img src="/images/payment-img2.png" alt="image" />
                    <h3>Card Payment</h3>
                    <p>Add one or more cards for payment.</p>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-holder-box mt-50">
                    <img src="/images/payment-img3.png" alt="image" />
                    <h3>Inbuilt Wallet</h3>
                    <p>Load your RSL App wallet for easy payments.</p>
                  </div>

                  <div className="single-holder-box mt-30">
                    <img src="/images/payment-img4.png" alt="image" />
                    <h3>Discounts</h3>
                    <p>Use RSL promo codes, save big.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div className="features-holder-content">
                <div className="section-title">
                  <h2>Ridehailing has never been so rewarding</h2>
                  <div className="bar"></div>
                  <p>
                    Book a ride thus always available, always affordable &
                    always luxurious!
                  </p>
                </div>

                <p>
                  Book a ride thus always available, always affordable & always
                  luxurious!Book a ride thus always available, always affordable
                  & always luxurious!
                </p>

                <Link href="/services">
                  <a className="btn btn-primary">Our Services</a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="features-inner-area">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="features-inner-content">
                  <div className="features-item">
                    <div className="icon">
                      <i className="icofont-ui-call"></i>
                    </div>
                    <h3>Free Calling Service</h3>
                    <p>
                      Plan by the day, week, or month, and see project status at
                      a glance. Search and filter to focus on anything from a
                      single project to a person's workload.
                    </p>
                  </div>

                  <div className="features-item">
                    <div className="icon">
                      <i className="icofont-gift"></i>
                    </div>
                    <h3>Daily Free Gift</h3>
                    <p>
                      Plan by the day, week, or month, and see project status at
                      a glance. Search and filter to focus on anything from a
                      single project to a person's workload.
                    </p>
                  </div>

                  <div className="features-item">
                    <div className="icon">
                      <i className="icofont-qr-code"></i>
                    </div>
                    <h3>QR Code Scanner</h3>
                    <p>
                      Plan by the day, week, or month, and see project status at
                      a glance. Search and filter to focus on anything from a
                      single project to a person's workload.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="features-image">
                  <img src="/images/features-img1.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape7">
          <img src="/images/shape7.png" alt="shape" />
        </div>
        <div className="shape3">
          <img src="/images/shape3.png" alt="img" />
        </div>
        <div className="bg-gray shape-1"></div>
        <div className="shape6">
          <img src="/images/shape6.png" alt="img" />
        </div>
        <div className="shape8 rotateme">
          <img src="/images/shape8.svg" alt="shape" />
        </div>
        <div className="shape9">
          <img src="/images/shape9.svg" alt="shape" />
        </div>
        <div className="shape10">
          <img src="/images/shape10.svg" alt="shape" />
        </div>
        <div className="shape11 rotateme">
          <img src="/images/shape11.svg" alt="shape" />
        </div>
      </section>
    );
  }
}

export default Features;
