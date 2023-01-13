import React, { Component } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

class TeamTwo extends Component {
    render() {
        return (
            <section className="team-area ptb-100 bg-gray">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Smart Team</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                        modules={[Pagination]}
                        className="team-slides"
                    >
                        <SwiperSlide>
                            <div className="single-team-member-box">
                                <img src='/images/team-img1.jpg' alt="team" />

                                <div className="team-content">
                                    <h3>John Doe</h3>
                                    <span>CEO</span>

                                    <ul>
                                        <li>
                                            <a className="facebook" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="instagram" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="twitter" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="linkedin" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-team-member-box">
                                <img src='/images/team-img2.jpg' alt="team" />

                                <div className="team-content">
                                    <h3>Steven Smith</h3>
                                    <span>Developer</span>

                                    <ul>
                                        <li>
                                            <a className="facebook" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="instagram" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="twitter" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="linkedin" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-team-member-box">
                                <img src='/images/team-img3.jpg' alt="team" />

                                <div className="team-content">
                                    <h3>David Luiz</h3>
                                    <span>Designer</span>

                                    <ul>
                                        <li>
                                            <a className="facebook" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="instagram" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="twitter" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="linkedin" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-team-member-box">
                                <img src='/images/team-img4.jpg' alt="team" />

                                <div className="team-content">
                                    <h3>Park Tim</h3>
                                    <span>SEO Expert</span>

                                    <ul>
                                        <li>
                                            <a className="facebook" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="instagram" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="twitter" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="linkedin" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-team-member-box">
                                <img src='/images/team-img5.jpg' alt="team" />

                                <div className="team-content">
                                    <h3>Doglas Costa</h3>
                                    <span>Manager</span>

                                    <ul>
                                        <li>
                                            <a className="facebook" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="instagram" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="twitter" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="linkedin" href="https://www.facebook.com/" target="_blank">
                                                <i className="icofont-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        );
    }
}

export default TeamTwo;
