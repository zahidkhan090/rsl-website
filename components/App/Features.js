import React, { Component } from "react";

class Features extends Component {
  render() {
    return (
      <section className="features-area app-features ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>How Can We Help You</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-features-box">
                <div className="icon">
                  <i className="icofont-ui-touch-phone"></i>
                </div>
                <h3>Smart Transport</h3>
                <p>
                  The concept of Smart Transportation systems was developed to
                  address the conflicts in the current transportation system.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-box">
                <div className="icon">
                  <i className="icofont-ui-flight"></i>
                </div>
                <h3>Airport Transfers</h3>
                <p>
                  Our fixed-rates on Airport Transfers Car Services always offer
                  consistent and superior quality service you can depend on, be
                  it in Dubai or other Emirates.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-features-box">
                <div className="icon">
                  <i className="icofont-clock-time"></i>
                </div>
                <h3>Hourly Charters</h3>
                <p>
                  Enjoy the flexibility of on-demand chauffeur service. Whatever
                  your needs are, Royal Smart Limousine’s customer-directed
                  hourly service puts a chauffeur at your disposal for as long
                  as you require.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-features-box">
                <div className="icon">
                  <i className="icofont-star"></i>
                </div>
                <h3>VIP Transport</h3>
                <p>
                  We consider that our VIP clients expect more than just normal
                  transportation and therefore we provide additional and
                  sophisticated amenities such as mineral water, newspaper, free
                  Wi-Fi and also iPad's reserved for VIP fleet such as Mercedes
                  S350 and Cadillac Escalade.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-features-box">
                <div className="icon">
                  <i className="icofont-building-alt"></i>
                </div>
                <h3>City Sight Seeing</h3>
                <p>
                  Do you want to visit Dubai or other Emirates? Do you have some
                  spare time between 2 flights? Ride in one of our luxurious
                  limousines and discover why Dubai or other Emirates are
                  continuously ranked as cities with the highest standards of
                  living.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="single-features-box">
                <div className="icon">
                  <i className="icofont-map-pins"></i>
                </div>
                <h3>Point-to-Point Transfer</h3>
                <p>
                  Royal Smart Limousine is the ideal option for convenient,
                  comfortable and reliable city-to-city chauffeured
                  transportation. This service is as fast as alternative means
                  of travel to nearby cities but far more comfortable, safe and
                  productive, making it your ideal choice for business travel.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="features-inner-area">
                    <div className="container-fluid">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="features-image">
                                    <img src='/images/features-img1.png' alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="features-inner-content">
                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-ui-call"></i>
                                        </div>
                                        <h3>Free Calling Service</h3>
                                        <p>Plan by the day, week, or month, and see project status at a glance. Search and filter to focus on anything from a single project to a person's workload.</p>
                                    </div>

                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-gift"></i>
                                        </div>
                                        <h3>Daily Free Gift</h3>
                                        <p>Plan by the day, week, or month, and see project status at a glance. Search and filter to focus on anything from a single project to a person's workload.</p>
                                    </div>

                                    <div className="features-item">
                                        <div className="icon">
                                            <i className="icofont-qr-code"></i>
                                        </div>
                                        <h3>QR Code Scanner</h3>
                                        <p>Plan by the day, week, or month, and see project status at a glance. Search and filter to focus on anything from a single project to a person's workload.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

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
