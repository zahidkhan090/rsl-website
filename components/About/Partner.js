import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
class Partner extends React.Component {
  render() {
    return (
      <div className="partner-area payment-processing-partner bor-bottom-1">
        <div className="container">
          <div className="section-title">
            <h2>OUR PARTNERS</h2>
            <div className="bar"></div>
          </div>
          <p>
            Royal Smart Limousine LLC provides 24-hour transportation services
            to all partners and organization, from 7am to 11pm information desk
            and 24-hour professional and English speaking drivers. All our fleet
            is insured and we run a ‘no-smoking policy’ for the comfort of all
            our customers.
          </p>
          <p style={{ paddingBottom: '20px' }}>
            We offer diverse and unforgettable experience, offering authentic
            and rich variety of international vehicles. With us, be assured of a
            smart experience, and at the same time, relaxing atmosphere with a
            winning combination of great and friendly service.
          </p>
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
              delay: 2000,
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
    );
  }
}

export default Partner;
