import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
class Partner extends React.Component {
  render() {
    return (
      <div className="partner-area" style={{ backgroundColor: "rgba(228, 227, 227, 1)" }} id="allpartner">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                // style={{
                //   padding: "44px",
                // }}
                className="partner-area-head"
              >
                <p>ROYAL SMART LIMOUSINE</p>
                <h1>Our Clients</h1>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div
                // style={{
                //   padding: "44px",
                // }}
                className="partner-area-para"
              >
                <p>
                  We offer diverse and unforgettable experience, offering
                  authentic and rich variety of international vehicles. With us,
                  be assured of a smart experience, and at the same time,
                  relaxing atmosphere with a winning combination of great and
                  friendly service
                </p>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 mt-5">
              <Swiper
                spaceBetween={20}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 5,
                  },
                }}
                autoplay={{
                  delay: 6000,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay]}
                className="partner-slides"
              >
                <SwiperSlide>
                  <div className="item">
                    <img src="/images/partner-1.png" alt="partner" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    <img src="/images/partner-2.png" alt="partner" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    <img src="/images/partner-3.png" alt="partner" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    <img src="/images/partner-4.png" alt="partner" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    <img src="/images/partner-5.png" alt="partner" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    <img src="/images/partner-6.png" alt="partner" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="item">
                    <img src="/images/partner-7.png" alt="partner" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        {/* <div className="container"></div> */}
      </div>
    );
  }
}

export default Partner;
