import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import Link from 'next/link';
import CarModel from '../datas/fleet.json';
class Partner extends React.Component {
  render() {
    return (
      <>
        <div className="partner-area app-partner">
          <div className="container">
            <div className="section-title">
              <h2>FLEET</h2>
              <div className="bar"></div>
              <p>
                The Royal Smart Limousine fleet features only the finest latest
                luxury car models.
              </p>
            </div>
            <section className="product-area">
              <div className="container">
                <div className="row">
                  {' '}
                  <Swiper
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                    }}
                    modules={[Pagination]}
                    className="feedback-slides"
                  >
                    {CarModel.map((item, index) => (
                      <div className="col-lg-4 col-md-6">
                        <SwiperSlide>
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
                                    <button
                                      type="submit"
                                      className="btn btn-primary"
                                    >
                                      Book now
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    ))}
                  </Swiper>
                  {/* <div className="col-lg-4 col-md-6">
                    <div
                      className="single-product"
                      style={{ textAlign: 'center' }}
                    >
                      <div className="product-img">
                        <img
                          src="/images/rslcars/chevrolet-suburban.png"
                          alt="item"
                        />
                      </div>

                      <div className="product-content">
                        <h3>
                          <Link href="#">
                            <a>Chevrolet Suburban</a>
                          </Link>
                        </h3>

                        <div className="row h-100 justify-content-center align-items-center">
                          <div className="col-lg-12">
                            <button type="submit" className="btn btn-primary">
                              Book now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6">
                    <div
                      className="single-product"
                      style={{ textAlign: 'center' }}
                    >
                      <div className="product-img">
                        <img
                          src="/images/rslcars/chevrolet-tahoe.png"
                          alt="item"
                        />
                      </div>

                      <div className="product-content">
                        <h3>
                          <Link href="#">
                            <a>Chevrolet Tahoe</a>
                          </Link>
                        </h3>

                        <div className="row h-100 justify-content-center align-items-center">
                          <div className="col-lg-12">
                            <button type="submit" className="btn btn-primary">
                              Book now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Link href="/fleets">
                  <button type="submit" className="btn btn-warning">
                    View All
                  </button>
                </Link>
              </div>
            </section>

            <div className="section-title" style={{ marginTop: '60px' }}>
              <p>
                Equipped with latest technology and free WiFi | Unforgettable
                experience with latest luxury vehicles | Smart, comfortable,
                convenient, and relaxing atmosphere
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Partner;
