import React, { Component } from 'react';
import Link from 'next/link';

class Overview extends Component {
  render() {
    return (
      <section
        className="overview-section ptb-100"
        style={{
          background: 'rgb(38,37,37)',
          background:
            'linear-gradient(180deg, rgba(38,37,37,1) 0%, rgba(38,37,37,1) 77%, rgba(38,37,37,1) 100%)',
        }}
      >
        <div className="container" style={{ maxWidth: 'none' }}>
          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-8 col-md-6 overview-img">
                <img src="/images/mercedes-car-png-22.png" alt="image" />
              </div>

              <div
                className="col-lg-4 col-md-6 overview-content testBanner-clr"
                style={{
                  // boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
                  // background: 'black',
                  height: '595px',
                }}
              >
                <h6>VARIETIES</h6>
                <h2 style={{ color: 'white' }}>The Reds</h2>

                <ul style={{ padding: '50px' }}>
                  <li style={{ color: 'white' }}>Cabernet Sauvignon</li>
                  <li style={{ color: 'white' }}>Merlot</li>
                  <li style={{ color: 'white' }}>Pinot Noir</li>
                </ul>
                <button type="submit" className="btn btn-primary">
                  Book Online
                </button>
              </div>
            </div>
          </div>

          <div className="overview-box">
            <div className="row h-100 justify-content-center align-items-center">
              <div
                className="col-lg-4 col-md-6 overview-content testBanner-clr"
                style={{
                  // boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)',
                  // background: 'black',
                  height: '595px',
                }}
              >
                <h6>VARIETIES</h6>
                <h2 style={{ color: 'white' }}>The Whites</h2>

                <ul style={{ padding: '50px' }}>
                  <li style={{ color: 'white' }}>Chardonnay</li>
                  <li style={{ color: 'white' }}>Sauvignon Blanc</li>
                  <li style={{ color: 'white' }}>Riesling</li>
                </ul>
                <button type="submit" className="btn btn-primary">
                  Book Online
                </button>
              </div>

              <div className="col-lg-8 col-md-6 overview-img">
                <img
                  src="/images/BMW-7-Series-PNG-Free-File-Download.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Overview;
