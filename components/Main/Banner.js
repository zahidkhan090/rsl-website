import React from "react";
import BannerContent from "../datas/bannerContent.json";
import { withRouter } from "next/router";
import Link from "next/link";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.openform = this.openform.bind(this);
  }

  openform(e, link) {
    this.props.router.push(link);
  }
  render() {
    return (
      <div className="main-banner app-home" id="bannernew">
        <div className="main-banner-grid">
          <div className="container-custom">
            <div className="main-banner-grid-img"  onClick={(e) => this.openform(e, "/become-driver")}>
              <img
                src="/images/main-banner-g1.png"
                className="banner-grid-img"
              />
              <div className="main-banner-grid-text">
                <h2>Become A Driver</h2>
              </div>
            </div>
            <div
              className="main-banner-grid-img"
              onClick={(e) => this.openform(e, "/become-partner")}
            >
              <img
                src="/images/main-banner-g2.png"
                className="banner-grid-img"
              />
              <div className="main-banner-grid-text">
                <h2>Become An Investor</h2>
              </div>
            </div>
            <div className="main-banner-grid-img"  onClick={(e) => this.openform(e, "/become-partner")}>
              <img
                src="/images/main-banner-g3.png"
                className="banner-grid-img"
              />
              <div className="main-banner-grid-text">
                <h2>Become An Partner</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="hero-content">
                    {/* <h1 className="fadeInUp" style={{color: '#ffffff'}}>THE SMART EXPERIENCE</h1> */}
                    <h1 className="" style={{ color: "#ffffff" }}>
                      THE SMART EXPERIENCE
                    </h1>
                    {/* <h1 className="fadeInUp">{this.state.bannerContent}</h1> */}
                    <p>
                      Experience the perfect harmony <br></br>between
                      versatility, safety<br></br>
                      and affordability.
                    </p>

                    {/* <form>
                                            <input type="email" placeholder="Enter your email...." className="form-control" />
                                           
                                        </form> */}
                    {/* <button
                      type="submit"
                      className="btn btn-primary"
                      id="btn-new"
                    >
                      BOOK NOW
                    </button> */}
                  </div>
                </div>

                {/* <div className="col-lg-6 col-md-12">
                  <div className="app-image">
                    <img src="/images/app-imgnew1.png" alt="image" />
                    <img src="/images/app-imgnew2.png" alt="image" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="creative-shape">
                    <img src='/images/bg3.png' alt="bg" />
                </div> */}
        {/* <div className="bg-gray shape-1"></div>
        <div className="shape1">
          <img src="/images/shape1.png" alt="img" />
        </div>
        <div className="shape2">
          <img src="/images/shape2.png" alt="img" />
        </div>
        <div className="shape3">
          <img src="/images/shape3.png" alt="img" />
        </div>
        <div className="shape4 rotateme">
          <img src="/images/shape4.png" alt="img" />
        </div>
        <div className="shape6">
          <img src="/images/shape6.png" alt="img" />
        </div>
        <div className="shape8 rotateme">
          <img src="/images/shape8.svg" alt="shape" />
        </div>
        <div className="shape9">
          <img src="/images/shape9.svg" alt="shape" />
        </div> */}
      </div>
    );
  }
}

export default withRouter(Banner);
