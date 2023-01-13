import React, { Component } from "react";
import { withRouter } from "next/router";
import Link from "next/link";

class AllPartner extends Component {
   constructor(props) {
    super(props);
    this.openform = this.openform.bind(this);
  }

  openform(e, link) {
    this.props.router.push(link);
  }
  render() {
    return (
      <div id="partner">
        {/* <div className="container"> */}
        <div className="row g-0">
          <div className="col-lg-12 col-md-12">
            <div
              style={{
                position: "relative",
                color: "#ffffff",
                // textAlign: "center",
                overflow: "hidden",
              }}
              onClick={(e) => this.openform(e, "/become-partner")}
            >
              <img
                src="/images/excutive_partner.png"
                alt="img"
                className="all-partner-img"
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h2>Become A Corporate Partner</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div
              style={{
                position: "relative",
                color: "#ffffff",
                overflow: "hidden",
                // textAlign: "center",
              }}
              onClick={(e) => this.openform(e, "/become-driver")}
            >
              <img
                src="/images/become_driver.png"
                alt="img"
                className="all-partner-img"
                
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h2>Become A Driver</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div
              style={{
                position: "relative",
                color: "#ffffff",
                overflow: "hidden",
                // textAlign: "center",
              }}
              onClick={(e) => this.openform(e, "/become-partner")}
            >
              <img
                src="/images/become_invester.png"
                alt="img"
                className="all-partner-img"
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <h2>Become An Investor</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      //   </div>
    );
  }
}

export default withRouter(AllPartner);
