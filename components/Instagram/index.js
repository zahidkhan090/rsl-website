import React, { Component } from "react";

class Instagram extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#12282B",
          position: 'relative'
        }}
      >
        
        <div className="container">
          <div className="pt-5 pb-5 instagram-custom">
            <p style={{ color: "#6cc7c0" }}>ROYAL SMART LIMOUSINE</p>
            {/* <div className="bar"></div> */}
            <h2 style={{ color: "#ffffff" }}>Follow us on Instagram</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4" style={{zIndex: 1}}>
              <img
                src="/images/insta1.png"
                alt="img"
                style={{
                  width: "100%",
                }}
              />
            </div>
            <div className="col-lg-4 col-md-4" style={{zIndex: 1}}>
              <img
                src="/images/insta2.png"
                alt="img"
                style={{
                  width: "100%",
                }}
              />
            </div>
            <div className="col-lg-4 col-md-4" style={{zIndex: 1}}>
              <img
                src="/images/insta3.png"
                alt="img"
                style={{
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/FooterVector.png"
            style={{
              width: "30%",
              position: "absolute",
              top: -100,
              right: 0
            }}
          />
        </div>
      </div>
    );
  }
}

export default Instagram;
