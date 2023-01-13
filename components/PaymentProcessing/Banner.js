import React, { Component } from 'react';
import Link from 'next/link';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

class Banner extends Component {

    componentDidMount(){ 
        this.setState({ display: true });
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
                <div className="main-banner payment-processing-home">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="hero-content">
                                            <h1>Make your money go further with Crake</h1>
                                            <p>Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation.</p>
                                            
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
                                        <div className="paymant-processing-image">
                                            <img 
                                                src='/images/payment-process-shape/bg.png'
                                                className="wow fadeInDown"
                                                data-wow-delay="0.6s"
                                                alt="bg"
                                            />
                                            <img 
                                                src='/images/payment-process-shape/card.png'
                                                className="wow fadeInUp"
                                                data-wow-delay="0.6s"
                                                alt="card"
                                            />
                                            <img 
                                                src='/images/payment-process-shape/cursor.png'
                                                className="wow fadeInLeft"
                                                data-wow-delay="0.6s"
                                                alt="cursor"
                                            />
                                            <img 
                                                src='/images/payment-process-shape/dollar1.png'
                                                className="wow zoomIn"
                                                data-wow-delay="0.6s"
                                                alt="dollar1"
                                            />
                                            <img 
                                                src='/images/payment-process-shape/dollar2.png'
                                                className="wow bounceIn"
                                                data-wow-delay="0.6s"
                                                alt="dollar2"
                                            />
                                            <img 
                                                src='/images/payment-process-shape/laptop.png'
                                                className="wow fadeInDown"
                                                data-wow-delay="0.6s"
                                                alt="laptop"
                                            />
                                            <img 
                                                src='/images/payment-process-shape/main-bg.png'
                                                className="wow zoomIn"
                                                data-wow-delay="0.6s"
                                                alt="main-bg"
                                            />
                                            <img 
                                                src='/images/payment-process-shape/number.png'
                                                className="wow fadeInLeft"
                                                data-wow-delay="0.6s"
                                                alt="number"
                                            />
                                            <img 
                                                src='/images/payment-process-shape/paper.png'
                                                className="wow rollIn"
                                                data-wow-delay="0.6s" 
                                                alt="paper"
                                            />
                                            <img 
                                                src='/images/payment-process-shape/main-pic.png'
                                                className="wow fadeInUp"
                                                data-wow-delay="0.6s"
                                                alt="main-pic"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shape Images */}
                    <div className="creative-shape">
                        <img src='/images/bg3.png' alt="bg" />
                    </div>
                    <div className="bg-gray shape-1"></div>
                    <div className="shape1"><img src='/images/shape1.png' alt="img" /></div>
                    <div className="shape2"><img src='/images/shape2.png' alt="img" /></div>
                    <div className="shape3"><img src='/images/shape3.png' alt="img" /></div>
                    <div className="shape6"><img src='/images/shape6.png' alt="img" /></div>
                    <div className="shape8 rotateme">
                        <img src='/images/shape8.svg' alt="shape" />
                    </div>
                    <div className="shape9">
                        <img src='/images/shape9.svg' alt="shape" />
                    </div>
                </div>
            </>
        );
    }
}

export default Banner;
