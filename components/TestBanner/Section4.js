import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Link from 'next/link';
import Services from '../datas/services.json';

class Screenshot extends Component {
  render() {
    return (
      <section
        className="screenshot-area page-from-book ptb-100"
        style={{
          background: 'rgb(0,0,0)',
          background:
            'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%)',
        }}
      >
        <div className="container" style={{ maxWidth: 'none' }}>
          <div className="section-title testBanner-clr">
            <h2>OUR SERVICES</h2>
            <div className="bar"></div>
            <p>
              Our exclusive luxury fleet is a step above the expected with our
              signature flair for luxury, comfort, and latest technology
              features combining the luxury and capacity to entertain that no
              other travel service can boast.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            navigation={true}
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
            modules={[Navigation]}
            className="screenshot-slides"
          >
            {Services.map((item) => (
              <div className="col-lg-12 col-md-12">
                <SwiperSlide>
                  <Link href={`/blog-details1/?id=${item.id}`}>
                    <div
                      className="single-features-box clr-2"
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="icon" style={{ background: '#262525' }}>
                        <i
                          className={item.icon}
                          style={{ color: '#6cc7c0' }}
                        ></i>
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.description.substring(0, 100) + ' .....'}</p>
                    </div>
                  </Link>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </section>
    );
  }
}

export default Screenshot;
