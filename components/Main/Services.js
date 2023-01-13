import React, { Component } from "react";
import Link from "next/link";
import Services from "../datas/services.json";

class Features extends Component {
  render() {
    return (
      // <section className="features-area app-features ptb-100">
      <div style={{ backgroundColor: "rgba(228, 227, 227, 1)" }} id="services">
        <div className="container">
          {/* <div className="section-title"> */}
          <div className="pt-5 pb-5 section-title-services">
            <p>ROYAL SMART LIMOUSINE</p>
            <div className="bar"></div>
            <h2>Services</h2>
          </div>

          <div className="row">
            {Services.map((item) => (
              <div className="col-lg-4 col-md-6" style={{ cursor: "pointer" }}>
                <Link href={`/blog-details1/?id=${item.id}`}>
                  <div className="single-features-box">
                    <div className="icon">
                      {/* <i className={item.icon}></i> */}
                      <img src={`/images/${item.icon}`} />
                    </div>
                    <h3>{item.title}</h3>
                    {/* <p>{item.description.substring(0, 100) + " ....."}</p> */}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      // </section>
    );
  }
}

export default Features;
