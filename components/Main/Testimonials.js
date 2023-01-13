import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
class Feedback extends React.Component {
  render() {
    return (
      <section className="about-area py-5 bg-gray-rsl">
        <div className="row g-0 h-100 justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-content-custom">
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
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 1,
                  },
                }}
                modules={[Pagination]}
                className="feedback-slides"
              >
                <SwiperSlide>
                  <div className="">
                    <div className="section-title-testimonial">
                      <p
                        style={{
                          color: "#6cc7c0",
                        }}
                      >
                        ROYAL SMART LIMOUSINE
                      </p>
                      <h2 className="pb-5">Testimonials</h2>
                    </div>

                    <p style={{ color: "#ffffff" }}>
                      Royal Smart Limousine LLC (formerly known as Royal Luxury
                      Transport LLC) is a member of the Rashid Al Jabri Group of
                      Companies.
                    </p>
                    <br></br>
                    <div
                      style={{
                        textAlign: "end",
                      }}
                    >
                      <img src="/images/colon.png" style={{ width: "10%" }} />
                    </div>
                    <p>nolan White</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="section-title-testimonial">
                      <p
                        style={{
                          color: "#6cc7c0",
                        }}
                      >
                        ROYAL SMART LIMOUSINE
                      </p>
                      <h2 className="pb-5">Testimonials</h2>
                    </div>

                    <p style={{ color: "#ffffff" }}>
                      Royal Smart Limousine LLC (formerly known as Royal Luxury
                      Transport LLC) is a member of the Rashid Al Jabri Group of
                      Companies.
                    </p>
                    <br></br>
                    <div
                      style={{
                        textAlign: "end",
                      }}
                    >
                      <img src="/images/colon.png" style={{ width: "10%" }} />
                    </div>
                    <p>nolan</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <img
              src="/images/testimonial.png"
              className="about-car"
              alt="image"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Feedback;
