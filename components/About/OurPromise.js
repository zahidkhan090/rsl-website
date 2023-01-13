import React, { Component } from 'react';
import Link from 'next/link';

class Features extends Component {
  render() {
    return (
      <section
        className="features-area app-features"
        style={{ paddingTop: '100px' }}
      >
        <div className="container">
          <div className="section-title">
            <h2>OUR PROMISE</h2>
            <div className="bar"></div>
          </div>
          <p style={{color: '#ffffff'}}>
            We are dedicated to provide you with only the latest, safest, and
            most comfortable vehicles with the latest technologies,
            sophisticated features and amenities guaranteed to elevate your
            travel experience to a new level of excellence and an unforgettable
            experience for you and your guests. To strengthen our promise and
            enhance you comfort and safety, Royal Smart Limousine LLC offers the
            following professional services and amenities:
          </p>
          <ul style={{color: '#ffffff'}}>
            <li>
              Highly-trained chauffeurs and customer service representatives
            </li>
            <li>Immaculately maintained vehicles</li>
            <li>Clean and comfortable vehicles</li>
            <li>On-time-every-time guarantee</li>
            <li>
              Additional amenities including: Infant and child seats, free
              Wi-Fi, bottled water, newspaper, etc.
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Features;
