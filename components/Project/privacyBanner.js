import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <section className="page-title-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>PRIVACY POLICY</h2>
            </div>
          </div>
        </div>

        <div className="shape1">
          <img src="/images/shape1.png" alt="img" />
        </div>
        <div className="shape2">
          <img src="/images/shape2.png" alt="img" />
        </div>
        <div className="shape3">
          <img src="/images/shape3.png" alt="img" />
        </div>
        <div className="shape6">
          <img src="/images/shape6.png" alt="img" />
        </div>
        <div className="shape8 rotateme">
          <img src="/images/shape8.svg" alt="shape" />
        </div>
        <div className="shape9">
          <img src="/images/shape9.svg" alt="shape" />
        </div>
      </section>
    );
  }
}

export default Banner;
