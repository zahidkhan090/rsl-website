import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
class ImageSlide extends Component {
  render() {
    return (
      <div className="col-lg-5 col-md-12">
        <div className="product-img">
          <img src={this.props.image} alt="product-img" />
        </div>
      </div>
    );
  }
}

export default ImageSlide;
