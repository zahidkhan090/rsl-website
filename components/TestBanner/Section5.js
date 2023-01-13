import React, { Component } from 'react';
import Link from 'next/link';
import Services from '../datas/services.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import CarModel from '../datas/fleet.json';

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
              <div className="col-lg-8 col-md-8 overview-content">
                <div className="row">
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
                      <div className="col-lg-6 col-md-6">
                        <SwiperSlide>
                          <div
                            className="single-product"
                            style={{
                              textAlign: 'center',
                              boxShadow: '-2px 0px 18px 5px rgba(0,0,0,0.61)',
                            }}
                          >
                            <div className="product-img">
                              <img src={item.image} alt="item" />
                            </div>

                            <div className="product-content">
                              <h3 style={{ color: '#6cc7c0' }}>{item.title}</h3>

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
                                          <div className="single-info-box1 single-info-box2">
                                            <h6>{item.passengers}</h6>
                                            <h6>PASSENGERS</h6>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="project-details-desc">
                                        <div className="project-details-information">
                                          <div className="single-info-box1 single-info-box2">
                                            <h6>{item.doors}</h6>
                                            <h6>DOORS</h6>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="project-details-desc">
                                        <div className="project-details-information">
                                          <div className="single-info-box1 single-info-box2">
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
                </div>
              </div>
              <div className="col-lg-4 col-md-6 overview-content testBanner-clr1 section-title">
                <h2 className="cllr">FLEET</h2>
                <div className="bar"></div>
                <p className="txt-aln">
                  The Royal Smart Limousine fleet features only the finest
                  latest luxury car models.
                </p>
                <p className="txt-aln">
                  Equipped with latest technology and free WiFi | Unforgettable
                  experience with latest luxury vehicles | Smart, comfortable,
                  convenient, and relaxing atmosphere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Overview;
