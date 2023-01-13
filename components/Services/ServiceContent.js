import React, { Component } from 'react';
import Link from 'next/link';
import Services from '../datas/services.json';

class Features extends Component {
  render() {
    return (
      <section className="features-area app-features ptb-100">
        <div className="container">
          <div className="section-title mt-5">
            <h2>OUR SERVICES</h2>
            <div className="bar"></div>
            <p style={{color: '#ffffff'}}>
              Our exclusive luxury fleet is a step above the expected with our
              signature flair for luxury, comfort, and latest technology
              features combining the luxury and capacity to entertain that no
              other travel service can boast.
            </p>
          </div>

          <div className="row">
            {Services.map((item) => (
              <div className="col-lg-4 col-md-6" style={{ cursor: 'pointer' }}>
                <Link href={`/blog-details1/?id=${item.id}`}>
                  <div className="single-features-box">
                    <div className="icon">
                      {/* <i className={item.icon}></i> */}
                      <img src={`/images/${item.icon}`} />
                    </div>
                    <h3>{item.title}</h3>
                    {/* <p>{item.description.substring(0, 100) + ' .....'}</p> */}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="shape7">
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
        </div> */}
      </section>
    );
  }
}

export default Features;
