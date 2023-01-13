import React, { Component } from 'react';
import Link from 'next/link';
import Services from '../datas/services.json';

class Overview extends Component {
  render() {
    return (
      <section
        className="overview-section ptb-100"
        style={{
          background: 'rgb(0,0,0)',
          background:
            'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
        }}
      >
        <div className="container" style={{ maxWidth: 'none' }}>
          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div
                className="col-lg-4 col-md-6 overview-content testBanner-clr section-title"
                style={{
                  boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
                  background: 'black',
                }}
              >
                <h2 className="cllr">OUR SERVICES</h2>
                <div className="bar"></div>
                <p>
                  Our exclusive luxury fleet is a step above the expected with
                  our signature flair for luxury, comfort, and latest technology
                  features combining the luxury and capacity to entertain that
                  no other travel service can boast.
                </p>
              </div>
              <div className="col-lg-8 col-md-8 overview-content">
                <div className="row">
                  {Services.map((item) => (
                    <div
                      className="col-lg-4 col-md-6"
                      style={{ cursor: 'pointer' }}
                    >
                      <Link href={`/blog-details1/?id=${item.id}`}>
                        <div className="single-features-box clr-2">
                          <div className="icon">
                            <i className={item.icon}></i>
                          </div>
                          <h3>{item.title}</h3>
                          <p>{item.description.substring(0, 100) + ' .....'}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Overview;
