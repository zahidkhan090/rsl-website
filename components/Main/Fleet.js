import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";
import CarModel from "../datas/fleet.json";
class Partner extends React.Component {
  render() {
    return (
      <>
        <div
          className="partner-area app-partner py-5"
          style={{
            backgroundColor: "#12282B",
          }}
          id="fleets"
        >
          <div className="container">
            <div className="section-title-fleet">
              <p style={{ color: "#6cc7c0" }}>ROYAL SMART LIMOUSINE</p>
              <h2 style={{ color: "#ffffff" }} className="py-4">
                FLEETS
              </h2>
              {/* <div className="bar"></div> */}
              {/* <p style={{ color: "#ffffff" }}>
                The Royal Smart Limousine fleet features only the finest latest
                luxury car models.
              </p> */}
            </div>
            <section className="product-area">
              <div className="container">
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
                    autoplay={{
                      delay: 4000,
                      // pauseOnMouseEnter: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="feedback-slides"
                  >
                    {CarModel.map((item, index) => (
                      <div className="col-lg-4 col-md-6">
                        <SwiperSlide>
                          <div
                            className="single-product"
                            style={{
                              textAlign: "center",
                              border: "1px solid #807f7f",
                            }}
                          >
                            <div
                              className="product-img"
                              style={{
                                backgroundColor: "#ffffff",
                                padding: "14px",
                                height: '200px'
                              }}
                            >
                              <img src={item.image} alt="item" />
                            </div>

                            <div className="product-content">
                              <section className="project-details-area">
                                <div className="container">
                                  <div className="row ">
                                    <div className="col">
                                      <div className="project-details-desc">
                                        <div className="project-details-information">
                                          <h3
                                            style={{
                                              textAlign: "left",
                                              margin: "0px 0px 22px 0px",
                                            }}
                                          >
                                            <a style={{ color: "#ffffff" }}>
                                              {item.title}
                                            </a>
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row ">
                                    <div className="col">
                                      <div className="project-details-desc">
                                        <div className="project-details-information">
                                          <div className="single-info-box1-fleet">
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "center",
                                              }}
                                            >
                                              <img
                                                src={`/images/${item.icon1}`}
                                                style={{
                                                  width: "7%",
                                                  marginRight: "6px",
                                                }}
                                              />
                                              <h6
                                                style={{
                                                  color: "#ffffff",
                                                  marginBottom: "0px",
                                                }}
                                              >
                                                PASSENGERS
                                              </h6>
                                            </div>
                                            <h6
                                              style={{
                                                color: "#ffffff",
                                                marginBottom: "0px",
                                              }}
                                            >
                                              {item.passengers}
                                            </h6>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <hr
                                    style={{
                                      border: "2px solid",
                                      borderStyle: "none none solid",
                                      color: "#aeaeae",
                                    }}
                                  />
                                  <div className="row">
                                    <div className="col">
                                      <div className="project-details-desc">
                                        <div className="project-details-information">
                                          <div className="single-info-box1-fleet">
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "center",
                                              }}
                                            >
                                              <img
                                                src={`/images/${item.icon2}`}
                                                style={{
                                                  width: "7%",
                                                  marginRight: "6px",
                                                }}
                                              />
                                              <h6
                                                style={{
                                                  color: "#ffffff",
                                                  marginBottom: "0px",
                                                }}
                                              >
                                                BAGGAGE
                                              </h6>
                                            </div>
                                            <h6
                                              style={{
                                                color: "#ffffff",
                                                marginBottom: "0px",
                                              }}
                                            >
                                              {item.baggage}
                                            </h6>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </div>
                          </div>
                        </SwiperSlide>
                      </div>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Link href="/fleets">
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      color: "#6cc7c0",
                      fontSize: "15px",
                      letterSpacing: "1px",
                      fontWeight: 400,
                    }}
                  >
                    View All
                  </button>
                </Link>
                <hr
                  style={{
                    border: "2px solid  #6cc7c0",
                    borderStyle: "none none solid",
                    width: "40px",
                    margin: "auto",
                  }}
                />
              </div>
            </section>

            {/* <div className="section-title" style={{ marginTop: "60px" }}>
              <p>
                Equipped with latest technology and free WiFi | Unforgettable
                experience with latest luxury vehicles | Smart, comfortable,
                convenient, and relaxing atmosphere
              </p>
            </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default Partner;
