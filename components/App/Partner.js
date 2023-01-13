import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
// import { Navigation } from "swiper";
class Partner extends React.Component {
  render() {
    return (
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
            // navigation={true}
            autoplay={{
              delay: 6000,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay, Navigation]}
            className="partner-slides"
          >
            <SwiperSlide>
              <div className="item">
                <img src="/images/rslcars/BMW-7-series.png" alt="partner" />
              </div>
              <div className="item">
                <p>BMW 7 SERIES</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src="/images/rslcars/mercedes-s350.png" alt="partner" />
              </div>
              <div className="item">
                <p>Mercedes S-Class</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img
                  src="/images/rslcars/cadillac-escalade1.png"
                  alt="partner"
                />
              </div>
              <div className="item">
                <p>Cadillac Escalade</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img
                  src="/images/rslcars/chevrolet-suburban.png"
                  alt="partner"
                />
              </div>
              <div className="item">
                <p>Chevrolet Suburban</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src="/images/rslcars/chevrolet-tahoe.png" alt="partner" />
              </div>
              <div className="item">
                <p>Chevrolet Tahoe</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src="/images/rslcars/gmc-denali1.png" alt="partner" />
              </div>
              <div className="item">
                <p>GMC Denali</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src="/images/rslcars/lexus-es350.png" alt="partner" />
              </div>
              <div className="item">
                <p>BMW 7 SERIES</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src="/images/rslcars/lexus-es350.png" alt="partner" />
              </div>
              <div className="item">
                <p>BMW 7 SERIES</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src="/images/rslcars/toyota-alphard.png" alt="partner" />
              </div>
              <div className="item">
                <p>Toyota Alphard</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src="/images/rslcars/toyota-prado.png" alt="partner" />
              </div>
              <div className="item">
                <p>BMW 7 SERIES</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <img src="/images/rslcars/toyota-privia.png" alt="partner" />
              </div>
              <div className="item">
                <p>BMW 7 SERIES</p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="section-title" style={{marginTop: '60px'}}>
            <p>
              Equipped with latest technology and free WiFi | Unforgettable
              experience with latest luxury vehicles | Smart, comfortable,
              convenient, and relaxing atmosphere
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;
