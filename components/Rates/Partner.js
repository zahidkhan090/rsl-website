import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import Link from 'next/link';
import Rates from '../datas/rates.json';
class Partner extends React.Component {
  constructor(props) {
    super();
    this.state = {
      snow: Rates[0].snow,
      slater: Rates[0].slater,
      moving: Rates[0].moving,
      waiting: Rates[0].waiting,
      mnow: Rates[0].mnow,
      mlater: Rates[0].mlater,
      airportCharge: Rates[0].airportCharge,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      snow: Rates[value].snow,
      slater: Rates[value].slater,
      moving: Rates[value].moving,
      waiting: Rates[value].waiting,
      mnow: Rates[value].mnow,
      mlater: Rates[value].mlater,
      airportCharge: Rates[value].airportCharge,
    });
  }

  render() {
    return (
      <div className="partner-area payment-processing-partner bor-bottom-1">
        <div className="container">
          <div className="section-title">
            <h2>RATES</h2>
            <div className="bar"></div>
          </div>
          <p>
            'How much will your transport cost? What are the rates in your city?
            Estimate your travel fare anywhere, anytime using our quick and
            simple rate estimator. The rates will vary with distance and waiting
            time.’
          </p>

          <div>
            <select
              id="select-rate"
              style={{ width: '100%' }}
              onChange={this.handleChange}
            >
              {Rates.map((item, index) => (
                <option value={index}>{item.title}</option>
              ))}
              {/* <option selected="selected" value="business-cars">
                Business Cars (Lexus ES350)
              </option>
              <option value="suvs">
                Business SUVs / Minivans (Toyota Previa/ Toyota Alphard)
              </option>
              <option value="1st-class">
                1st Class SUV (Escalade, Chev. Suburban, GMC Denali, Chev. Tahoe
                &amp; Toyota Prado)
              </option>
              <option value="1st-business">
                1st Class Sedan Cars (BMW, Mercedes S-Class &amp; E-Class)
              </option> */}
            </select>
          </div>
          <div className="row tbl1">
            <h4 className="pdt">Hire rates *</h4>
            <div className="col col-lg-4 col-md-4 pr-0">
              <div className="row mr-0">
                <div className="col col-lg-12 col-md-12">Starting</div>
                <div className="col col-lg-8 col-md-8 pr-0">NOW:</div>
                <div className="col col-lg-4 col-md-4 pr-0">
                  {this.state.snow}
                </div>
                <div className="col col-lg-8 col-md-8 pr-0">LATER:</div>
                <div className="col col-lg-4 col-md-4 pr-0">
                  {this.state.slater}
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-4 pr-0">
              <div className="row mr-0">
                <div className="col col-lg-8 col-md-8 pr-0">
                  Moving (per km):
                </div>
                <div className="col col-lg-4 col-md-4 pr-0">
                  {this.state.moving}
                </div>
                <div className="col col-lg-8 col-md-8 pr-0">
                  Waiting (per hour) below 10 km/h:
                </div>
                <div className="col col-lg-4 col-md-4 pr-0">
                  {this.state.waiting}
                </div>
              </div>
            </div>
            <div
              className="col col-lg-4 col-md-4 pr-0"
              style={{ paddingBottom: '20px' }}
            >
              <div className="row mr-0">
                <div className="col col-lg-12 col-md-12">Minimum</div>
                <div className="col col-lg-8 col-md-8 pr-0">NOW:</div>
                <div className="col col-lg-4 col-md-4 pr-0">
                  {this.state.mnow}
                </div>
                <div className="col col-lg-8 col-md-8 pr-0">LATER:</div>
                <div className="col col-lg-4 col-md-4 pr-0">
                  {this.state.mlater}
                </div>
                <div className="col col-lg-8 col-md-8 pr-0">
                  Airport pickup surcharge:
                </div>
                <div className="col col-lg-4 col-md-4 pr-0">
                  {this.state.airportCharge}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="project-details-desc">
                <ul>
                  <li>
                    A generous allowance time is always made for journey times
                    to & from airports.
                  </li>
                  <li>
                    We cannot accept responsibility for unavoidable delays
                    encountered in route such as accidents & diversions.
                  </li>
                  <li>
                    For airport collections: we reserve the right to change
                    additional waiting time 30 minutes from the agreed time. We
                    regularly check for flight information & do our best to time
                    the pick up as smoothly as possible, but please get in touch
                    with us if you have any problem.
                  </li>
                </ul>
                <p style={{ color: '#d7d7d7' }}>* All prices in AED</p>
                <p style={{ color: '#d7d7d7' }}>
                  ** The rate does not include SALIK charges in Dubai. AED 4
                  (actual cost) will be charged for every SALIK crossing while
                  in a ride
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partner;
