import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
class Partner extends React.Component {
  render() {
    return (
      <div className="partner-area payment-processing-partner bor-bottom-1">
        <div className="container">
          <div className="section-title">
            <h2>BE A PARTNER</h2>
            <div className="bar"></div>
          </div>
          <p>
            Royal Smart Limousine has thoughtfully initiated platforms by which
            variety of establishments can directly work with us. As a leading
            luxury transportation company in the UAE, we rely upon effective
            collaborations with like-minded customers, clients and
            establishments that can further support, motivate and facilitate us
            to thrive in our uncompromising efforts to provide hassle-free and
            affordable luxury transportation to all and sundry.
          </p>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="project-details-desc">
                <h5>WHAT TYPE OF PARTNERSHIP DO YOU WANT?</h5>
                <p>
                  <b>BUSINESS/CORPORATE:</b> Would you like to collaborate with
                  us by bringing Royal Smart Limousine to your establishment?
                  This is very simple. We will provide you the kind of luxury
                  transportation services that will be tailored to meet your
                  requirements and also the standard of your establishment by
                  utilizing our fleet of all sorts of luxury vehicles available
                  in the industry.
                </p>
                <p>
                  To avail this kind of partnership, send us a mail at &nbsp;
                  <a href="mailto:marketing@royalsmartlimousine.com">
                    marketing@royalsmartlimousine.com
                  </a>
                </p>

                <p>
                  <b>EVENTS:</b> Transportation for your different events should
                  be more than just getting from point A to B. So, when it comes
                  to deciding the kind of transportation you should use for
                  events, the rides and chauffeured services should match and
                  even enhance the style of your event. Our fleet of finest,
                  latest luxury cars would not only bring sparkles to your
                  events but also impress your clients and guests.
                </p>
                <p>
                  Contact us today by sending us a mail at &nbsp;
                  <a href="mailto:marketing@royalsmartlimousine.com">
                    marketing@royalsmartlimousine.com
                  </a>
                </p>

                <p>
                  <b>BECOME OUR DRIVER:</b> Are you a professional driver who
                  seeks a highly-rated limousine company that can help you
                  fulfill your dreams? Royal Smart Limousine is one of the few
                  limousine companies that places utmost importance to your
                  dreams. With our community of fulfilled, dedicated and
                  flourishing drivers, you will definitely achieve your goals.
                </p>
                <p>
                  To become our driver, send us a mail at &nbsp;
                  <a href="mailto:drivers@royalsmartlimousine.com">
                    drivers@royalsmartlimousine.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="row" style={{ paddingTop: '40px' }}>
            <div className="col-lg-12 col-md-12">
              <div className="project-details-desc">
                <h3>AIRLINES</h3>
                <div>
                  <img src="/images/bea-partner/flights.jpg" alt="image" />
                </div>
              </div>
              <div className="project-details-desc">
                <h3>MALLS</h3>
                <div>
                  <img src="/images/bea-partner/malls.jpg" alt="image" />
                </div>
              </div>
              <div className="project-details-desc">
                <h3>HOTELS</h3>
                <div>
                  <img src="/images/bea-partner/hotels.jpg" alt="image" />
                </div>
              </div>
              <div className="project-details-desc">
                <h3>PRIVATE ESTABLISHMENTS</h3>
                <div>
                  <img src="/images/bea-partner/private1.jpg" alt="image" />
                </div>
              </div>
              <div className="project-details-desc">
                <h3>TOURS & TRAVELS</h3>
                <div>
                  <img src="/images/bea-partner/private.jpg" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;
