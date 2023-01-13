import React, { useState, Component } from 'react'
import Link from 'next/link';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

export default class Banner extends Component {
    componentDidMount(){ 
        new WOW.WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 20,
        mobile:       true,
        live:         true,
        }).init();
    }
    render() {
        return (
            <>
               <div className="main-banner marketing-home">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="hero-content">
                                            <h1>RSL APP</h1>
                                            <p>Discover your one-stop ride-hailing platform: airport transfers, world-class chauffeur services, point-to-point transfers, customized VVIP solutions, conferences & exhibitions transfers.</p>
                                            
                                            <Link href="/contact">
                                                <a className="btn btn-primary">Get Started</a>
                                            </Link>
                                            <Link href="/about-one">
                                                <a
                                                    className="video-btn popup-youtube"
                                                > 
                                                    About Us
                                                    <i className="icofont-thin-right"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-12">
                                        <div className="marketing-image">
                                            <img 
                                                src='/images/marketing-shape/marketing-img1.png'
                                                className="wow fadeInDown"
                                                data-wow-delay="0.4s" 
                                                alt="img"
                                            />
                                            <img 
                                                src='/images/marketing-shape/marketing-img2.png'
                                                className="wow fadeInLeft"
                                                data-wow-delay="0.4s"
                                                alt="img"
                                            />
                                            <img 
                                                src='/images/marketing-shape/marketing-img3.png'
                                                className="wow lightSpeedIn"
                                                data-wow-delay="0.4s"
                                                alt="img"
                                            />
                                            <img 
                                                src='/images/marketing-shape/marketing-img4.png'
                                                className="wow rollIn"
                                                data-wow-delay="0.4s"
                                                alt="img"
                                            />
                                            <img 
                                                src='/images/marketing-shape/marketing-img5.png'
                                                className="wow fadeInUp"
                                                data-wow-delay="0.4s"
                                                alt="img"
                                            />
                                            <img 
                                                src='/images/marketing-shape/marketing-img6.png'
                                                className="wow fadeInDown"
                                                data-wow-delay="0.4s"
                                                alt="img"
                                            />
                                            <img 
                                                src='/images/marketing-shape/marketing-img7.png'
                                                className="wow flip"
                                                data-wow-delay="0.4s"
                                                alt="img"
                                            />
                                            <img 
                                                src='/images/marketing-shape/marketing-img8.png'
                                                className="wow zoomIn"
                                                data-wow-delay="0.4s"
                                                alt="img"
                                            />
                                            <img 
                                                src='/images/shape6.png'
                                                alt="img"
                                            />
                                            <img 
                                                src='/images/marketing-shape/marketing-img9.png'
                                                className="wow fadeInDown"
                                                data-wow-delay="0.4s"
                                                alt="img"
                                            />
                                            <img 
                                                src='/images/marketing-shape/marketing-img10.png'
                                                className="wow fadeInUp"
                                                data-wow-delay="0.4s"
                                                alt="img"
                                            />
                                            <img 
                                                src='/images/marketing-shape/marketing-img11.png'
                                                className="wow flip"
                                                data-wow-delay="0.4s"
                                                alt="img"
                                            />
                                            <img 
                                                src='/images/marketing-shape/marketing-img12.png'
                                                className="wow lightSpeedIn"
                                                data-wow-delay="0.4s"
                                                alt="img"
                                            />
                                            <img 
                                                src='/images/marketing-shape/main-image.png'
                                                className="wow fadeInUp"
                                                data-wow-delay="0.4s"
                                                alt="img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shape Images */}
                    <div className="bg-gray shape-1"></div>
                    <div className="shape1">
                        <img src='/images/shape1.png' alt="img" />
                    </div>
                    <div className="shape2">
                        <img src='/images/shape2.png' alt="img" />
                    </div>
                    <div className="shape3">
                        <img src='/images/shape3.png' alt="img" />
                    </div>
                    <div className="shape6">
                        <img src='/images/shape6.png' alt="img" />
                    </div>
                    <div className="shape8 rotateme">
                        <img src='/images/shape8.svg' alt="shape" />
                    </div>
                    <div className="shape9">
                        <img src='/images/shape9.svg' alt="shape" />
                    </div>

                    {/* bubble-animate */}
                    <div className="bubble-animate">
                        <div className="circle small square1"></div>
                        <div className="circle small square2"></div>
                        <div className="circle small square3"></div>
                        <div className="circle small square4"></div>
                        <div className="circle small square5"></div>
                        <div className="circle medium square1"></div>
                        <div className="circle medium square2"></div>
                        <div className="circle medium square3"></div>
                        <div className="circle medium square4"></div>
                        <div className="circle medium square5"></div>
                        <div className="circle large square1"></div>
                        <div className="circle large square2"></div>
                        <div className="circle large square3"></div>
                        <div className="circle large square4"></div>
                    </div>
                </div>
            </>
        )
    }
}
