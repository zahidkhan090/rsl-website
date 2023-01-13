import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

class Screenshot extends React.Component {
    render() {
        return (
            <section className="screenshot-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Screenshot</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="screenshot-contain">
                        <img src='/images/mobile.png' className="mobile-light" alt="mobile" />

                        <Swiper 
                            spaceBetween={30}
                            navigation={true} 
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                0: {
                                  slidesPerView: 2,
                                },
                                768: {
                                  slidesPerView: 3,
                                },
                            }}
                            modules={[Navigation, Pagination]} 
                            className="screenshot-slides"
                        >
                            <SwiperSlide>
                                <div className="screenshot-item">
                                    <img src='/images/screenshot-img1.png' alt="screenshot" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="screenshot-item">
                                    <img src='/images/screenshot-img4.png' alt="screenshot" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="screenshot-item">
                                    <img src='/images/screenshot-img2.png' alt="screenshot" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="screenshot-item">
                                    <img src='/images/screenshot-img3.png' alt="screenshot" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="screenshot-item">
                                    <img src='/images/screenshot-img4.png' alt="screenshot" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="screenshot-item">
                                    <img src='/images/screenshot-img1.png' alt="screenshot" />
                                </div>
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                <div className="screenshot-item">
                                    <img src='/images/screenshot-img2.png' alt="screenshot" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        
                    </div>
                     
                </div>
            </section>
        );
    }
}

export default Screenshot;
