import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Link from 'next/link';

class LatestProducts extends Component {
    render() {
        return (
            <section className="product-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Latest Product</h2>
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
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Pagination]}
                        className="product-slides"
                    >
                        <SwiperSlide>
                            <div className="single-product">
                                <div className="product-img">
                                    <img src='/images/shop-item1.jpg' alt="item" />

                                    <Link href="/cart">
                                        <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                    </Link>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="/shop-details">
                                            <a>Drop Side Watch</a>
                                        </Link>
                                    </h3>

                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-lg-5 col-6">
                                            <h5>$8.50 <span>$12.00</span></h5>
                                        </div>

                                        <div className="col-lg-7 col-6">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="single-product">
                                <div className="product-img">
                                    <img src='/images/shop-item2.jpg' alt="item" />
                                    <Link href="/cart">
                                        <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                    </Link>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="/shop-details">
                                            <a>Drop Side Watch</a>
                                        </Link>
                                    </h3>

                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-lg-5 col-6">
                                            <h5>$8.50 <span>$12.00</span></h5>
                                        </div>

                                        <div className="col-lg-7 col-6">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="single-product">
                                <div className="product-img">
                                    <img src='/images/shop-item3.jpg' alt="item" />
                                    <Link href="/cart">
                                        <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                    </Link>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="/shop-details">
                                            <a>Drop Side Watch</a>
                                        </Link>
                                    </h3>

                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-lg-5 col-6">
                                            <h5>$8.50 <span>$12.00</span></h5>
                                        </div>

                                        <div className="col-lg-7 col-6">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="single-product">
                                <div className="product-img">
                                    <img src='/images/shop-item4.jpg' alt="item" />

                                    <Link href="/cart">
                                        <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                    </Link>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="/shop-details">
                                            <a>Drop Side Watch</a>
                                        </Link>
                                    </h3>

                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-lg-5 col-6">
                                            <h5>$8.50 <span>$12.00</span></h5>
                                        </div>

                                        <div className="col-lg-7 col-6">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className="single-product">
                                <div className="product-img">
                                    <img src='/images/shop-item5.jpg' alt="item" />

                                    <Link href="/cart">
                                        <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                    </Link>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="/shop-details">
                                            <a>Drop Side Watch</a>
                                        </Link>
                                    </h3>

                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-lg-5 col-6">
                                            <h5>$8.50 <span>$12.00</span></h5>
                                        </div>

                                        <div className="col-lg-7 col-6">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="single-product">
                                <div className="product-img">
                                    <img src='/images/shop-item6.jpg' alt="item" />

                                    <Link href="/cart">
                                        <a className="add-to-cart-btn">Add to Cart <i className="icofont-shopping-cart"></i></a>
                                    </Link>
                                </div>

                                <div className="product-content">
                                    <h3>
                                        <Link href="/shop-details">
                                            <a>Drop Side Watch</a>
                                        </Link>
                                    </h3>

                                    <div className="row h-100 justify-content-center align-items-center">
                                        <div className="col-lg-5 col-6">
                                            <h5>$8.50 <span>$12.00</span></h5>
                                        </div>

                                        <div className="col-lg-7 col-6">
                                            <ul>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                                <li><i className="icofont-star"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        );
    }
}

export default LatestProducts;
