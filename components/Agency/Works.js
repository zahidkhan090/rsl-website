import React, { Component } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
class Works extends Component {
    render() {
        return (
            <>
                <section className="project-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Recent Work</h2>
                            <div className="bar"></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>

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
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                        modules={[Pagination]}
                        className="project-slides"
                    > 
                        <SwiperSlide>
                            <div className="single-project">
                                <div className="project-image">
                                    <img src='/images/work-img1.jpg' alt="work" />

                                    <Link href="/project-details">
                                        <a className="popup-btn">
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Network Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-project">
                                <div className="project-image">
                                    <img src='/images/work-img2.jpg' alt="work" />

                                    <Link href="/project-details">
                                        <a 
                                            className="popup-btn"
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Network Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-project">
                                <div className="project-image">
                                    <img src='/images/work-img3.jpg' alt="work" />

                                    <Link href="/project-details">
                                        <a 
                                            className="popup-btn"
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Network Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-project">
                                <div className="project-image">
                                    <img src='/images/work-img4.jpg' alt="work" />

                                    <Link href="/project-details">
                                        <a 
                                            className="popup-btn"
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Network Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-project">
                                <div className="project-image">
                                    <img src='/images/work-img5.jpg' alt="work" />

                                    <Link href="/project-details">
                                        <a 
                                            className="popup-btn"
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Network Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="single-project">
                                <div className="project-image">
                                    <img src='/images/work-img6.jpg' alt="work" />

                                    <Link href="/project-details">
                                        <a 
                                            className="popup-btn"
                                        >
                                            <i className="icofont-plus"></i>
                                        </a>
                                    </Link>
                                </div>

                                <div className="project-content">
                                    <span>Digital</span>
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Network Marketing</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>
            </>
        );
    }
}

export default Works;
