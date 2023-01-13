import React, { Component } from 'react';
import Link from 'next/link';
import CarModel from '../datas/fleet.json';

class RelatedProducts extends Component {
  render() {
    return (
      <div className="shop-related-prodcut">
        <div className="container">
          <div className="section-title">
            <h2>Related Fleet</h2>
            <div className="bar"></div>
          </div>

          <div className="row">
            {CarModel.map((item, index) =>
              index !== parseInt(this.props.props) ? (
                <div className="col-lg-4 col-md-6">
                  <div
                    className="single-product"
                    style={{ textAlign: 'center' }}
                  >
                    <div className="product-img">
                      <img src={item.image} alt="item" />
                    </div>

                    <div className="product-content">
                      <h3>
                        <a>{item.title}</a>
                      </h3>

                      <hr
                        style={{
                          border: '2px dotted',
                          borderStyle: 'none none dotted',
                          color: '#aeaeae',
                        }}
                      />

                      <section className="project-details-area">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <div className="project-details-desc">
                                <div className="project-details-information">
                                  <div className="single-info-box1">
                                    <h6>{item.passengers}</h6>
                                    <h6>PASSENGERS</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="project-details-desc">
                                <div className="project-details-information">
                                  <div className="single-info-box1">
                                    <h6>{item.doors}</h6>
                                    <h6>DOORS</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="project-details-desc">
                                <div className="project-details-information">
                                  <div className="single-info-box1">
                                    <h6>{item.model}</h6>
                                    <h6>MODEL</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <hr
                        style={{
                          border: '2px dotted',
                          borderStyle: 'none none dotted',
                          color: '#aeaeae',
                        }}
                      />

                      <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-12">
                          <Link href={`/shop-details1/?index=${index}`}>
                            <button type="submit" className="btn btn-primary">
                              Book now
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default RelatedProducts;
