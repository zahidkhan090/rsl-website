import React, { Component } from 'react';
import Link from 'next/link';

class Overview extends Component {
    render() {
        return (
            <section className="overview-section ptb-100">
                <div className="container">
                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src='/images/marketing-1.png' alt="image" />
                            </div>

                            <div className="col-lg-6 col-md-6 overview-content">
                                <div className="icon">
                                    <i className="icofont-power"></i>
                                </div>
                                <h3>Social Media Marketing</h3>
                                <p>Plan by the day, week, or month, and see project status at a glance. Search and filter to focus on anything from a single project to a person's workload.</p>

                                <ul>
                                    <li>Unlimited Video Call</li>
                                    <li>Add Favourite contact</li>
                                    <li>Camera Filter</li>
                                </ul>
                                <Link href="/project-details">
                                    <a className="btn btn-primary">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-content">
                                <div className="icon">
                                    <i className="icofont-share-alt"></i>
                                </div>
                                <h3>Email Marketing</h3>
                                <p>Plan by the day, week, or month, and see project status at a glance. Search and filter to focus on anything from a single project to a person's workload.</p>

                                <ul>
                                    <li>Unlimited Video Call</li>
                                    <li>Add Favourite contact</li>
                                    <li>Camera Filter</li>
                                </ul>
                                <Link href="/project-details">
                                    <a className="btn btn-primary">Read More</a>
                                </Link>
                            </div>

                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src='/images/marketing-2.png' alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src='/images/marketing.png' alt="image" />
                            </div>

                            <div className="col-lg-6 col-md-6 overview-content">
                                <div className="icon">
                                    <i className="icofont-ui-messaging"></i>
                                </div>
                                <h3>Paid Advertising</h3>
                                <p>Plan by the day, week, or month, and see project status at a glance. Search and filter to focus on anything from a single project to a person's workload.</p>

                                <ul>
                                    <li>Unlimited Video Call</li>
                                    <li>Add Favourite contact</li>
                                    <li>Camera Filter</li>
                                </ul>
                                <Link href="/project-details">
                                    <a className="btn btn-primary">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="overview-box">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6 overview-content">
                                <div className="icon">
                                    <i className="icofont-users-social"></i>
                                </div>
                                <h3>We provide professional staff</h3>
                                <p>Plan by the day, week, or month, and see project status at a glance. Search and filter to focus on anything from a single project to a person's workload.</p>

                                <ul>
                                    <li>Unlimited Video Call</li>
                                    <li>Add Favourite contact</li>
                                    <li>Camera Filter</li>
                                </ul>
                                <Link href="/project-details">
                                    <a className="btn btn-primary">Read More</a>
                                </Link>
                            </div>

                            <div className="col-lg-6 col-md-6 overview-img">
                                <img src='/images/marketing-3.png' alt="image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape7"><img src='/images/shape7.png' alt="shape" /></div>
                <div className="shape3"><img src='/images/shape3.png' alt="img" /></div>
                <div className="bg-gray shape-1"></div>
                <div className="shape6"><img src='/images/shape6.png' alt="img" /></div>
                <div className="shape8 rotateme"><img src='/images/shape8.svg' alt="shape" /></div>
                <div className="shape9"><img src='/images/shape9.svg' alt="shape" /></div>
                <div className="shape10"><img src='/images/shape10.svg' alt="shape" /></div>
                <div className="shape11 rotateme"><img src='/images/shape11.svg' alt="shape" /></div>
            </section>
        );
    }
}

export default Overview;
