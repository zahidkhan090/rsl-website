import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
class ImageSlide extends Component {
    render() {
        return (
            <div className="col-lg-5 col-md-12">
                <Swiper 
                    navigation={true} 
                    modules={[Navigation]} 
                    className="product-img-slides"
                >
                    <SwiperSlide>
                        <div className="product-img">
                            <img src='/images/shop-item1.jpg' alt="product-img" />
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="product-img">
                            <img src='/images/shop-item2.jpg' alt="product-img" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="product-img">
                            <img src='/images/shop-item3.jpg' alt="product-img" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        );
    }
}

export default ImageSlide;
